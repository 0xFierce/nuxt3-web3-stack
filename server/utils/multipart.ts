import { type MultiPartData } from 'h3'
import { randomUUID } from 'node:crypto'
import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'

const s3 = new S3Client({
    forcePathStyle: false,
    endpoint: process.env.DO_SPACES_URL,
    region: process.env.DO_SPACES_REGION ,
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY as string,
      secretAccessKey: process.env.DO_SPACES_SECRET as string
    }
})

const FILE_KEYS = ['name', 'filename', 'type', 'data']

const isFile = (data: MultiPartData) => {
    return Object.keys(data).filter((key) => FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length
}

export const parseMultiPart = (data?: MultiPartData[]) => {
    const array = (Array.isArray(data) ? data : []) as MultiPartData[]

    const result = array.reduce((prev: Record<string, any>, curr) => {
        prev[String(curr.name)] = isFile(curr) ? curr : curr.data.toString('utf8')
        return prev
    }, {})

    return result
}

export const saveFile = async (file: MultiPartData) => {
    const [_mine, ext] = String(file.type).split('/')
    const fileName = randomUUID() + '.' + ext

    const result = await new Upload({
        client: s3,
        params: {
          ACL: 'public-read',
          Bucket: process.env.DO_SPACES_BUCKET,
          Key: fileName,
          Body: file.data
        },
        // tags: [], // optional tags
        // queueSize: 4, // optional concurrency configuration
        // partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
        // leavePartsOnError: false, // optional manually handle dropped parts
    })
        .done()

    return result.Location
}

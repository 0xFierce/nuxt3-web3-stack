import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export default NuxtAuthHandler({

  secret: process.env.JWT_SECRET,

  pages: {
    signIn: '/admin/auth/login',
    signOut: '/admin/auth/login',
    error: '/admin/auth/login',
  },

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
     
      async authorize (credentials: { username: string, password: string }) {

        const admin = await prisma.admin.findUnique({
          where: { username: credentials?.username },
        })

        if (!admin) {
          throw createError({
            statusCode: 403,
            statusMessage: "Credentials not working",
          })

        }

        const isPasswordValid = await bcrypt.compare(credentials?.password, admin.password)

        if (!isPasswordValid) {
          throw createError({
            statusCode: 403,
            statusMessage: "Credentials not working",
          })

        }

        return admin
      }
    })
  ],
  
  callbacks: {
    // Specify here the payload of your token and session
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) { 
        token.id = user.id
        token.username = user.username
      }
      return token
    },

    async session({ session, token }: { session: any, token: any }) {
      session.user.id = token.id
      session.user.username = token.username
      return session
    },

  },
})
export default function (number: string | number, digest: number = 6) {

    digest = Number(number) > 0 ? digest : 0

    return + parseFloat(( + number ).toFixed(digest))
}
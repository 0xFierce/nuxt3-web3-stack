export default function (parityRate: string, value: string) {
    if (!+parityRate || !+value) return 0
    
    return Number.parseFloat(value) / Number.parseFloat(parityRate)
}
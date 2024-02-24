export function shortAddressFilter(value = '') {
    return `${ value.slice(0, 5) }...${ value.slice(-4) }`
}
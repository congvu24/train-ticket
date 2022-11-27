export function formatCurrency(value){
    return new Intl.NumberFormat('vn-Vi', { style: 'currency', currency: 'VND' }).format(value)
}
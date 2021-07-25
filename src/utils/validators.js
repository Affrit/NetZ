export const requiredField = value => {
    if (!value) return 'Field is required'
}

export const maxLength = (maxValue) => (value) => {
    if (value.length > maxValue) return `Max length is ${maxValue} symbols`
}
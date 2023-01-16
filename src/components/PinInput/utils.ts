export const regexValidate = (pattern: string, value: string) => {
    const regex = new RegExp(pattern);
    return regex.test(value);
}
export const required = (value: string) => {
  const trimmedValue = value?.trim() || '';
  return trimmedValue && trimmedValue.length
}
export const upperCaseFirst = (text: string): string => {
  const strFirstUpper: string = text.charAt(0).toUpperCase() + text.slice(1);
  return strFirstUpper;
};

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date: Date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.toLocaleDateString("en", { year: "2-digit" }),
  ].join(".");
};

export const getFormData = (object: any) =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
  }, new FormData());

/**
 * Remove commas for number
 * Ex: 230,900 --> 230900
 */
export const removeCommasForNumber = (number: string) =>
  number.replace(/,/g, "");

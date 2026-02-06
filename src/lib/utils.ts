export const cn = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

export const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

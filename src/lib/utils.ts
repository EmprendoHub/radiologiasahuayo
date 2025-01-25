import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FormattedPrice = ({ amount }: { amount: number }) => {
  const formattedAmount = amount?.toLocaleString("en-US", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  });

  // Remove 'MX' from the formatted amount
  const amountWithoutMX = formattedAmount?.replace("MX", "").trim();

  return amountWithoutMX;
};

export default FormattedPrice;

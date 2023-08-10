import { formatPrice } from "@/lib/format";

export default function PriceTag({ price, className }) {
  return <span className={` ${className}`}>{formatPrice(price)}</span>;
}

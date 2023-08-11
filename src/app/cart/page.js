import { getCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { clearCart } from "./actions";
import ClearCart from "./ClearCart";
import CheckOutButton from "./CheckOutButton";
import CompCart from "./CompCart";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="min-h-[90vh] my-5">

    <CompCart cart={cart} />
     </div>
  );
}

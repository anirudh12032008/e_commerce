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
    <CompCart cart={cart} />
    // <div>
    //   <h1 className="mb-6 text-3xl font-bold">Shopping Cart      use 424242.... for card no. and any future date for card and any cvc</h1>
    //   {cart?.items.map((cartItem) => (
    //     <CartEntry
    //       cartItem={cartItem}
    //       key={cartItem.id}
    //       setProductQuantity={setProductQuantity}
    //     />
    //   ))}
    //   {!cart?.items.length && <p>Your cart is empty.</p>}
    //   <div className="flex flex-col items-end sm:items-center">
    //     <p className="mb-3 font-bold">
    //       Total: {formatPrice(cart?.subtotal || 0)}
    //     </p>
    //     <CheckOutButton cart={cart} products={cart.items} />
    //     <ClearCart clearCart={clearCart} cart={cart} />
    //   </div>
    // </div>
  );
}

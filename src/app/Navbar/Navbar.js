import logo from "@/assets/logo.jpg";
import { getCart } from "@/lib/db/cart";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CompNav from "./CompNav";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <>
      <CompNav cart={cart} session={session} logo={logo} />
    </>
  );
}

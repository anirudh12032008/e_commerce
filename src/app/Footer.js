import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral  p-10 py-5 text-neutral-content">
      <div className="footer m-auto min-w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
         <div className="text-lg mb-3">
           Made By Anirudh Sahu with &#9829;
          </div>
          <div className="flex justify-around w-full">

          <Link href={"/"} className="link-hover link">
            Home
          </Link>
          <Link href={"/"} className="link-hover link">
            Products
          </Link>
          <Link href={"mailto:renudilip19@gmail.com"} className="link-hover link">
            Suppport
          </Link>
          <Link href={"/"} className="link-hover link">
            Policy
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

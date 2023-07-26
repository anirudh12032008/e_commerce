import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anizon",
  description:
    "Discover a world of anime merchandise and collectibles at Anizon. Shop the latest and greatest selection of anime figures, clothing, accessories, and more. Find your favorite characters and bring your anime fandom to life. Start exploring AniZon now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="min-w-full ">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

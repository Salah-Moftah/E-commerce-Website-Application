import NavbarWithCTAButton from "../components/Navbar/Navbar";
import "./globals.css";
import { Kanit } from "next/font/google";
import Footer from "../components/Footer/Footer";
import { ThemeProviderMode } from "../context/ThemeContext";
import { CartProvider } from "../context/cartContext";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "900", "500", "400", "700", '600', '800'],
});

export const metadata = {
  title: "Moshop - Home",
  description:
    "Discover a world of endless shoping possibilities at our online store. Browse, Choose, and order your favorite products from the comfort of your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className} style={{ color: "#bbb" }}>
        <ThemeProviderMode>
          <CartProvider>
            <div
              style={{ minHeight: "100vh" }}
              className="container mx-auto px-7 flex justify-between flex-col min-h-full"
            >
              <NavbarWithCTAButton />
              {children}
              <Footer />
            </div>
          </CartProvider>
        </ThemeProviderMode>
      </body>
    </html>
  );
}

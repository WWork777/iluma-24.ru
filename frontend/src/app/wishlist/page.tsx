import WishlistLayout from "@/components/wishlist/wishlistLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Избранное | iluma-24",
  description: "Ваш список избранных товаров IQOS Iluma и TEREA",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Избранное | iluma-24",
    description: "Ваш список избранных товаров",
    url: "https://iluma-24.ru/wishlist",
  },
};

export default function WishList() {
  return <WishlistLayout />;
}

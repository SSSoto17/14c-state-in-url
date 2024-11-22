import { use } from "react";
import Image from "next/image";
import whiteTee from "@/assets/whitetee.jpg";

const product = {
  title: "Classic T-shirt",
  price: 9.99,
  sizes: ["xxs", "xs", "m", "l", "xl", "xxl", "xxxl"],
  colors: ["White", "Black&White", "Red", "Black"],
};

export default function Checkout({ searchParams }) {
  const { size, color } = use(searchParams);

  return (
    <main>
      <section>
        <article>
          <Image src={whiteTee} alt={product.title} />
          <p>Size: {size}</p>
          <p>Color: {color}</p>
        </article>
      </section>
    </main>
  );
}

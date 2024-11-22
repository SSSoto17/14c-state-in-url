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
        <h2>Your Cart</h2>
        <article className="grid grid-cols-2 gap-6 max-h-40 max-w-96">
          <Image src={whiteTee} alt={product.title} />
          <div>
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p>
              Size: <strong className="uppercase">{size}</strong>
            </p>
            <p>
              Color: <strong>{color}</strong>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

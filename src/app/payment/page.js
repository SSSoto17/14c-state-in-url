import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import { use } from "react";
import { FaArrowLeft } from "react-icons/fa";

import whiteTee from "@/assets/whitetee.jpg";
import blackTee from "@/assets/blacktee.webp";
import blackWhiteTee from "@/assets/blackwhitetee.jpg";
import redTee from "@/assets/redtee.jpg";

const product = {
  title: "Classic T-shirt",
  price: 9.99,
  sizes: ["xxs", "xs", "m", "l", "xl", "xxl", "xxxl"],
  colors: [
    { name: "White", img: whiteTee },
    { name: "Black", img: blackTee },
    { name: "Black&White", img: blackWhiteTee },
    { name: "Red", img: redTee },
  ],
};

export default function Checkout({ searchParams }) {
  const { size, color } = use(searchParams);

  const currentTeeColor = product.colors
    .filter((productColor) => productColor.name == color)
    .pop();

  return (
    <main className="place-content-start">
      <Link
        href="/"
        className="text-lg text-slate-700 hover:text-[var(--foreground)] border-b border-slate-100 w-fit flex gap-2 items-center"
      >
        <FaArrowLeft />
        Back
      </Link>
      <section className="place-self-center border border-slate-200 rounded-2xl p-12 grid gap-y-8">
        <h2 className="text-4xl font-bold cursor-default">Your Cart</h2>
        <ProductCard
          title={product.title}
          img={color ? currentTeeColor.img.src : whiteTee}
          size={size}
          color={color}
        />
        {/* {size && color ? (
          <article className="grid grid-cols-2 gap-6 max-w-96 py-4 border-t border-b border-slate-100 cursor-default">
            <Image
              src={color ? currentTeeColor.img.src : whiteTee}
              alt={product.title}
              width={600}
              height={600}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p>
                Size: <strong className="uppercase">{size}</strong>
              </p>
              <p>
                Color: <strong>{color}</strong>
              </p>
            </div>
          </article>
        ) : size ? (
          <article className="grid grid-cols-2 gap-6 max-w-96 py-4 border-t border-b border-slate-100 cursor-default">
            <Image
              src={currentTeeColor.img.src}
              alt={product.title}
              width={600}
              height={600}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p>
                Size: <strong className="uppercase">{size}</strong>
              </p>
              <p>
                Color: <small>No color selected.</small>
              </p>
            </div>
          </article>
        ) : color ? (
          <article className="grid grid-cols-2 gap-6 max-w-96 py-4 border-t border-b border-slate-100 cursor-default">
            <Image
              src={currentTeeColor.img.src}
              alt={product.title}
              width={600}
              height={600}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p>
                Size: <small>No size selected</small>.
              </p>
              <p>
                Color: <strong>{color}</strong>
              </p>
            </div>
          </article>
        ) : (
          "Please select size and color."
        )} */}

        {/* <article className="grid grid-cols-2 gap-6 max-w-96 py-4 border-t border-b border-slate-100 cursor-default">
          <Image
            src={currentTeeColor.img.src}
            alt={product.title}
            width={600}
            height={600}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
            <p>
              Size: <strong className="uppercase">{size}</strong>
            </p>
            <p>
              Color: <strong>{color}</strong>
            </p>
          </div>
        </article> */}
        <button className="place-self-center inline-block w-36 text-slate-50 bg-green-800 hover:bg-green-700 rounded-md py-2 px-4">
          Pay now
        </button>
      </section>
    </main>
  );
}

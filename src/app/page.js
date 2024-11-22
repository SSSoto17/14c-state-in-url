"use client";

import Image from "next/image";
import { useState } from "react";

import whiteTee from "@/assets/whitetee.jpg";
import blackTee from "@/assets/blacktee.webp";
import blackWhiteTee from "@/assets/blackwhitetee.jpg";
import redTee from "@/assets/redtee.jpg";
import OptionField from "@/components/OptionField";

const product = {
  title: "Classic T-shirt",
  price: 9.99,
  sizes: [
    { category: "size", name: "XXS" },
    { category: "size", name: "XS" },
    { category: "size", name: "M" },
    { category: "size", name: "L" },
    { category: "size", name: "XL" },
    { category: "size", name: "XXL" },
    { category: "size", name: "XXXL" },
  ],
  colors: [
    { category: "color", name: "White", img: whiteTee },
    { category: "color", name: "Black", img: blackTee },
    { category: "color", name: "Black&White", img: blackWhiteTee },
    { category: "color", name: "Red", img: redTee },
  ],
};

export default function Home() {
  const [teeColor, setTeeColor] = useState(whiteTee);

  return (
    <main className="place-content-start">
      <section className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <Image src={teeColor} alt={product.title} width={800} height={800} />
        <article className="grid auto-rows-min gap-y-8">
          <header className="cursor-default">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p>
              Price: <strong>${product.price}</strong>
            </p>
          </header>
          <form action="/payment" className="grid auto-rows-min gap-y-8">
            <OptionField options={product.sizes} />
            <OptionField options={product.colors} clickEvent={setTeeColor} />
            <button className="inline-block w-fit text-slate-50 bg-green-800 hover:bg-green-700 rounded-md py-2 px-4">
              Add to cart
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

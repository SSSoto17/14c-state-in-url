"use client";

import Image from "next/image";

import whiteTee from "@/assets/whitetee.jpg";
import blackTee from "@/assets/blacktee.webp";
import blackWhiteTee from "@/assets/blackwhitetee.jpg";
import redTee from "@/assets/redtee.jpg";

const product = {
  title: "Classic T-shirt",
  price: 9.99,
  sizes: ["xxs", "xs", "m", "l", "xl", "xxl", "xxxl"],
  colors: ["White", "Black&White", "Red", "Black"],
};

export default function Home() {
  return (
    <main className="place-content-start">
      <section className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <Image src={whiteTee} alt={product.title} />
        <article className="grid auto-rows-min gap-y-8">
          <header className="cursor-default">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p>
              Price: <strong>${product.price}</strong>
            </p>
          </header>
          <form action="/payment" className="grid auto-rows-min gap-y-8">
            <fieldset className="flex">
              <legend className="font-semibold flex-[0_0_4rem]">Size</legend>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map((size) => {
                  return (
                    <label
                      htmlFor={size}
                      className="relative bg-slate-100 hover:bg-slate-200 hover:text-[var(--foreground)] has-[:checked]:bg-slate-700 has-[:checked]:text-slate-50 has-[:checked]:hover:bg-slate-900 has-[:checked]:hover:text-slate-50  py-1 px-2 rounded-md uppercase"
                      key={size}
                    >
                      <input
                        id={size}
                        type="radio"
                        name="size"
                        value={size}
                        className="appearance-none absolute inset-0 opacity-0 cursor-pointer"
                      />
                      {size}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <fieldset className="flex">
              <legend className="font-semibold flex-[0_0_4rem]">Color</legend>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color) => {
                  return (
                    <label
                      htmlFor={color}
                      className="relative bg-slate-100 hover:bg-slate-200 hover:text-[var(--foreground)] has-[:checked]:bg-slate-700 has-[:checked]:text-slate-50 has-[:checked]:hover:bg-slate-900 has-[:checked]:hover:text-slate-50 py-1 px-2 rounded-md"
                      key={color}
                    >
                      <input
                        id={color}
                        type="radio"
                        name="color"
                        value={color}
                        className="appearance-none absolute inset-0 opacity-0 cursor-pointer"
                      />
                      {color}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <button className="inline-block w-fit text-slate-50 bg-green-800 hover:bg-green-700 rounded-md py-2 px-4">
              Add to cart
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

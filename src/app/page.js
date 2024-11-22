"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

import whiteTee from "@/assets/whitetee.jpg";

const product = {
  title: "Classic T-shirt",
  price: 9.99,
  sizes: ["xxs", "xs", "m", "l", "xl", "xxl", "xxxl"],
  colors: ["White", "Black&White", "Red", "Black"],
};

export default function Home() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <main className="place-content-center">
      <section className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        <Image src={whiteTee} alt={product.title} />
        <article className="grid auto-rows-min gap-y-8">
          <header className="cursor-default">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p>
              Price: <strong>${product.price}</strong>
            </p>
          </header>
          <section className="flex">
            <h3 className="font-semibold flex-[0_0_4rem]">Size</h3>
            <ul className="flex flex-wrap gap-4">
              {product.sizes.map((size) => {
                return (
                  <li
                    className={`${
                      searchParams.get("size") == size
                        ? "bg-slate-700 text-slate-50 hover:bg-slate-900 hover:text-slate-50"
                        : "bg-slate-100"
                    }  py-1 px-2 rounded-md cursor-pointer hover:bg-slate-200 hover:text-[var(--foreground)] uppercase`}
                    key={size}
                  >
                    <Link href={`?${createQueryString("size", size)}`}>
                      {size}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="flex">
            <h3 className="font-semibold flex-[0_0_4rem]">Color</h3>
            <ul className="flex flex-wrap gap-4">
              {product.colors.map((color) => {
                return (
                  <li
                    className={`${
                      searchParams.get("color") == color
                        ? "bg-slate-700 text-slate-50 hover:bg-slate-900 hover:text-slate-50"
                        : "bg-slate-100"
                    } bg-slate-100 py-1 px-2 rounded-md cursor-pointer hover:bg-slate-200`}
                    key={color}
                  >
                    <Link href={`?${createQueryString("color", color)}`}>
                      {color}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <Link
            href={`/payment?${searchParams}`}
            className="inline-block w-fit text-slate-50 bg-green-800 hover:bg-green-700 rounded-md py-2 px-4"
          >
            Add to cart
          </Link>
        </article>
      </section>
    </main>
  );
}

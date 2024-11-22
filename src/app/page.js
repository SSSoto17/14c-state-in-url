"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useState } from "react";
import { Suspense } from "react";

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

export default function Home() {
  return (
    <main className="place-content-start">
      <Suspense>
        <ProductOverview />
      </Suspense>
    </main>
  );
}

export function ProductOverview() {
  const searchParams = useSearchParams();
  const [teeColor, setTeeColor] = useState(whiteTee);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      <Image src={teeColor} alt={product.title} width={800} height={800} />
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
                    searchParams.get("color") == color.name
                      ? "bg-slate-700 text-slate-50 hover:bg-slate-900 hover:text-slate-50"
                      : "bg-slate-100"
                  } bg-slate-100 py-1 px-2 rounded-md cursor-pointer hover:bg-slate-200`}
                  key={color.name}
                >
                  <Link
                    href={`?${createQueryString("color", color.name)}`}
                    onClick={() => {
                      setTeeColor(color.img);
                    }}
                  >
                    {color.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        {!searchParams.get("size") && "nope"}
        <Link
          href="/"
          className={`${
            !searchParams.get("size") && "disabled"
          } inline-block w-fit text-slate-50 bg-green-800 hover:bg-green-700 disabled:bg-slate-200 rounded-md py-2 px-4`}
        >
          Add to cart
        </Link>
        <Link
          href={`/payment?${searchParams}`}
          className="inline-block w-fit text-slate-50 bg-green-800 hover:bg-green-700 rounded-md py-2 px-4"
        >
          Add to cart
        </Link>
      </article>
    </section>
  );
}

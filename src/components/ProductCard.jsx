import Image from "next/image";

const ProductCard = ({ title, img, size, color }) => {
  console.log(color);
  return (
    <article className="grid grid-cols-2 gap-6 max-w-96 py-4 border-t border-b border-slate-100 cursor-default">
      <Image src={img} alt={title} width={600} height={600} />
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p>
          Size:{" "}
          {size ? (
            <strong className="uppercase">{size}</strong>
          ) : (
            <small>No size selected.</small>
          )}
        </p>
        <p>
          Color:{" "}
          {color ? <strong>{color}</strong> : <small>No color selected.</small>}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;

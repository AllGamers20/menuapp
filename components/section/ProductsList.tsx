import Card from "./Card";

export default function ProductList({ category }: any) {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {category.products.map((product: any) => (
        <Card product={product} key={category.key} />
      ))}
    </div>
  );
}

export default function Card({
  product,
}: {
  product: { name: string; price: number };
}) {
  return (
    <div className="flex gap-2 justify-between p-2 border border-blue-400 rounded-lg">
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
}

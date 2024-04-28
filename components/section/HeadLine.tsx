export default function Headline({ title }: { title: string }) {
  return (
    <>
      <div className="flex justify-center p-2 gap-4 bg-gray-200">
        <h1 className="text-4xl text-amber-500 font-bold">{title}</h1>
      </div>
    </>
  );
}

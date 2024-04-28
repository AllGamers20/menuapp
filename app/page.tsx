"use client";
import NavBar from "@/components/atom/NavBar";
import HeadLine from "@/components/section/HeadLine";
import ProductList from "@/components/section/ProductsList";
import { categories } from "@/public/data/MenuData";

export default function page() {
  return (
    <>
      <NavBar />
      {categories?.map((category) => (
        <div>
          <HeadLine title={category?.name} />
          <ProductList category={category} />
        </div>
      ))}
    </>
  );
}

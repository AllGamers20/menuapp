import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { categories } from "@/public/data/MenuData";
export default function NavBar() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <>
      <div className="flex p-2 gap-6 bg-amber-200">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setActiveTab(category.name)}
            className={`text-amber-500 rounded-full text-center px-2 py-2 w-32 cursor-pointer ${
              activeTab === category.name
                ? "bg-white text-black px-4 py-2 "
                : "bg-amber-500 text-white"
            }`}>
            {category.name}
          </div>
        ))}
        <div className="flex items-center justify-evenly gap-2">
          <FaCartShopping size={35} color="white" />
        </div>
      </div>
    </>
  );
}

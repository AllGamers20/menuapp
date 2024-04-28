import { FaCartShopping } from "react-icons/fa6";
import { Types } from "@/public/data/NavbarData";
import Link from "next/link";
import { useState } from "react";
export default function NavBar() {
  const [isActive, setIsActive] = useState<number | null>(null);
  return (
    <>
      <div className="flex p-2 gap-6 bg-amber-200">
        {Types.map((type) => (
          <div
            key={type.id}
            className={`bg-white text-amber-500 rounded-full text-center px-2 py-2 w-32 active:${
              isActive == type.id
                ? "bg-amber-500 text-black px-4 py-2 rounded-full text-center"
                : "bg-white text-amber-500 rounded-full text-center px-2 py-2"
            }`}
          >
            <button onClick={() => setIsActive(type.id)}>
              {type.Name}
            </button>
          </div>
        ))}
      <div className="flex items-center justify-evenly gap-2">
        <FaCartShopping size={35} color="white"/>
      </div>
      </div>
    </>
  );
}

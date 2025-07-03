"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight, Icon } from "lucide-react";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { LocationEdit } from "lucide-react";

export default function HomePageLoggedIn() {
  const router = useRouter();
  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogIn = () => {
    router.push("/login");
  };
  return (
    <div className="flex flex-col w-screen">
      <div className="flex w-full h-[172px] px-[88px] py-3 justify-between items-center self-stretch bg-[#18181B] ">
        <div className="flex items-center gap-3">
          <img src="/imgs/serve.png" alt="" className="w-[46px] h-[38px]" />
          <div className="flex flex-col">
            <p className=" text-white">
              Nom<span className=" text-[#EF4444]">Nom</span>
            </p>
            <p className=" text-white">Swift delivery</p>
          </div>
        </div>
        <div className="flex gap-[13px] items-center ">
          <div className="rounded-full bg-white py-2 px-3 items-center flex gap-1 h-9 ">
            <img src="/imgs/location.png" alt="" className="w-5 h-5" />
            <p className="text-red-600">Delivery address:</p>
            <p className="flex">
              <input
                type="text"
                placeholder="Add Location "
                className="hover:outline-0 outline-0 w-[100px]"
              />
              <ChevronRight></ChevronRight>
            </p>
          </div>
          <div className="flex items-center justify-center px-4 py-2 gap-2">
            <button className="flex rounded-full bg-white hover:bg-gray-400 w-9 items-center justify-center h-9">
              <img src="/imgs/shopping-cart.png" alt="" className="w-4 h-4 " />
            </button>
          </div>
          <div>
            <button className="flex rounded-full bg-red-500 hover:bg-red-400 w-9 items-center justify-center h-9">
              <img src="/imgs/user.png" alt="" className="w-4 h-4 " />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="/imgs/heroimage.png" alt="" className="w-full h-[670px]" />
      </div>
      <div className="flex flex-col bg-black w-screen">
        {/* last */}

        <div className=" flex bg-red-500 gap-[34px] mt-[60px] px-[98px] py-7 items-center justify-center">
          <p className=" text-[30px] text-white font-semibold">
            Fresh fast delivered
          </p>
          <p className=" text-[30px] text-white font-semibold">
            Fresh fast delivered
          </p>
          <p className=" text-[30px] text-white font-semibold">
            Fresh fast delivered
          </p>
          <p className=" text-[30px] text-white font-semibold">
            Fresh fast delivered
          </p>
          <p className=" text-[30px] text-white font-semibold">
            Fresh fast delivered
          </p>
        </div>
        {/* middle */}
        <div className="flex w-screen items-start gap-[220px] mx-[88px] mt-[76px]">
          <div className="flex flex-col items-center gap-3">
            <img src="/imgs/serve.png" alt="" className="w-[46px] h-[37px]" />
            <div className="flex flex-col items-center">
              <p className=" text-white font-semibold text-xl">
                Nom<span className=" text-[#EF4444]">Nom</span>
              </p>
              <p className=" text-white font-normal text-[12px]">
                Swift delivery
              </p>
            </div>
          </div>
          {/* middle second */}
          <div className="flex items-start gap-[112px]">
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A] self-stretch text-[16px]">NOMNOM</p>
              <p className="text-white text-[16px]">Home</p>
              <p className="text-white text-[16px]">Contact us</p>
              <p className="text-white text-[16px]">Delivery zone</p>
            </div>
          </div>
          {/* middle third */}
          <div className="flex items-start gap-[112px]">
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A] self-stretch text-[16px]">MENU</p>
              <p className="text-white text-[16px]">Appetizers</p>
              <p className="text-white text-[16px]">Salads</p>
              <p className="text-white text-[16px]">Pizzas</p>
              <p className="text-white text-[16px]">Lunch favorites</p>
              <p className="text-white text-[16px]">Main dishes</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-black self-stretch text-[16px]">eheheh</p>
              <p className="text-white text-[16px]">Side dish </p>
              <p className="text-white text-[16px]">Brunch</p>
              <p className="text-white text-[16px]">Desserts</p>
              <p className="text-white text-[16px]">Beverages</p>
              <p className="text-white text-[16px]">Fish & Sea foods</p>
            </div>
          </div>
          {/* middle last */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A] self-stretch text-[16px]">
                FOLLOW US
              </p>
              <div className="flex ">
                <a href="#">
                  <img src="/imgs/Facebook.png" alt="" className="w-7 h-7" />
                </a>
                <a href="#">
                  <img src="/imgs/Instagram.png" alt="" className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* footer last */}
        <div className="flex w-[1440px] justify-center py-8 gap-12 border-t border-solid border-t-[#71717A] ">
          <div className="flex items-end gap-1 text-[#71717A]">
            <p>Copy right 2024</p>
            <p>©</p>
            <p>Nomnom LLC</p>
          </div>
          <p className="text-[#71717A]">Privacy policy</p>
          <p className="text-[#71717A]">Terms and conditoin</p>
          <p className="text-[#71717A]">Cookie policy</p>
        </div>
      </div>
    </div>
  );
}

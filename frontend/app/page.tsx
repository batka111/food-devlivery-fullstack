import Header from "@/components/HomeComponents/header";
import { Button } from "@/components/ui/button";

const Food = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <div>
        <img src="/imgs/heroimage.png" alt="" className="w-full h-[670px]" />
      </div>
      <div className="flex flex-col bg-black w-screen">
        {/* header */}

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
        <div className="flex w-[1264px] items-start gap-[220px] justify-center mt-[76px]">
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
                <img src="/imgs/Facebook.png" alt="" className="w-7 h-7" />
                <img src="/imgs/Instagram.png" alt="" className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;

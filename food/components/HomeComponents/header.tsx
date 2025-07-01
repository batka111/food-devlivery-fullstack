import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex w-full h-[172px] px-[88px] py-3 justify-between items-center self-stretch bg-[#18181B]">
      <div className="flex items-center gap-3">
        <img src="/imgs/serve.png" alt="" className="w-[46px] h-[38px]" />
        <div className="flex flex-col">
          <p className=" text-white">
            Nom<span className=" text-[#EF4444]">Nom</span>
          </p>
          <p className=" text-white">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Button className="bg-white text-black h-8 gap-2 px-3 py-2 rounded-full hover:bg-red-100">
          Sign Up
        </Button>
        <Button className="bg-red-500 h-8 gap-2 px-3 py-2 rounded-full">
          Log In
        </Button>
      </div>
    </div>
  );
}

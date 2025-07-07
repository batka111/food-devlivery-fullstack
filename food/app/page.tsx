"use client";
import { useEffect, useState } from "react";
import Header from "../components/HomeComponents/header";

const Food = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("http://localhost:3303/food")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);
  console.log(message);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Food;

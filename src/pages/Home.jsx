import React from "react";
import carlogo from "../assets/car.png";
import instant from "../assets/instant.png";
import accurate from "../assets/Accurate.png";
import details from "../assets/Detail.png";

const Home = () => {
  const data = [
    {
      icon:  instant ,
      name: "instant calculation",
      des: "Get EMI in real-time",
    },
    {
      icon: accurate ,
      name: "Accurate Result",
      des: "100% reliable calculations",
    },
    {
      icon:  details ,
      name: "Detail Breackdown",
      des: "Complete loan summary",
    },
  ];
  return (
    <div className="flex items-center justify-center   ">
      <div className="flex flex-col items-center justify-center border border-zinc-300 rounded-2xl shadow bg-zinc-100 py-6">
        <h1 className="font-bold text-4xl ">
          Car EMI <br />
          <span className="text-[blue] "> Calculator</span>
        </h1>
        <p className="my-5 text-zinc-700">
          Calculato your car loan EMI <br /> instant with accutat results.
        </p>
        <img className="overflow-auto rounded-2xl" src={carlogo} alt="" />

        {data.map((item, index) => (
          <div key={index} className="flex border border-zinc-400 shadow-2xl h-12 w-80  items-center  bg-white rounded-xl my-1 ">
            <img className="h-8 ml-8 rounded-full" src={item.icon} />
            <div className="ml-5">
              <h1 className="text-[15px] text-zinc-500">{item.name}</h1>
              <p className="text-[11px] text-zinc-500">
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react"
import { CiCreditCard1 } from "react-icons/ci";


const InputField = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col ">
      <p className="mx-2 my-2 font-bold">{label}</p>
      <div className="border border-zinc-300 rounded-xl shadow overflow-auto  flex items-center justify-between">
        <input
          className="w-full h-12 outline-none appearance-none 
          [&::-webkit-inner-spin-button]:appearance-none 
          [&::-webkit-outer-spin-button]:appearance-none px-2"
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          />
          <CiCreditCard1 className="h-5 w-5 mr-2"/>
      </div>
    </div>
  )
}

export default InputField
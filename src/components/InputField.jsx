import React from "react"
import { CiCreditCard1 } from "react-icons/ci";


const InputField = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <p className="mx-5 my-3">{label}</p>
      <div className="border border-zinc-400 rounded-md mx-5 flex items-center">
        <input
          className="w-full h-10 outline-none appearance-none 
          [&::-webkit-inner-spin-button]:appearance-none 
          [&::-webkit-outer-spin-button]:appearance-none px-2"
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <CiCreditCard1 className="mr-2 w-6 h-8"/> 
      </div>
    </div>
  )
}

export default InputField
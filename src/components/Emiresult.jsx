import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const EmiResult = ({ result }) => {
  return (
    <Card className="w-1/3 bg-zinc-100 shadow-2xl">
      <CardHeader className='my-3'>
        <CardTitle className='text-black font-bold text-2xl'>Your Results</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">

        <div>
          <p className="text-zinc-500 my-4">Monthly EMI</p>
          <p className="text-blue-600 text-2xl font-bold">
            ₹ {result.emi.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="text-zinc-500 my-4">Total Interest</p>
          <p className="text-green-600 text-2xl font-bold">
            ₹ {result.totalInterest.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="text-zinc-500 my-4">Total Amount</p>
          <p className="text-purple-600 text-2xl font-bold">
            ₹ {result.totalAmount.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-4 text-sm my-4">
          You will pay{" "}
          <span className="text-green-600 font-bold">
            {result.months}
          </span>{" "}
          monthly installments of{" "}
          <span className="text-blue-600 font-bold">
            ₹ {result.emi.toLocaleString("en-IN")}
          </span>
        </div>

      </CardContent>
    </Card>
  )
}

export default EmiResult
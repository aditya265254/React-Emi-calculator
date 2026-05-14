import React from "react"
import emical from "../assets/emiicon.png"
import { useForm, Controller } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const EmiForm = ({ onCalculate, onReset }) => {

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      carPrice: 1000000,
      downPayment: 200000,
      interestRate: 8.5,
      tenure: "5",
    },
  })

  const interestRate = watch("interestRate")

  const onSubmit = (data) => {
    onCalculate({
      carPrice: Number(data.carPrice),
      downPayment: Number(data.downPayment),
      interestRate: Number(data.interestRate),
      tenure: Number(data.tenure),
    })
  }

  const handleReset = () => {
    reset()
    onReset()
  }

  return (
    <Card className="md:w-1/3 shadow-2xl">
      <CardHeader className="mt-3">
        <CardTitle className="flex items-center gap-1">
          <img className="rounded-full w-10" src={emical} alt="icon" />
          <span className="font-bold text-lg">Car Loan Details</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 my-5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* Car Price */}
          <div className="mx-2">
            <Label className="mb-2 block font-bold">Car Price (₹)</Label>
            <Input
              type="number"
              {...register("carPrice", {
                required: "Car price zaroori hai",
                min: { value: 1, message: "Price 0 se zyada honi chahiye" },
              })}
            />
            {errors.carPrice && (
              <p className="text-red-500 text-sm mt-1">
                {errors.carPrice.message}
              </p>
            )}
          </div>

     
          <div className="mx-2">
            <Label className="mb-2 block font-bold">Down Payment (₹)</Label>
            <Input
              type="number"
              {...register("downPayment", {
                required: "Down payment zaroori hai",
                min: { value: 0, message: "0 se kam nahi ho sakta" },
              })}
            />
            {errors.downPayment && (
              <p className="text-red-500 text-sm mt-1">
                {errors.downPayment.message}
              </p>
            )}
          </div>

          <div className="my-5">
            <Controller
              name="interestRate"
              control={control}
              render={({ field }) => (
                <>
                  <p className="mx-2 my-5 text-black font-bold">
                    Interest Rate (% p.a.) — {field.value}%
                  </p>
                  <Slider
                    min={1}
                    max={25}
                    step={0.1}
                    value={[field.value]}
                    onValueChange={(val) => field.onChange(val[0])}
                    className="border-[5px] border-zinc-400 rounded-md"
                  />
                  <div className="flex justify-between text-sm text-zinc-500 mt-3">
                    <span>1%</span>
                    <span>25%</span>
                  </div>
                </>
              )}
            />
          </div>

          <div>
            <p className="mb-4 mx-2 text-black font-bold">Loan Tenure</p>
            <Controller
              name="tenure"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-zinc-100">
                    <SelectValue placeholder="Select tenure" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-300">
                    {[1, 2, 3, 4, 5, 6, 7].map((yr) => (
                      <SelectItem key={yr} value={String(yr)}>
                        {yr} Years
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex gap-4 my-6">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Calculate EMI
            </Button>
          </div>

        </form>
      </CardContent>
    </Card>
  )
}

export default EmiForm
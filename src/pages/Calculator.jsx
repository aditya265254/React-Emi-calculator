import React, { useState } from "react"
import Home from "./Home"
import EmiForm from "../components/Emiform"
import EmiResult from "../components/Emiresult"

const Calculator = () => {
  const [result, setResult] = useState(null)

  const calculateEMI = ({ carPrice, downPayment, interestRate, tenure }) => {
    const P = carPrice - downPayment
    const R = interestRate / 12 / 100
    const N = tenure * 12
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
    const totalAmount = emi * N
    const totalInterest = totalAmount - P
    setResult({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount + downPayment),
      months: N,
    })
  }

  const reset = () => setResult(null)

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Home />
      <EmiForm onCalculate={calculateEMI} onReset={reset} />
      {result && <EmiResult result={result} />}
    </div>
  )
}

export default Calculator
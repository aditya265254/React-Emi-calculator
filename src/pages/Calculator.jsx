import React, { useEffect, useState } from "react";
import emical from "../assets/emiicon.png";
import InputField from "../components/InputField";
import Home from "./Home";

const Calculator = () => {
  const [carPrice, setCarPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    const P = carPrice - downPayment;
    const R = interestRate / 12 / 100;
    const N = tenure * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;

    setResult({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount + downPayment),
      months: N,
    });
  };

useEffect(() => {
  calculateEMI()
},[])

  const reset = () => {
    setCarPrice(1000000);
    setDownPayment(200000);
    setInterestRate(8.5);
    setTenure(5);
    setResult(null);
  };

  return (
    
    <div className="flex gap-6 ">
      <Home/>
      <div className="border border-zinc-300 rounded-2xl shadow bg-zinc-100 w-120">
        <div className="my-5 mx-3 flex items-center gap-2">
          <img className="rounded-2xl w-10" src={emical} alt="icon" />
          <h2 className="font-bold text-lg">Car Loan Details</h2>
        </div>

        <InputField
          label="Car Price (₹)"
          value={carPrice}
          onChange={setCarPrice}
        />
        <InputField
          label="Down Payment (₹)"
          value={downPayment}
          onChange={setDownPayment}
        />

        <div className="mx-5 my-3">
          <p className="mb-2">Interest Rate (% p.a.) — {interestRate}%</p>
          <input
            type="range"
            min="1"
            max="25"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-zinc-500">
            <span>1%</span>
            <span>25%</span>
          </div>
        </div>
        <div className="mx-5 my-3">
          <p className="mb-2">Loan Tenure</p>
          <select
            className="w-full h-10 border border-zinc-400 rounded-md px-2 bg-white"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((yr) => (
              <option key={yr} value={yr}>
                {yr} Years
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4 mx-5 my-5">
          <button
            onClick={reset}
            className="flex-1 border border-zinc-400 rounded-lg h-10 font-semibold"
          >
            Reset
          </button>
          <button
            onClick={calculateEMI}
            className="flex-1 bg-blue-600 text-white rounded-lg h-10 font-semibold"
          >
            Calculate EMI
          </button>
        </div>
      </div>

      {result && (
        <div className="border border-zinc-300 rounded-2xl shadow bg-white w-80 p-6 flex flex-col gap-4">
          <h2 className="font-bold text-lg">Your Results</h2>

          <div>
            <p className="text-zinc-500">Monthly EMI</p>
            <p className="text-blue-600 text-2xl font-bold">
              ₹ {result.emi.toLocaleString("en-IN")}
            </p>
          </div>

          <div>
            <p className="text-zinc-500">Total Interest</p>
            <p className="text-green-600 text-2xl font-bold">
              ₹ {result.totalInterest.toLocaleString("en-IN")}
            </p>
          </div>

          <div>
            <p className="text-zinc-500">Total Amount</p>
            <p className="text-purple-600 text-2xl font-bold">
              ₹ {result.totalAmount.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 text-sm">
            You will pay{" "}
            <span className="text-green-600 font-bold">{result.months}</span>{" "}
            monthly installments of{" "}
            <span className="text-blue-600 font-bold">
              ₹ {result.emi.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Calculator;

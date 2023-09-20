import { useState } from "react"
import { CalculatorButtons } from "./caculator-buttons"
import { Screen } from "./calculator-screen"

export const CalculatorBody = () => {

  const [result, setResult] = useState<number>(0)
  const [history, setHistory] = useState<string[]>(["2+2=4", "6/2=3"])
  const [currentCalcul, setCurrentCalcul] = useState<string>("1+1")
  const [error, setError] = useState<string | undefined>(undefined)

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center border-4 border-black p-6 rounded-md"
    >
      <Screen
        error={error}
        result={result}
        history={history}
        currentCalcul={currentCalcul}
      />
      <CalculatorButtons />
    </div>
  )
}

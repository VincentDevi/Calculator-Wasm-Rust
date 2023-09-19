import { useState } from "react"
import { CalculatorButtons } from "./caculator-buttons"
import { Screen } from "./calculator-screen"

export const CalculatorBody = () => {

  const [result, setResult] = useState<number>(0)
  const [history, setHistory] = useState<string[]>([])
  const [currentCalcul, setCurrentCalcul] = useState<string>("")

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <Screen
        result={result}
        history={history}
        currentCalcul={currentCalcul}
      />
      <CalculatorButtons />
    </div>
  )
}

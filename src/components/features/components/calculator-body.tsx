import { useState } from "react"
import { CalculatorButtons } from "./caculator-buttons"
import { Screen } from "./calculator-screen"
import init, { calculate_result } from "wasm-lib"
import { Utils, utilsSchema } from "../types"

export const CalculatorBody = () => {

  const [result, setResult] = useState<number>(0)
  const [history, setHistory] = useState<string[]>([])
  const [currentCalcul, setCurrentCalcul] = useState<string>("")
  const [error, setError] = useState<string | undefined>(undefined)

  const currentCalculOnclick = (key: string) => {
    setCurrentCalcul(currentCalcul + key)
  }
  const calculateResultOnclick = () => {
    if (currentCalcul !== "") {
      init().then(() => {
        const res = calculate_result(currentCalcul)
        setResult(res)
        setHistory([...history, `${currentCalcul} = ${res}`])
        setCurrentCalcul("")
      })
    }
  }
  const utilsOnclick = (key: Utils): void => {
    setError(undefined)
    switch (key) {
      case utilsSchema.enum.DEL: {
        setCurrentCalcul(currentCalcul.slice(0, -1))
        return
      }
      case utilsSchema.enum.AC: {
        setCurrentCalcul("")
        return
      }
      default: {
        throw new Error("This utility key is not defined")
      }
    }
  }


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
      <CalculatorButtons
        onClickResult={calculateResultOnclick}
        onClickCurrentCalcul={currentCalculOnclick}
        onClickUtils={utilsOnclick}
      />
    </div>
  )
}

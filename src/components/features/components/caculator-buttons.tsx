import { NumberButton, OperationButton, UtilsButton } from "../../ui"
import { Utils, utilsSchema } from "../types"

type Props = {
  onClickResult: () => void
  onClickCurrentCalcul: (key: string) => void
  onClickUtils: (key: Utils) => void
}

export const CalculatorButtons = ({ onClickResult, onClickCurrentCalcul, onClickUtils }: Props) => {

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex gap-4 items-center justify-center">
        <UtilsButton label="DEL" onClick={() => onClickUtils(utilsSchema.enum.DEL)} />
        <UtilsButton label="AC" onClick={() => onClickUtils(utilsSchema.enum.AC)} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="7" onClick={() => onClickCurrentCalcul("7")} />
        <NumberButton label="8" onClick={() => onClickCurrentCalcul("8")} />
        <NumberButton label="9" onClick={() => onClickCurrentCalcul("9")} />
        <OperationButton label="(" onClick={() => onClickCurrentCalcul("(")} />
        <OperationButton label=")" onClick={() => onClickCurrentCalcul(")")} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="4" onClick={() => onClickCurrentCalcul("4")} />
        <NumberButton label="5" onClick={() => onClickCurrentCalcul("5")} />
        <NumberButton label="6" onClick={() => onClickCurrentCalcul("6")} />
        <OperationButton label="X" onClick={() => onClickCurrentCalcul("X")} />
        <OperationButton label="/" onClick={() => onClickCurrentCalcul("/")} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="1" onClick={() => onClickCurrentCalcul("1")} />
        <NumberButton label="2" onClick={() => onClickCurrentCalcul("2")} />
        <NumberButton label="3" onClick={() => onClickCurrentCalcul("3")} />
        <OperationButton label="+" onClick={() => onClickCurrentCalcul("+")} />
        <OperationButton label="-" onClick={() => onClickCurrentCalcul("-")} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="" onClick={() => console.log("nothing happened")} />
        <NumberButton label="0" onClick={() => onClickCurrentCalcul("0")} />
        <OperationButton label="." onClick={() => onClickCurrentCalcul(".")} />
        <OperationButton label="%" onClick={() => onClickCurrentCalcul("%")} />
        <OperationButton label="=" onClick={onClickResult} />
      </div>
    </div>
  )
}

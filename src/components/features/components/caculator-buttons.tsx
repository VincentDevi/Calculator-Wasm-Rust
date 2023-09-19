import { NumberButton, OperationButton, UtilsButton } from "../../ui"

export const CalculatorButtons = () => {
  const onClick = () => {
    //
  }
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex gap-4 items-center justify-center">
        <UtilsButton label="DEL" onClick={onClick} />
        <UtilsButton label="AC" onClick={onClick} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="7" onClick={onClick} />
        <NumberButton label="8" onClick={onClick} />
        <NumberButton label="9" onClick={onClick} />
        <OperationButton label="(" onClick={onClick} />
        <OperationButton label=")" onClick={onClick} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="4" onClick={onClick} />
        <NumberButton label="5" onClick={onClick} />
        <NumberButton label="6" onClick={onClick} />
        <OperationButton label="X" onClick={onClick} />
        <OperationButton label="/" onClick={onClick} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="1" onClick={onClick} />
        <NumberButton label="2" onClick={onClick} />
        <NumberButton label="3" onClick={onClick} />
        <OperationButton label="+" onClick={onClick} />
        <OperationButton label="-" onClick={onClick} />
      </div>

      <div className="w-full flex gap-4 items-center justify-center">
        <NumberButton label="0" onClick={onClick} />
        <OperationButton label="." onClick={onClick} />
        <OperationButton label="=" onClick={onClick} />
      </div>
    </div>
  )
}

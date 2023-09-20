type Props = {
  history: string[],
  currentCalcul: string,
  result: number,
  error: string | undefined
}
export const Screen = ({
  history, currentCalcul, result, error
}: Props) => {
  const sliceHistory = (): string[] => {
    const historyLength = history.length
    if (historyLength > 3) {
      return [history[historyLength - 3], history[historyLength - 2], history[historyLength - 1]]
    }
    return history
  }
  return (
    <div
      className="h-48 w-full border-2 border-gray-600 rounded-md p-2 bg-gray-400 text-white flex flex-col"
    >
      <div
        className="h-2/4"
      >
        {history.length > 0 && (
          <div
            className="flex flex-col items-start gap-1 font-light text-sm"
          >
            {sliceHistory().map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
      </div>
      <div
        className="h-1/4 flex items-center justify-center text-lg"
      >
        <p
          className="pr-4"
        >
          {currentCalcul}
        </p>
      </div>
      <div
        className="h-1/4 flex justify-end items-center text-2xl"
      >
        <p className="pr-6">
          {error ?? result}
        </p>
      </div>
    </div>
  )
}

type Props = {
  history: string[],
  currentCalcul: string,
  result: number,
}
export const Screen = ({
  history, currentCalcul, result
}: Props) => {
  return (
    <>
      <div>
        {history.length > 0 && (
          <>
            {history.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        )}
      </div>
      <div>
        <p>{currentCalcul}</p>
      </div>
      <div>
        <p>{result}</p>
      </div>
    </>
  )
}

import { CalculatorBody } from "./components/features/calculator-body"
import { Header, Layout } from "./components/ui"

function App() {

  return (
    <>
      <Layout header={
        <Header
          title="Calculator with React, Rust and Wasm"
          subTitle="The goal of this project is to see how we can build a simple React app but extract all the logic in a more performant language"
        />
      }>
        <CalculatorBody />
      </Layout>
    </>
  )
}

export default App

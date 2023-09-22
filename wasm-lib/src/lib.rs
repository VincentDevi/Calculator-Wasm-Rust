use shunting::{MathContext, ShuntingParser};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate_result(calcul: String) -> f64 {
    let expr = ShuntingParser::parse_str(&calcul).unwrap();
    let result = MathContext::new().eval(&expr).unwrap();
    result
}

#[test]
fn calculate_result_test() {
    unimplemented!();
}

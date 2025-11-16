import { useState } from "react";
import styles from "./calculator.module.css";

export default function Calculator(){
    //inputs
    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);
    const [answer, setAnswer] = useState(false);

    const [operator, setOperator] = useState(null);

    const [inputField, setInputField] = useState("");

    //on "clear"
    const handleClear = () => {
        setInputField("");
        setInput1(null);
        setInput2(null);
        setOperator(null);
        setAnswer(false);
    }
    //on "input"
    const handleInput = (x) => {
        if (x == "." && inputField.includes(".")){
            return;
        }
        setInputField(inputField + x);
        setAnswer(false);
    }
    
    const handleOperation = (x) => {
        if (operator === x){
            return;
        }
        let t = parseFloat(inputField);
        if (inputField !== ""){
            if (input1 === null){
                setInput1(t);
                setInputField("");
            } else {
                setInput2(t);
                setInputField("");
            }
        }
        setOperator(x);
    }

    const handleEquals = () => {
        if (inputField !== ""){
            let x = parseFloat(inputField);
            setInput2(x);
            switch (operator){
                case "/":
                    setInput1(input1 / x);
                    break;
                case "x":
                    setInput1(input1 * x);
                    break;
                case "-":
                    setInput1(input1 - x);
                    break;
                case "+":
                    setInput1(input1 + x);
                    break;
                default:
                    return;
            }
            // const t = parseFloat(input1.toFixed(5));
            // setInput1(t);
            setAnswer(true);
        }
    }
    const value = answer ? input1 : inputField || 0;
    return(
        <section className={styles.section}>
            <div className={styles.layer}>
                <p>{value}</p>
                <button className={styles.clear} onClick={handleClear}>C</button>
            </div>
            <div className="layer-2">
                <button className={styles.inputbtn} onClick={() => handleInput("7")}>7</button>
                <button className={styles.inputbtn} onClick={() => handleInput("8")}>8</button>
                <button className={styles.inputbtn} onClick={() => handleInput("9")}>9</button>
                <button className={styles.operator} onClick={() => handleOperation("/")}>\</button>
            </div>
            <div className="layer-3">
                <button className={styles.inputbtn} onClick={() => handleInput("4")}>4</button>
                <button className={styles.inputbtn} onClick={() => handleInput("5")}>5</button>
                <button className={styles.inputbtn} onClick={() => handleInput("6")}>6</button>
                <button className={styles.operator} onClick={() => handleOperation("x")}>x</button>
            </div>
            <div className="layer-4">
                <button className={styles.inputbtn} onClick={() => handleInput("1")}>1</button>
                <button className={styles.inputbtn} onClick={() => handleInput("2")}>2</button>
                <button className={styles.inputbtn} onClick={() => handleInput("3")}>3</button>
                <button className={styles.operator} onClick={() => handleOperation("-")}>-</button>
            </div>
            <div className="layer-5">
                <button className={styles.inputbtn} onClick={() => handleInput("0")}>0</button>
                <button className={styles.inputbtn} onClick={() => handleInput(".")}>.</button>
                <button className={styles.operator} onClick={handleEquals}>=</button>
                <button className={styles.operator} onClick={() => handleOperation("+")}>+</button>
            </div>
        </section>
    );
}
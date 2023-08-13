import { useState } from "react";
export default function Game() {


    const [cell, setCell] = useState(new Array(9).fill("*"));

    const setValue = (index) => {
        const newValue = "1";
        setCell((prevArray) => {
            return prevArray.map((item, element) =>
                element === index ? prevArray[element] = newValue : item
            )
        })
    }

    return (
        <div>
            <div>
                {cell.map((e, index) => <div key={index} onClick={() => setValue(index)}>{e}</div>)}
            </div>
        </div>

    )

}
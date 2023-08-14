import React, { useState } from "react";
import './Game.css';
import { VscCircleLarge } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscBlank } from "react-icons/vsc";


export default function Game() {
    const [cells, setCells] = useState(new Array(9).fill(<VscBlank />));

    if (cells[0].type.name == "VscChromeClose" || cells[1].type.name == "VscChromeClose" || cells[2].type.name == "VscChromeClose" || cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[6].type.name == "VscChromeClose" || cells[7].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose" || cells[4].type.name == "VscBlank") {
        cells[4] = <VscCircleLarge />
    } else {
        cells[6] = <VscCircleLarge />
    }

    const setValue = (index) => {
        const newValue = <VscChromeClose />;
        setCells((prevArray) => {
            return prevArray.map((item, element) =>
                element === index ? prevArray[element] = newValue : item
            );
        });
    }

    const winlose1 = cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[2].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose2 = cells[3].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose3 = cells[6].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose4 = cells[0].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose5 = cells[2].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" ? "You are WIN!" : null



    return (
        <div>
            {winlose1}
            {winlose2}
            {winlose3}
            {winlose4}
            {winlose5}
            <div className="StyleGame">
                {cells.map((value, index) => (
                    <div key={index} className="cell" onClick={() => setValue(index)}>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

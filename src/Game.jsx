import React, { useState } from "react";
import './Game.css';
import { VscCircleLarge } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscBlank } from "react-icons/vsc";


export default function Game() {

    const [cells, setCells] = useState(new Array(9).fill(<VscBlank />));

    if (cells[0].type.name == "VscChromeClose" || cells[1].type.name == "VscChromeClose" || cells[2].type.name == "VscChromeClose" || cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[6].type.name == "VscChromeClose" || cells[7].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose" && cells[4].type.name == "VscBlank") {
        cells[4] = <VscCircleLarge />
        // logic 1-2 cells
        if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose") {
            cells[2] = <VscCircleLarge />
            if (cells[6].type.name == "VscChromeClose") {
                cells[3] = <VscCircleLarge />
            } else if (cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[7].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose") {
                cells[6] = <VscCircleLarge />
            }
            if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose") {
                cells[7] = <VscCircleLarge />
            }
            if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose" && cells[8].type.name == "VscBlank") {
                cells[5] = <VscCircleLarge />
                return (
                    <div className="StyleGame">
                        {cells.map((value, index) => (
                            <div key={index} className="cell">
                                {value}
                            </div>
                        ))}
                    </div>
                );
            }
            if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" && cells[7].type.name == "VscBlank") {
                cells[5] = <VscCircleLarge />
                return (
                    <div className="StyleGame">
                        {cells.map((value, index) => (
                            <div key={index} className="cell">
                                {value}
                            </div>
                        ))}
                    </div>
                );
            }
        }
    }

    const setValue = (index) => {
        const newValue = <VscChromeClose />;
        setCells((prevArray) => {
            return prevArray.map((item, element) =>
                element === index ? prevArray[element] = newValue : item
            );
        });
    }
    const restart = () => {
        const blank = <VscBlank />;
        setCells((prevArray) => {
            return prevArray.map((item) =>
                item !== blank ? prevArray[item] = blank : null
            );
        });
    }
    const winlose1 = cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[2].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose2 = cells[3].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose3 = cells[6].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose4 = cells[0].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose5 = cells[2].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose6 = cells[0].type.name == "VscChromeClose" && cells[3].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose7 = cells[1].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose" ? "You are WIN!" : null
    const winlose8 = cells[2].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" ? "You are WIN!" : null

    const aiWinlose1 = cells[0].type.name == "VscCircleLarge" && cells[1].type.name == "VscCircleLarge" && cells[2].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose2 = cells[3].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[5].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose3 = cells[6].type.name == "VscCircleLarge" && cells[7].type.name == "VscCircleLarge" && cells[8].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose4 = cells[0].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[8].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose5 = cells[2].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[6].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose6 = cells[0].type.name == "VscCircleLarge" && cells[3].type.name == "VscCircleLarge" && cells[6].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose7 = cells[1].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[7].type.name == "VscCircleLarge" ? "AI is WIN!" : null
    const aiWinlose8 = cells[2].type.name == "VscCircleLarge" && cells[5].type.name == "VscCircleLarge" && cells[8].type.name == "VscCircleLarge" ? "AI is WIN!" : null

    const draw = cells[0].type.name !== "VscBlank" && cells[1].type.name !== "VscBlank" && cells[2].type.name !== "VscBlank" && cells[3].type.name !== "VscBlank" && cells[4].type.name !== "VscBlank" && cells[5].type.name !== "VscBlank" && cells[6].type.name !== "VscBlank" && cells[7].type.name !== "VscBlank" && cells[8].type.name !== "VscBlank" ? "Draw!" : null

    return (

        <div>
            <div>
                <button onClick={restart}>RESTART</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                {winlose1}
                {winlose2}
                {winlose3}
                {winlose4}
                {winlose5}
                {winlose6}
                {winlose7}
                {winlose8}
                {aiWinlose1}
                {aiWinlose2}
                {aiWinlose3}
                {aiWinlose4}
                {aiWinlose5}
                {aiWinlose6}
                {aiWinlose7}
                {aiWinlose8}
                {draw}
            </div>
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







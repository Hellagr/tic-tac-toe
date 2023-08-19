import React, { useState } from "react";
import './Game.css';
import { VscCircleLarge } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscBlank } from "react-icons/vsc";
import { useEffect } from "react";
import Winlose from "./winlose";


export default function Game() {

    const [cells, setCells] = useState(new Array(9).fill(<VscBlank />));

    //******************Player move
    const setValue = (index) => {
        if (!Winlose.winlose1) {
            if (cells[index].type.name === "VscBlank") {
                const updatedCells = [...cells];
                updatedCells[index] = <VscChromeClose />;
                setCells(updatedCells);
            }

        }
    };





    // useEffect(() => {
    //     const updatedCells = [...cells];
    //     // ********Empty cells */
    //     const emptyArray = updatedCells.reduce((acc, cell, index) => {
    //         if (cell.type.name === "VscBlank") {
    //             acc.push(index);
    //         }
    //         return acc;
    //     }, []);

    //     // ********Find amount of VscChromeClose */
    //     // const amountClose = updatedCells.reduce((acc, item, index) => {
    //     //     if (item.type.name === "VscChromeClose") {
    //     //         acc.push(index)
    //     //     }
    //     //     return acc;
    //     // }, []);

    //     if (emptyArray.length > 0) {

    //         const randomEmptyCell = Math.floor(Math.random() * emptyArray.length);
    //         updatedCells[randomEmptyCell] = <VscCircleLarge />;
    //         setCells(updatedCells);

    //     };

    // })

    //************Winning condition
    // const isGameOver = () => {
    //     if (!(winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8 ||
    //         aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8 || draw)) {
    //         return
    //     }
    // }

    //************Restart the game
    const restart = () => {
        const blank = <VscBlank />;
        setCells((prevArray) => {
            return prevArray.map((item) =>
                item !== blank ? prevArray[item] = blank : null
            );
        });
    }

    return (
        <div>
            <div className="button">
                <button onClick={restart}>RESTART</button>
            </div>
            <h4 style={{ visibility: "visible", minHeight: "1.5rem" }}>
                <Winlose cells={cells} />
            </h4>
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
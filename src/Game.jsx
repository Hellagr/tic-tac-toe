import React, { useState } from "react";
import './Game.css';
import { VscCircleLarge } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscBlank } from "react-icons/vsc";
import { useEffect } from "react";


export default function Game() {

    const [cells, setCells] = useState(new Array(9).fill(<VscBlank />));

    // Random number for AI move
    function getRandomInt() {
        return Math.floor(Math.random() * 9);
    }
    let newAiRandomMove = getRandomInt();


    //AI move



    //******************Player move
    const setValue = (index) => {
        const PlayerValue = <VscChromeClose />;
        const aiValue = <VscCircleLarge />;

        if (winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8 ||
            aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8 || draw) {
            return;
        }

        if (cells[index].type.name === "VscBlank") {
            const updatedCells = [...cells];
            updatedCells[index] = PlayerValue;
            setCells(updatedCells);


            const emptyCells = updatedCells.reduce((acc, cell, idx) => {
                if (cell.type.name === "VscBlank" && cell.type.name !== "VscChromeClose" && cell.type.name !== "VscCircleLarge") {
                    acc.push(idx);
                }
                return acc;
            }, []);

            if (emptyCells.length > 0) {
                const randomEmptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                updatedCells[randomEmptyCell] = aiValue;
                setCells(updatedCells);
            }
        }
    };

    const restart = () => {
        const blank = <VscBlank />;
        setCells((prevArray) => {
            return prevArray.map((item) =>
                item !== blank ? prevArray[item] = blank : null
            );
        });
    }

    const winlose1 = cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[2].type.name == "VscChromeClose";
    const winlose2 = cells[3].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose";
    const winlose3 = cells[6].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose";
    const winlose4 = cells[0].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose";
    const winlose5 = cells[2].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose";
    const winlose6 = cells[0].type.name == "VscChromeClose" && cells[3].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose";
    const winlose7 = cells[1].type.name == "VscChromeClose" && cells[4].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose";
    const winlose8 = cells[2].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose";

    const aiWinlose1 = cells[0].type.name == "VscCircleLarge" && cells[1].type.name == "VscCircleLarge" && cells[2].type.name == "VscCircleLarge";
    const aiWinlose2 = cells[3].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[5].type.name == "VscCircleLarge";
    const aiWinlose3 = cells[6].type.name == "VscCircleLarge" && cells[7].type.name == "VscCircleLarge" && cells[8].type.name == "VscCircleLarge";
    const aiWinlose4 = cells[0].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[8].type.name == "VscCircleLarge";
    const aiWinlose5 = cells[2].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[6].type.name == "VscCircleLarge";
    const aiWinlose6 = cells[0].type.name == "VscCircleLarge" && cells[3].type.name == "VscCircleLarge" && cells[6].type.name == "VscCircleLarge";
    const aiWinlose7 = cells[1].type.name == "VscCircleLarge" && cells[4].type.name == "VscCircleLarge" && cells[7].type.name == "VscCircleLarge";
    const aiWinlose8 = cells[2].type.name == "VscCircleLarge" && cells[5].type.name == "VscCircleLarge" && cells[8].type.name == "VscCircleLarge";

    const draw = cells[0].type.name !== "VscBlank" && cells[1].type.name !== "VscBlank" && cells[2].type.name !== "VscBlank" && cells[3].type.name !== "VscBlank" && cells[4].type.name !== "VscBlank" && cells[5].type.name !== "VscBlank" && cells[6].type.name !== "VscBlank" && cells[7].type.name !== "VscBlank" && cells[8].type.name !== "VscBlank" ? "Draw!" : null

    return (

        <div>
            <div className="button">
                <button onClick={restart}>RESTART</button>
            </div>

            <h4 style={{ visibility: "visible", minHeight: "1.5rem" }}>
                {winlose1 ? "Player is win!" : ""}
                {winlose2 ? "Player is win!" : ""}
                {winlose3 ? "Player is win!" : ""}
                {winlose4 ? "Player is win!" : ""}
                {winlose5 ? "Player is win!" : ""}
                {winlose6 ? "Player is win!" : ""}
                {winlose7 ? "Player is win!" : ""}
                {winlose8 ? "Player is win!" : ""}
                {aiWinlose1 ? "AI is win!" : ""}
                {aiWinlose2 ? "AI is win!" : ""}
                {aiWinlose3 ? "AI is win!" : ""}
                {aiWinlose4 ? "AI is win!" : ""}
                {aiWinlose5 ? "AI is win!" : ""}
                {aiWinlose6 ? "AI is win!" : ""}
                {aiWinlose7 ? "AI is win!" : ""}
                {aiWinlose8 ? "AI is win!" : ""}
                {draw ? "Draw!" : ""}
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
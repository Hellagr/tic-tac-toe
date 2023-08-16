import React, { useState } from "react";
import './Game.css';
import { VscCircleLarge } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscBlank } from "react-icons/vsc";


export default function Game() {

    const [cells, setCells] = useState(new Array(9).fill(<VscBlank />));

    const PlayerMove = "VscChromeClose";
    const AiMove = <VscCircleLarge />;
    const blackCell = <VscBlank />;

    //Name cells
    const cell1Name = cells[0].type.name;
    const cell2Name = cells[1].type.name;
    const cell3Name = cells[2].type.name;
    const cell4Name = cells[3].type.name;
    const cell5Name = cells[4].type.name;
    const cell6Name = cells[5].type.name;
    const cell7Name = cells[6].type.name;
    const cell8Name = cells[7].type.name;
    const cell9Name = cells[8].type.name;


    //******************AI logic (imposible level)
    if (cells[0].type.name == "VscChromeClose" || cells[1].type.name == "VscChromeClose" || cells[2].type.name == "VscChromeClose" || cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[6].type.name == "VscChromeClose" || cells[7].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose" && cells[4].type.name == "VscBlank") {
        function getRandomInt() {
            return Math.floor(Math.random() * 9);
        }

        let aiRandomMove = getRandomInt();

        while (cells[aiRandomMove].type.name !== "VscBlank") {
            aiRandomMove = getRandomInt();
        }

        cells[aiRandomMove] = AiMove;
    }




    //******************Player move
    const setValue = (index) => {
        const newValue = <VscChromeClose />;
        if (winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8 || aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8 || draw) {
            setCells((prevArray) => {
                return prevArray;
            });
        } else {
            setCells((prevArray) => {
                return prevArray.map((item, element) =>
                    element === index ? prevArray[element] = newValue : item);

            });

        }
    }

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






//first move cell 1
// if (cells[0].type.name == "VscChromeClose" || cells[1].type.name == "VscChromeClose" || cells[2].type.name == "VscChromeClose" || cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[6].type.name == "VscChromeClose" || cells[7].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose" && cells[4].type.name == "VscBlank") {
//     cells[4] = <VscCircleLarge />
//     // second move on cell 2
//     if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose") {
//         cells[2] = <VscCircleLarge />
//         if (cells[6].type.name == "VscChromeClose") {
//             cells[3] = <VscCircleLarge />
//         } else if (cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[7].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose") {
//             cells[6] = <VscCircleLarge />
//         }
//         if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" && cells[5].type.name == "VscChromeClose") {
//             cells[7] = <VscCircleLarge />
//         }
//         if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" && cells[7].type.name == "VscChromeClose" && cells[8].type.name == "VscBlank") {
//             cells[5] = <VscCircleLarge />
//         }
//         if (cells[0].type.name == "VscChromeClose" && cells[1].type.name == "VscChromeClose" && cells[6].type.name == "VscChromeClose" && cells[8].type.name == "VscChromeClose" && cells[7].type.name == "VscBlank") {
//             cells[5] = <VscCircleLarge />
//         }
//     }
//     //second move cell 3
//     if (cells[0].type.name == "VscChromeClose" && cells[2].type.name == "VscChromeClose") {
//         cells[1] = <VscCircleLarge />
//         if (cells[7].type.name == "VscChromeClose") {
//             cells[8] = <VscCircleLarge />
//         } else if (cells[3].type.name == "VscChromeClose" || cells[5].type.name == "VscChromeClose" || cells[6].type.name == "VscChromeClose" || cells[8].type.name == "VscChromeClose") {
//             cells[7] = <VscCircleLarge />
//         }
//         if ((cells[3].type.name == "VscChromeClose" && cells[5].type.name == "VscBlank" && cells[6].type.name == "VscBlank" && cells[8].type.name == "VscCircleLarge") || (cells[5].type.name == "VscChromeClose" && cells[3].type.name == "VscBlank" && cells[6].type.name == "VscBlank" && cells[8].type.name == "VscCircleLarge")) {
//             cells[6] = <VscCircleLarge />
//         }
//         if (cells[6].type.name == "VscChromeClose" && cells[5].type.name == "VscBlank" && cells[3].type.name == "VscBlank" && cells[8].type.name == "VscCircleLarge") {
//             cells[3] = <VscCircleLarge />
//         }
//     }
// }


// if (cell1Name === PlayerMove || cell2Name === PlayerMove || cell3Name === PlayerMove || cell4Name === PlayerMove || cell6Name === PlayerMove || cell7Name === PlayerMove || cell8Name === PlayerMove || cell9Name === PlayerMove) {
//     cells[4] = AiMove;
//     // 1-2
//     if ((cell1Name === PlayerMove && cell2Name === PlayerMove)) {
//         cells[2] = AiMove;
//     }
//     //2-3
//     if ((cell2Name === PlayerMove && cell3Name === PlayerMove)) {
//         cells[0] = AiMove;
//     }
//     //1-4
//     if ((cell1Name === PlayerMove && cell4Name === PlayerMove)) {
//         cells[6] = AiMove;
//     }
//     //3-6
//     if ((cell3Name === PlayerMove && cell6Name === PlayerMove)) {
//         cells[8] = AiMove;
//     }
//     //1-5
//     if ((cell1Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[8] = AiMove;
//     }
//     //3-5
//     if ((cell3Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[6] = AiMove;
//     }
//     //7-5
//     if ((cell7Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[2] = AiMove;
//     }
//     //9-5
//     if ((cell9Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[0] = AiMove;
//     }
//     //7-4
//     if ((cell7Name === PlayerMove && cell4Name === PlayerMove)) {
//         cells[0] = AiMove;
//     }
//     //9-6
//     if ((cell9Name === PlayerMove && cell6Name === PlayerMove)) {
//         cells[2] = AiMove;
//     }
//     //7-8
//     if ((cell7Name === PlayerMove && cell8Name === PlayerMove)) {
//         cells[8] = AiMove;
//     }
//     //8-9
//     if ((cell8Name === PlayerMove && cell9Name === PlayerMove)) {
//         cells[6] = AiMove;
//     }
//     //4-5
//     if ((cell4Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[5] = AiMove;
//     }
//     //5-6
//     if ((cell5Name === PlayerMove && cell6Name === PlayerMove)) {
//         cells[3] = AiMove;
//     }
//     //2-5
//     if ((cell2Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[2] = AiMove;
//     }
//     //8-5
//     if ((cell8Name === PlayerMove && cell5Name === PlayerMove)) {
//         cells[1] = AiMove;
//     }
// }
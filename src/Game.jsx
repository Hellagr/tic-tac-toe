import React, { useEffect, useState, useColorScheme } from "react";
import './Game.css';
import { VscCircleLarge } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscBlank } from "react-icons/vsc";
import { Player } from '@lottiefiles/react-lottie-player';

export default function Game() {

    const [cells, setCells] = useState(new Array(9).fill(<VscBlank />));
    const [playerMove, setPlayerMove] = useState(false);
    const [playerCount, setPlayerCount] = useState(0);
    const [aiCount, setAiCount] = useState(0);

    const playerScore = () => {
        setPlayerCount(playerCount + 1)
    }
    const aiScore = () => {
        setAiCount(aiCount + 1)
    }


    //******************Player move
    const setValue = (index) => {
        if (!(winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8 || aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8 || draw)) {
            if (!playerMove) {
                if (cells[index].type.name === "VscBlank") {
                    const updatedCells = [...cells];
                    updatedCells[index] = <VscChromeClose className="VscChromeClose" />;
                    setCells(updatedCells);
                    setPlayerMove(true);
                }
            }
        }
        return cells;
    };

    //******************AI move
    useEffect(() => {
        if (winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8) {
            playerScore();
        }
        if (aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8) {
            aiScore();
        }
        if (!(winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8 || aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8 || draw)) {
            if (playerMove) {
                const freeIdxArray = cells.reduce((acc, item, index) => {
                    if (item.type.name === "VscBlank") {
                        acc.push(index);
                    }
                    return acc;
                }, []);
                const updatedCells = [...cells];
                if (freeIdxArray.length > 0) {
                    const randomMove = Math.floor((Math.random() * freeIdxArray.length))
                    updatedCells[freeIdxArray[randomMove]] = <VscCircleLarge className="VscCircleLarge" />;
                    setCells(updatedCells);
                }
                setPlayerMove(false);
            }
        }
    }, [playerMove, cells]);

    //******************Win or lose condition
    const winlose1 = cells[0].type.name === "VscChromeClose" && cells[1].type.name === "VscChromeClose" && cells[2].type.name === "VscChromeClose";
    const winlose2 = cells[3].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[5].type.name === "VscChromeClose";
    const winlose3 = cells[6].type.name === "VscChromeClose" && cells[7].type.name === "VscChromeClose" && cells[8].type.name === "VscChromeClose";
    const winlose4 = cells[0].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[8].type.name === "VscChromeClose";
    const winlose5 = cells[2].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[6].type.name === "VscChromeClose";
    const winlose6 = cells[0].type.name === "VscChromeClose" && cells[3].type.name === "VscChromeClose" && cells[6].type.name === "VscChromeClose";
    const winlose7 = cells[1].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[7].type.name === "VscChromeClose";
    const winlose8 = cells[2].type.name === "VscChromeClose" && cells[5].type.name === "VscChromeClose" && cells[8].type.name === "VscChromeClose";

    const aiWinlose1 = cells[0].type.name === "VscCircleLarge" && cells[1].type.name === "VscCircleLarge" && cells[2].type.name === "VscCircleLarge";
    const aiWinlose2 = cells[3].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[5].type.name === "VscCircleLarge";
    const aiWinlose3 = cells[6].type.name === "VscCircleLarge" && cells[7].type.name === "VscCircleLarge" && cells[8].type.name === "VscCircleLarge";
    const aiWinlose4 = cells[0].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[8].type.name === "VscCircleLarge";
    const aiWinlose5 = cells[2].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[6].type.name === "VscCircleLarge";
    const aiWinlose6 = cells[0].type.name === "VscCircleLarge" && cells[3].type.name === "VscCircleLarge" && cells[6].type.name === "VscCircleLarge";
    const aiWinlose7 = cells[1].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[7].type.name === "VscCircleLarge";
    const aiWinlose8 = cells[2].type.name === "VscCircleLarge" && cells[5].type.name === "VscCircleLarge" && cells[8].type.name === "VscCircleLarge";

    const draw = cells[0].type.name !== "VscBlank" && cells[1].type.name !== "VscBlank" && cells[2].type.name !== "VscBlank" && cells[3].type.name !== "VscBlank" && cells[4].type.name !== "VscBlank" && cells[5].type.name !== "VscBlank" && cells[6].type.name !== "VscBlank" && cells[7].type.name !== "VscBlank" && cells[8].type.name !== "VscBlank" && !(winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8 || aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7 || aiWinlose8) && "Draw!"

    //************Restart the game
    const restart = () => {
        setCells((prevArray) => {
            return prevArray.map((item) =>
                item !== <VscBlank /> ? prevArray[item] = <VscBlank /> : null
            );
        });
        setPlayerMove(false);
    }

    return (
        <div className="allContent">
            <div className="TopInfo">
                <div className="PlayerCount">
                    Player Score <div style={{ colorScheme: 'light' | 'dark' | null }}>{playerCount}</div>
                </div>

                <div className="aiCount">
                    AI Score <div style={{ colorScheme: 'light' | 'dark' | null }}>{aiCount}</div>
                </div>
            </div>
            <div className="animationForWinner">
                {(winlose1 || winlose2 || winlose3 || winlose4 || winlose5 || winlose6 || winlose7 || winlose8) && (
                    <>
                        <Player src={'../animations/youwin.json'} className="player" autoplay loop />
                    </>
                )}
                {(aiWinlose1 || aiWinlose2 || aiWinlose3 || aiWinlose4 || aiWinlose5 || aiWinlose6 || aiWinlose7) && (
                    <>
                        <Player src={'../animations/youlose.json'} className="player2" autoplay loop />
                        You are lose...
                    </>
                )
                }
                {draw && (
                    <>
                        <Player src={'../animations/draw.json'} className="player3" autoplay loop />
                        Draw!
                    </>
                )}
            </div>
            <div className="button">
                <button onClick={restart} style={{ colorScheme: 'light' | 'dark' | null }}>RESTART</button>
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
export default function Winlose({ cells }) {
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

    const draw = cells[0].type.name !== "VscBlank" && cells[1].type.name !== "VscBlank" && cells[2].type.name !== "VscBlank" && cells[3].type.name !== "VscBlank" && cells[4].type.name !== "VscBlank" && cells[5].type.name !== "VscBlank" && cells[6].type.name !== "VscBlank" && cells[7].type.name !== "VscBlank" && cells[8].type.name !== "VscBlank" ? "Draw!" : null

    return (<>
        {winlose1 && "Player is win!"}
        {winlose2 && "Player is win!"}
        {winlose3 && "Player is win!"}
        {winlose4 && "Player is win!"}
        {winlose5 && "Player is win!"}
        {winlose6 && "Player is win!"}
        {winlose7 && "Player is win!"}
        {winlose8 && "Player is win!"}
        {aiWinlose1 && "AI is win!"}
        {aiWinlose2 && "AI is win!"}
        {aiWinlose3 && "AI is win!"}
        {aiWinlose4 && "AI is win!"}
        {aiWinlose5 && "AI is win!"}
        {aiWinlose6 && "AI is win!"}
        {aiWinlose7 && "AI is win!"}
        {aiWinlose8 && "AI is win!"}
        {draw && "Draw!"}
    </>)
}
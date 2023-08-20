export default function Winlose({ cells }) {
    const winlose1 = cells[0].type.name === "VscChromeClose" && cells[1].type.name === "VscChromeClose" && cells[2].type.name === "VscChromeClose" && "Player is win!";
    const winlose2 = cells[3].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[5].type.name === "VscChromeClose" && "Player is win!";
    const winlose3 = cells[6].type.name === "VscChromeClose" && cells[7].type.name === "VscChromeClose" && cells[8].type.name === "VscChromeClose" && "Player is win!";
    const winlose4 = cells[0].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[8].type.name === "VscChromeClose" && "Player is win!";
    const winlose5 = cells[2].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[6].type.name === "VscChromeClose" && "Player is win!";
    const winlose6 = cells[0].type.name === "VscChromeClose" && cells[3].type.name === "VscChromeClose" && cells[6].type.name === "VscChromeClose" && "Player is win!";
    const winlose7 = cells[1].type.name === "VscChromeClose" && cells[4].type.name === "VscChromeClose" && cells[7].type.name === "VscChromeClose" && "Player is win!";
    const winlose8 = cells[2].type.name === "VscChromeClose" && cells[5].type.name === "VscChromeClose" && cells[8].type.name === "VscChromeClose" && "Player is win!";

    const aiWinlose1 = cells[0].type.name === "VscCircleLarge" && cells[1].type.name === "VscCircleLarge" && cells[2].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose2 = cells[3].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[5].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose3 = cells[6].type.name === "VscCircleLarge" && cells[7].type.name === "VscCircleLarge" && cells[8].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose4 = cells[0].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[8].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose5 = cells[2].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[6].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose6 = cells[0].type.name === "VscCircleLarge" && cells[3].type.name === "VscCircleLarge" && cells[6].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose7 = cells[1].type.name === "VscCircleLarge" && cells[4].type.name === "VscCircleLarge" && cells[7].type.name === "VscCircleLarge" && "AI is win!";
    const aiWinlose8 = cells[2].type.name === "VscCircleLarge" && cells[5].type.name === "VscCircleLarge" && cells[8].type.name === "VscCircleLarge" && "AI is win!";

    const draw = cells[0].type.name !== "VscBlank" && cells[1].type.name !== "VscBlank" && cells[2].type.name !== "VscBlank" && cells[3].type.name !== "VscBlank" && cells[4].type.name !== "VscBlank" && cells[5].type.name !== "VscBlank" && cells[6].type.name !== "VscBlank" && cells[7].type.name !== "VscBlank" && cells[8].type.name !== "VscBlank" && "Draw!"

    return (<>
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
    </>)
}
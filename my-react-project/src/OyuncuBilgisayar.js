import "./App.css";

import { useState } from "react";


function Player({ name = "Player", score = 0, action = "rock" }) {
    return (
        <div className="player">
            <div className="score">{`${name}: ${score}`}</div>
            <div className="action">
                {action && <ActionIcon action={action} size={60} />}
            </div>
        </div>
    );
}

function OyuncuBilgisayar() {
    const [playerAction, setPlayerAction] = useState("");
    const [computerAction, setComputerAction] = useState("");

    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState(0);

    return (
        <div className="center">
            <h1>Oyuncu VS Bilgisayar</h1>
            <div>
                <div className="container">
                    <Player name="1.Oyunucu" score={playerScore} action={playerAction} />
                    <Player
                        name="Bilgisayar"
                        score={computerScore}
                        action={computerAction}
                    />
                </div>
                <div>
                    <ActionButton action="rock" />
                    <ActionButton action="paper" />
                    <ActionButton action="scissors" />

                </div>
                <ShowWinner winner={winner}/>
            </div>
        </div>
    );
}

export default OyuncuBilgisayar;

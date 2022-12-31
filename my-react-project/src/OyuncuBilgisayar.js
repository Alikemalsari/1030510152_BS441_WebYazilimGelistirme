import "./App.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import {useEffect, useState} from "react";

const actions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    //lizard: ["paper", "spock"],
    //spock: ["scissors", "rock"],
};

function randomAction() {
    const keys = Object.keys(actions);
    const index = Math.floor(Math.random() * keys.length);

    return keys[index];
}

function calculateWinner(action1, action2) {
    if (action1 === action2) {
        return 0;
    } else if (actions[action1].includes(action2)) {
        return -1;
    } else if (actions[action2].includes(action1)) {
        return 1;
    }

    // This should never really happen
    return null;
}

function ActionIcon({ action, ...props }) {
    const icons = {
        rock: FaHandRock,
        paper: FaHandPaper,
        scissors: FaHandScissors,
        //lizard: FaHandLizard,
        //spock: FaHandSpock,
    };
    const Icon = icons[action];
    return <Icon {...props} />;
}

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

function ActionButton({ action = "rock", onActionSelected }) {
    return (
        <button className="round-btn" onClick={() => onActionSelected(action)}>
            <ActionIcon action={action} size={20} />
        </button>
    );
}

function ShowWinner({winner = 0}) {
    const text = {
        "-1": "Tebrikler, KAZANDINIZ!",
        0: "Berabere...",
        1: "KAYBETTİNİZ!!",
    };
    return (
        <h2>{text[winner]}</h2>
    )
}

function OyuncuBilgisayar() {
    const [playerAction, setPlayerAction] = useState("");
    const [computerAction, setComputerAction] = useState("");

    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState(0);

    const [player1name, setPlayer1name] = useState("");


    const onActionSelected = (selectedAction) => {
        const newComputerAction = randomAction();

        setPlayerAction(selectedAction);
        setComputerAction(newComputerAction);



        const newWinner = calculateWinner(selectedAction, newComputerAction);
        setWinner(newWinner);
        if (newWinner === -1) {
            setPlayerScore(playerScore + 1);
        } else if (newWinner === 1) {
            setComputerScore(computerScore + 1);
        }
    };





    const fetchMovies = async () => {
        const url = "http://localhost:8081/records";

        let response;
        let payload;


        response = await fetch(url);
        payload = await response.json();
        console.log(payload.length);

        for (let i=payload.length-1;i>0;i--){

            if(payload[i].userName2===""){
                let name1=payload[i].userName1;

                setPlayer1name(name1);

                break;
            }
            else;
        }
    }

    useEffect(()=>{
        fetchMovies();

    },[])
    return (
        <div className="center">
            <h1>Oyuncu VS Bilgisayar</h1>
            <div>
                <div className="container">
                    <Player name={player1name} score={playerScore} action={playerAction} />
                    <Player
                        name="Bilgisayar"
                        score={computerScore}
                        action={computerAction}
                    />
                </div>
                <div>
                    <ActionButton action="rock" onActionSelected={onActionSelected} />
                    <ActionButton action="paper" onActionSelected={onActionSelected} />
                    <ActionButton action="scissors" onActionSelected={onActionSelected} />

                </div>
                <ShowWinner winner={winner}/>
            </div>
        </div>
    );
}

export default OyuncuBilgisayar;

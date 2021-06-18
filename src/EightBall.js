import { useState } from "react";
import "./EightBall.css";
/** gets a random number between 0 and max (inclusively) */
const randNumber = (max) => Math.floor(Math.random() * (max + 1));

const initialAnswer = {msg: "Think Of a Question", color: "black"};

const defaultAnswers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

const EightBall = ({answers=defaultAnswers}) => {
    const [msg, setMsg] = useState(initialAnswer.msg);
    const [color, setColor] = useState(initialAnswer.color);

    const getRandomAnswer = () => answers[randNumber(answers.length - 1)];

    const shake8Ball = () => {
        const newAnswer = getRandomAnswer();
        setMsg(newAnswer.msg);
        setColor(newAnswer.color);
    }

    return (
        <div className="EightBall" 
            style={{ backgroundColor: color }} 
            onClick={shake8Ball}>
            <div className="EightBall-text" >{msg}</div>
        </div>
    )};
export default EightBall
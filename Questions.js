import React, {useState} from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const Question = ({title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo? <FaCircleMinus/> : <FaCirclePlus/>}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Question
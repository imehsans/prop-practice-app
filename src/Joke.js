import React from "react"

export default function Joke(props){
    
    return (
        <div>
            {props.setup && <h3>Setup:  { props.setup } </h3>}
            <p style={{ display: props.punchline ? "block": "none" }}>PunchLine:  { props.punchline } </p>
            <h4 style={{dispplay: props.isPun ? "block": "none"}}>{props.isPun}</h4>            
            
            <hr />
    </div>
    )
}
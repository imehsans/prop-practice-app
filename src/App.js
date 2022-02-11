import React from "react"
import Joke from "./Joke"
import JokesData from "./JokesData"


export default function App(){
  const jokeElements = JokesData.map(joke => {
    return ( <Joke setup={ joke.setup}  punchline={joke.punchline} />)
  })

  return (
    <div>
      <h1>Practice site for props</h1>
      {jokeElements}
    </div>
  )

}
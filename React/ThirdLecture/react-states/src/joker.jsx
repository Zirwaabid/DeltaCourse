import { useState, useEffect } from "react";

export default function Joker() {
    const [Joke, setJoke] = useState({});
    let URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let JsonResponse = await response.json();
        setJoke({ setup: JsonResponse.setup, punchline: JsonResponse.punchline })
    };
    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let JsonResponse = await response.json();
            setJoke({ setup: JsonResponse.setup, punchline: JsonResponse.punchline })
        }
        getFirstJoke()
    }, []);
    return <>
        <div>
            <h3>Joker!</h3>
            <h2>{Joke.setup}</h2>
            <h2>{Joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    </>
}
let url = "https://icanhazdadjoke.com/";
async function getJokes() {
    let config={headers:{Accept:"application/json"}}
    let res = await axios.get(url,config);
    console.log(res.data.joke)
}
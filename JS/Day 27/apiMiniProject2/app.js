let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let word = "hello";
async function dic() {
    let res = await axios.get(url + word);
    console.log(res.data)
    return res.data[0]
}
const para = document.querySelector("p");
async function defi() {
    let details = await dic();
    para.innerText=details

}

//get data by using promises
let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log("data1=", data.fact)
        return fetch(url)
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log("data2=", data.fact)
    })
    .catch((err) => {
        console.log(err)
    })

//get data by using fetch async await
async function getFacts() {
    try {
        let res = await fetch(url)
        let data = await res.json();
        console.log("data1", data.fact)

        let res2 = await fetch(url)
        let data2 = await res2.json();
        console.log("data2", data2.fact)

    } catch (error) {
        console.log(error)
    }
}

//get data by using axios async await
async function getData() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact)
    } catch (error) {

    }
}

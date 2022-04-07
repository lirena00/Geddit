document.getElementById("next").addEventListener("click", fetchData);
async function fetchData() {
    const res = await fetch ("https://meme-api.herokuapp.com/gimme");
    const record = await res.json();
    console.log(record);
    document.getElementById("url").src=record.url;
    document.getElementById("title_").innerHTML=record.title;
    document.getElementById("postlink").href=record.postLink;
}
fetchData();
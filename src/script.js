const nextButton = document.getElementById("next");
const imgElement = document.getElementById("url");
const titleElement = document.getElementById("title_");
const linkElement = document.getElementById("postlink");

nextButton.addEventListener("click", fetchData);
async function fetchData() {
  const res = await fetch("https://meme-api.herokuapp.com/gimme");
  const record = await res.json();
  console.log(record);
  imgElement.src = record.url;
  titleElement.innerHTML = record.title;
  linkElement.href = record.postLink;
}
fetchData();

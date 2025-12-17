function generateMeme() {
  let topText = document.getElementById("topText").value;
  let bottomText = document.getElementById("bottomText").value;
  let image = document.getElementById("memeSelect").value;

  document.querySelector(".top").innerText = topText;
  document.querySelector(".bottom").innerText = bottomText;
  document.getElementById("memeImage").src = image;
}
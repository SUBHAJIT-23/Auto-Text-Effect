const contele = document.querySelector(".container");
const txt = ["SUBHAJIT KARMAKAR"];
let ci = 0;
let chri = 0;

updateText();

function updateText()
{
  chri++;
  contele.innerHTML = `<h1>I am ${txt[ci].slice(0, 1) === "I" ? "" : ""} ${txt[ci].slice(0, chri)}</h1>`;
  if (chri === txt[ci].length)
  {
    ci++;
    chri = 0;
  }
  if (ci === txt.length)
  {
    ci = 0;
  }
  setTimeout(updateText, 400);
}
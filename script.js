let textArea = document.getElementById("textarea").value;
let findedWord = document.getElementById("search").value;
let resultSearching = document.getElementById("resultSearching");
let analyse = document.getElementById("analyse");

function find() {
  textArea = document.getElementById("textarea").value;

  findedWord = document.getElementById("search").value;
  let find = textArea.includes(findedWord);
  if (find) {
    resultSearching.innerText = "Hľadané slovo sa nachadza na stránke";
  } else resultSearching.innerText = "Hľadané slovo sa nenachadza na stránke ";
}

function crypting() {}

function analysing() {
  textArea = document.getElementById("textarea").value;
  /**dlzka textu */
  let stringLength = textArea.length;

  /**dlzka textu bez medzier*/
  let noSpaces = textArea.replace(/\s/gi, "");
  console.log(noSpaces);
  let stringlengthNoSpaces = noSpaces.length;

  /**Pocet cisel*/
  let integers = parseInt(textArea);

  analyse.style.backgroundColor = "#ff0000";
  analyse.innerHTML =
    "Celkovy počet znakov v texte aj s medzerami je " +
    stringLength +
    "<br />" +
    "Celkovy počet znakov v texte bez medzier je " +
    stringlengthNoSpaces;
}

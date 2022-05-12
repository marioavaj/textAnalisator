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
  let stringlengthNoSpaces = noSpaces.length;

  /**Pocet cisel*/
  let numberCount=0;
  let splitt = textArea.split( " ");
   for( i =0; i<splitt.length; i++){
    let numbers=parseInt(splitt[i]);
      if (numbers > 0 || numbers < 0){
      numberCount++;
      }     
  }
  console.log(numberCount++);
  

  analyse.style.backgroundColor = "#ff0000";
  analyse.innerHTML =
    "Celkovy počet znakov v texte aj s medzerami je " + stringLength + "<br />" +
    "Celkovy počet znakov v texte bez medzier je " +
    stringlengthNoSpaces +
    "<br />" +
    "V texte sa nachádza  " + numberCount + " čísel" ;
}

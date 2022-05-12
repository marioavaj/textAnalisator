let textArea = document.getElementById("textarea").value;
let findedWord = document.getElementById("search").value;
let resultSearching = document.getElementById("resultSearching");
let analyse = document.getElementById("analyse");


function find() {
  textArea = document.getElementById("textarea").value;

  findedWord = document.getElementById("search").value;
  let find = textArea.includes(findedWord);
  if (find) {
    resultSearching.innerText = "Hľadané slovo sa nachadza na stránke😁";
  } else resultSearching.innerText = "Hľadané slovo sa nenachadza na stránke😪  ";
}



function crypting() {
textArea = document.getElementById("textarea").value;
cryptoButton = document.getElementById("crypto");
let zasifrovanyText = textArea.replaceAll("a", "4").replaceAll("A", "4").replaceAll("o", "0")
.replaceAll("O", "0").replaceAll("i", "1").replaceAll("I", "1").replaceAll("e", "3")
.replaceAll("E", "3")
.replaceAll("s", "5")
.replaceAll("S", "5")
.replaceAll("b", "8")
.replaceAll("B", "8")
;
document.getElementById("textarea").style.backgroundColor="red";
document.getElementById("textarea").style.color="white";
document.getElementById("textarea").value=zasifrovanyText;
cryptoButton.style.backgroundColor = "red";
cryptoButton.innerHTML = "Zašifrované";

}
function analysing() {
    
  textArea = document.getElementById("textarea").value;
  let splitt = textArea.trim().replaceAll("."," ").replaceAll(","," ").replaceAll("\n", " ").replaceAll(":", " ").split( " ");
  console.log(splitt);
  /**dlzka textu */
  let stringLength = textArea.length;

  /**dlzka textu bez medzier*/
  let noSpaces = textArea.replace(/\s/gi, "");
  let stringlengthNoSpaces = noSpaces.length;

  /**Pocet cisel*/
  let numberCount=0;
  
   for( i =0; i<splitt.length; i++){
    let numbers=parseInt(splitt[i]);
      if (numbers > 0 || numbers < 0){
      numberCount++;     
      }       
  }

  /**Najdlhsie slovo*/
  let longerWord=0;
  let najdlhsieSlova = [];
  
     for(i =0; i<splitt.length; i++){
    let lengthOfWord = splitt[i].length;
    
    if (lengthOfWord>longerWord){
       
        longerWord = splitt[i].length; 
        
       } 
       } 

       analyse.style.backgroundColor = "#00db96";
       analyse.innerHTML =
    "Celkovy počet znakov v texte aj s medzerami je " + stringLength + "<br />" +
    "Celkovy počet znakov v texte bez medzier je " + stringlengthNoSpaces +"<br />" +
    "Celkovy počet čísel v texte je " + numberCount +"<br />" +
    "Najdlhšie slová s počtom znakov " + longerWord + " sú: ";
      
    
       for(i=0; i<splitt.length; i++){
       if(splitt[i].length==longerWord){
        
        let screenBigWords = document.createElement("p"); 
        screenBigWords.style.margin="1px"
        screenBigWords.style.display= "inline"
        screenBigWords.style.backgroundColor = "#00db96";
        screenBigWords.innerHTML = splitt[i] + ", ";
        analyse.appendChild(screenBigWords);

               }  
            }  
}

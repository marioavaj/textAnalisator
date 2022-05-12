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
  let splitt = textArea.split( " ");
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
 let najdlsieSlovovo;
  
     for(i =0; i<splitt.length; i++){
    let lengthOfWord = splitt[i].length;
    console.log(splitt[i].length)
    if (lengthOfWord>longerWord){
        console.log(lengthOfWord + ">" + longerWord)
        longerWord = splitt[i].length; 
        najdlsieSlovovo = splitt[i];
       } 
       } 
  

  analyse.style.backgroundColor = "#ff0000";
  analyse.innerHTML =
    "Celkovy počet znakov v texte aj s medzerami je " + stringLength + "<br />" +
    "Celkovy počet znakov v texte bez medzier je " + stringlengthNoSpaces +"<br />" +
    "Celkovy počet čísel v texte je " + numberCount +"<br />" +
    "Najdlhšie slovo v texte je " + najdlsieSlovovo;
}

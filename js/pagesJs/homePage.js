import { selectCategory } from '../companents/headerJS.js';
import { baseURL, imgesUrl,size,offset } from '../jsLib/articles.js';
import {createCard,createShortNewsCard,randomNumber} from '../jsLib/createFunctions.js';
import { getCardMain, getShortNewsCardMain } from '../jsLib/getItemFunctions.js';
import { render } from '../jsLib/renderFunctions.js';
const url = new URL(window.location.href);
let langId=url.searchParams.get('langId');
if(!langId){
  langId=1;
}
console.log(langId)
selectCategory(langId);


for(let i=1;i<4;i++){

  fetch(`${baseURL}langId=${langId}&journalId=${i}&size=${size}&offset=${offset}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    
    const  cardMain=getCardMain(data,randomNumber(size),imgesUrl);
    const card=createCard(cardMain);
    render(card,appendSectionId(i))
    
    const shortNewsCardMain=getShortNewsCardMain(data,2);
    const shortNewsCard=createShortNewsCard(shortNewsCardMain);
    render(shortNewsCard,appendSectionId(i))
     
    return data      
  });
}

function appendSectionId(item1){
  if(item1==1){
    return "bioSection"
  }
  else if(item1==2){
  return 'geoSection'
  }
  else if(item1==3){
  return 'kimSection'
}
};
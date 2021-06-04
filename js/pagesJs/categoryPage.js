import { baseURL, imgesUrl, offset, size } from "../jsLib/articles.js";
import { createCard, createPaperBaner, createShortNewsCard, render } from "../jsLib/createFunctions.js";
import { getCardMain, getPaperBannerMain, getShortNewsCardMain } from "../jsLib/getItemFunctions.js";

const url1 = new URL(window.location.href);
let langId=url1.searchParams.get('langId');
const url3 = new URL(window.location.href);
let journalId=url3.searchParams.get('journalId');
let offsetNum=4;


fetch(`${baseURL}langId=${langId}&journalId=${journalId}&size=${size}&offset=${offset}`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  const paperBannerMain=getPaperBannerMain(data,imgesUrl);
  const paperBaner=createPaperBaner(paperBannerMain);
  render(paperBaner,"mainRow")

  const shortNewsCardMain=getShortNewsCardMain(data,1);
  const shortNewsCard=createShortNewsCard(shortNewsCardMain);
  render(shortNewsCard,"mainRow");

  for(let i=4;i<10;i++){
  const  cardMain=getCardMain(data,i,imgesUrl);
  const card=createCard(cardMain);
  render(card,"mainRow")
  offsetNum++  
}
  return data
});

const moreContentBtn=document.getElementById('moreCards');
moreContentBtn.addEventListener('click',()=>{
  fetch(`${baseURL}langId=${langId}&journalId=${journalId}&size=${3}&offset=${offsetNum}`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)

  for(let i=0;i<3;i++){

  const  cardMain=getCardMain(data,i,imgesUrl);
  const card=createCard(cardMain);
  render(card,"mainRow")
  offsetNum++  
}
  return data
});
})


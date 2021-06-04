import { baseURL, baseURL1 , imgesUrl} from "../jsLib/articles.js";
import { getPaperMain, getShortNewsCardMain } from "../jsLib/getItemFunctions.js";
import { createShortNewsCard, creatPaperCard , render } from  "../jsLib/createFunctions.js";
// import { render } from "../js/jsLib/renderFunctions.js";
const url1 = new URL(window.location.href);
let langId=url1.searchParams.get('langId');
const url2 = new URL(window.location.href);
let paperId=url2.searchParams.get('id');
const url3 = new URL(window.location.href);
let journalId=url3.searchParams.get('journalId');


 fetch(`${baseURL1}langId=${langId}&journalId=${journalId}&id=${paperId}`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
    const paperMain=getPaperMain(data,imgesUrl);
    const paperCard=creatPaperCard(paperMain);
    render(paperCard,"mainRow");
  return data;
});

fetch(`${baseURL}langId=${langId}&journalId=${journalId}&size=3&offset=0`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  const shortNewsCardMain=getShortNewsCardMain(data,0);
  const shortNewsCard=createShortNewsCard(shortNewsCardMain);
  render(shortNewsCard,"mainRow");
  return data;
});







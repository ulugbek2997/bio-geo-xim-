let newsArr = [];

fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
 
for(i=0;i<3;i++){
  createOfPaper(randomNumber(data['length']) ,data)
}
 console.log(newsArr)
});

function getPaperInfo(apiMainId,getApi){
  let paperTitle = getApi[apiMainId]["title"];
  let date = new Date(getApi[apiMainId]['date']);
  let day = date.getDay();
  let month = date.getMonth();
  let year =date.getFullYear(); 

  let paperMainDate = day +'.'+month+'.'+year;
   
  let news = {
    title:paperTitle,
    paperDate:paperMainDate
  }
     newsArr.push(news);
}


function createOfPaper(a,b){
    let cataloguePaper = document.createElement('div');
    cataloguePaper.classList.add('catalogue-paper');

    let  allViewBtn=document.createElement('div');
    allViewBtn.classList.add('allViewBtn')
    allViewBtn.innerText = "BARCHASI";
    
    let cataloguePaperTitle = document.createElement('div');
    cataloguePaperTitle.classList.add('catalogue-paper-title');

    let cataloguePaperTitleText = document.createElement('h4');
    cataloguePaperTitleText.innerText = 'Boshqa maqolalar';
    cataloguePaperTitle.append(cataloguePaperTitleText);

    cataloguePaper.append(allViewBtn,cataloguePaperTitle);

     for(j=0;j<3;j++){
      getPaperInfo(a,b);


      let new1 =document.createElement('p');
      new1.classList.add('catalogue-paper-text');
      new1.innerText=newsArr[j]['title'];
      
      let new1Date=document.createElement('p')
      new1Date.classList.add('paper-text-date');
      new1Date.innerText=newsArr[j]['paperDate']
      
      cataloguePaper.append(new1,new1Date);

     }

     document.getElementById('abcd').append(cataloguePaper)

}




function randomNumber(max){
    return Math.floor(Math.random() * max);
 }
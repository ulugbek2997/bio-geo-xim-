let newsArr = [];

const imgesURl= 'http://192.144.37.95/images/';


fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)

// getCardInfo(randomNumber(data['length']),data)

function createRowElemnts(){
  for(i=0;i<3;i++){
   getCardInfo(randomNumber(data['length']),data)
   
  }
}

createRowElemnts();

//create papers row//

for(i=0;i<3;i++){
  createOfPaper(data['length'],data)
}

  return data
});


function getCardInfo(apiMainId,getApi){
   let cardTitle = getApi[apiMainId]["title"];
   let cardBody = getApi[apiMainId]['body'];
   let cardMainCategoriy = getApi[apiMainId]['category']['name'];
   let cardImgURl = getApi[apiMainId]['image']; 
   


   let date = new Date(getApi[apiMainId]['date']);
   let day = date.getDay();
   let month = date.getMonth();
   let year =date.getFullYear(); 

   let cardMainDate = day +'.'+month+'.'+year;

    createCard(cardTitle,cardBody,cardMainCategoriy,cardMainDate,cardImgURl)
}


 function createCard(cardTitle,cardBody,cardMainCategoriy,cardMainDate,cardImgURl){
    
  let card= document.createElement('div');
  card.classList.add('card')

  let cardImg =document.createElement('div');
  cardImg.classList.add('card-img');

  let cardImgMain=document.createElement('img');
  cardImgMain.src= imgesURl+cardImgURl;
  cardImg.append(cardImgMain);

  let category= document.createElement('p');
  category.classList.add('nameCategoriy');
  category.innerText= cardMainCategoriy;
   category.append(cardImg);

   let titleCard = document.createElement('h4');
   titleCard.innerText = cardTitle;
   titleCard.classList.add('card-title');
   
   let textCard = document.createElement('p');
   textCard.innerHTML = cardBody;
   textCard.classList.add('card-text');
   
   let cardDate = document.createElement('p');
   cardDate.innerText = cardMainDate;
   cardDate.classList.add('card-date'); 

   card.append(cardImg,titleCard,textCard,cardDate);
  document.getElementById('cardsRow').append(card);
 }

 




 //create cotalogue paper//

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
      getPaperInfo(randomNumber(a),b);


      let new1 =document.createElement('p');
      new1.classList.add('catalogue-paper-text','line-clamp');
      new1.innerText=newsArr[j]['title'];
      
      let new1Date=document.createElement('p')
      new1Date.classList.add('paper-text-date');
      new1Date.innerText=newsArr[j]['paperDate']
      
      cataloguePaper.append(new1,new1Date);

     }

     document.getElementById('papersRow').append(cataloguePaper)

}


//random num function//

function randomNumber(max){
    return Math.floor(Math.random() * max);
 }
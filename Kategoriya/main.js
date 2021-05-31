const url = new URL(window.location.href);
const objectJournalId=url.searchParams.get('journalId');
let sortingObjects=[]

fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)

  sortJurnalId(data)

  createPaperBaner(sortingObjects)
  createOfPaper(sortingObjects,objectJournalId)

  for(i=1;i<7;i++){
      createCard(sortingObjects,i)
  }
 
  return data
});


function sortJurnalId(item1){
    for(i=0;i<item1['length'];i++){
    const newObjectJournalId=item1[i].journalId      
    if(newObjectJournalId==objectJournalId){
        sortingObjects.push(item1[i])
  }
    }
console.log(sortingObjects)    
}

function createPaperBaner(item1){
  

  let paperBaner=document.createElement('div');
  paperBaner.classList='paperBaner';

  let img=document.createElement('img');
  img.src='http://192.144.37.95/images/'+ item1[0]['image'];
  paperBaner.append(img);


  let title=document.createElement('h3');
  title.innerText=item1[0]['title']
  title.classList.add('line-clamp')
  let mainText=document.createElement('p')
  mainText.innerHTML=item1[0]['body'];
  mainText.classList.add('line-clamp')
  paperBaner.append(title,mainText);
   document.getElementById('firstRow').append(paperBaner)
}

function createOfPaper(item1,item2){

    let cataloguePaper = document.createElement('div');
    cataloguePaper.classList.add('catalogue-paper');


    let cataloguePaperTitleText = document.createElement('h4');
    cataloguePaperTitleText.innerText = 'Boshqa maqolalar';
    cataloguePaperTitleText.classList.add('catalogue-paper-title');

    cataloguePaper.append(cataloguePaperTitleText);

     for(j=0;j<3;j++){
      let  shortNews1=item1[randomNumber(item1['length'])];
   
      const date = new Date(shortNews1['date'] ? shortNews1['date'] : null);  
      let dateStr = ("00" + date.getDate()).slice(-2) + "." + ("00" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
     
      let new1 =document.createElement('p');
      new1.classList.add('catalogue-paper-text','line-clamp');
      new1.innerText=shortNews1['title'];
      
      let new1Date=document.createElement('p')
      new1Date.classList.add('paper-text-date');
      new1Date.innerText=dateStr;
      
      cataloguePaper.append(new1,new1Date);
     }

     document.getElementById('firstRow').append(cataloguePaper)

}


function createCard(item1,item2){

    const newCard=item1[item2];  
    const date = new Date(newCard['date'] ? newCard['date'] : null);  
    let dateStr = ("00" + date.getDate()).slice(-2) + "." + ("00" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
  
    let card= document.createElement('a');
    card.href= '../Maqola/index.html?'+ 'id='+`${item2}`;
    
    
    card.classList.add('card')
  
    let cardImg =document.createElement('div');
    cardImg.classList.add('card-img');
    let cardImgMain=document.createElement('img');
    cardImgMain.src= 'http://192.144.37.95/images/'+ newCard['image'];
    cardImg.append(cardImgMain);
  
    let category= document.createElement('p');
    category.classList.add('nameCategoriy');
    category.innerText= newCard['category']['name'];
    category.append(cardImg);
  
     let titleCard = document.createElement('h4');
     titleCard.innerText = newCard['title'];
     titleCard.classList.add('card-title');
     
     let textCard = document.createElement('p');
     textCard.innerHTML = newCard['body'];
     textCard.classList.add('card-text');
     
     let cardDate = document.createElement('p');
     cardDate.innerText = dateStr;
     cardDate.classList.add('card-date'); 
  
     card.append(cardImg,titleCard,textCard,cardDate);
    document.getElementById('cardsRow').append(card);
   }

   function randomNumber(max){
    return Math.floor(Math.random() * max);
 }
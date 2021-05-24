fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {

  console.log(data)

  for(i=0;i<3;i++){
   createCard(data,randomNumber(data['length']))
   createOfPaper(data);
  }

  return data
});


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

function createOfPaper(item1){

    let cataloguePaper = document.createElement('div');
    cataloguePaper.classList.add('catalogue-paper');

    let  allViewBtn=document.createElement('a');
    allViewBtn.href='../Kategoriya/index.html';
    allViewBtn.classList.add('allViewBtn')
    allViewBtn.innerText = "BARCHASI";

    let cataloguePaperTitleText = document.createElement('h4');
    cataloguePaperTitleText.innerText = 'Boshqa maqolalar';
    cataloguePaperTitleText.classList.add('catalogue-paper-title');

    cataloguePaper.append(allViewBtn,cataloguePaperTitleText);

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

     document.getElementById('papersRow').append(cataloguePaper)

}

function randomNumber(max){
    return Math.floor(Math.random() * max);
 }
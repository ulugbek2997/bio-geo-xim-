
fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data[0])

// getCardInfo(randomNumber(data['length']),data)

function createRowElemnts(){
  for(i=0;i<3;i++){
   getCardInfo(randomNumber(data['length']),data)
   
  }
}

createRowElemnts();

  return data
});


function getCardInfo(apiMainId,getApi){
   let cardTitle = getApi[apiMainId]["title"];
   let cardBody = getApi[apiMainId]['body'];
   let cardMainCategoriy = getApi[apiMainId]['category']['name'];

   let date = new Date(getApi[apiMainId]['date']);
   let day = date.getDay();
   let month = date.getMonth();
   let year =date.getFullYear(); 
 
   let cardMainDate = day +'.'+month+'.'+year;

    createCard(cardTitle,cardBody,cardMainCategoriy,cardMainDate)
}

 function createCard(cardTitle,cardBody,cardMainCategoriy,cardMainDate){
    
  let card= document.createElement('div');
  card.classList.add('card')

  let cardImg =document.createElement('div');
  cardImg.classList.add('card-img');
  
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
  document.getElementById('abcd').append(card);
 }

 function randomNumber(max){
    return Math.floor(Math.random() * max);
 }


//  export {fetch, randomNumber,getCardInfo,createCard};
fetch(`http://192.144.37.95:8080/api/articles?langId=1`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
 
  const url = new URL(window.location.href);
  const tagName=url.searchParams.get('tag');
  console.log(tagName)

  innerMainHashtagName(tagName);
  tagNameCards(data,tagName)
  return data
});

function innerMainHashtagName(item){
    const hashtagName =item;
    document.getElementById('hashtagName').innerText = '#'+hashtagName;
}


function tagNameCards(item1,item2){

     for(i=0;i<item1['length'];i++){
        for(j=0;j<item1[i]['tags']['length'];j++){
            const nametag=item1[i]['tags'][j]['name'];
            if(item2==nametag){
             createCard(item1,i);
            }
        }
     }
   

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
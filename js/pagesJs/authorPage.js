const url = new URL(window.location.href);
const objectAuthorId=url.searchParams.get('authorID');
console.log(objectAuthorId);
let sortingObjects=[]

fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)

  sortingAuthorId(data)
  createAuthorCard(sortingObjects)

  for(i=0;i<8;i++){
    createCard(sortingObjects,i) 
  }
  console.log(sortingObjects)
  return data
});


function sortingAuthorId(item1){
    for(i=0;i<item1['length'];i++){
    const newObjectAuthorId=item1[i]['author']['id']      
    if(newObjectAuthorId==objectAuthorId){
        sortingObjects.push(item1[i])
  }
    }    
}


function createAuthorCard(item1){

    const card=document.createElement('div');
    card.classList.add('author-card');

    const cardImg=document.createElement('img');
    cardImg.classList.add('author-card-img');
    cardImg.src='http://192.144.37.95/images/'+ item1[0]['author']['image'];

    const cardTitle=document.createElement('h2');
    cardTitle.classList.add('author-card-name');
    cardTitle.innerText = item1[0]['author']['name']

    const cardText=document.createElement('p');
    cardText.classList.add("author-card-text")
    cardText.innerHTML= item1[0]['author']['bio'];

    const linksUl=document.createElement('ul');
    linksUl.classList.add('author-card-socialPageLinks')

    const instagramLink=document.createElement('li');
    instagramLink.classList.add('author-card-links');
    const instagramLinkA=document.createElement('a');
    const instagramLinkIcon=document.createElement('i');
    instagramLinkIcon.classList.add("ri-instagram-line");
    instagramLinkA.append(instagramLinkIcon);
    instagramLink.append(instagramLinkA);
    
    const twitterLink=document.createElement('li');
    twitterLink.classList.add('author-card-links');
    const twitterLinkA=document.createElement('a');
    const twitterLinkIcon=document.createElement('i');
    twitterLinkIcon.classList.add("ri-twitter-fill");
    twitterLinkA.append(twitterLinkIcon);
    twitterLink.append(twitterLinkA);

    const facebookLink=document.createElement('li');
    facebookLink.classList.add('author-card-links');
    const facebookLinkA=document.createElement('a');
    facebookLinkA.href=item1[0]['author']['facebook']
    const facebookLinkIcon=document.createElement('i');
    facebookLinkIcon.classList.add("ri-facebook-fill");
    facebookLinkA.append(facebookLinkIcon);
    facebookLink.append(facebookLinkA);

    linksUl.append(instagramLink,twitterLink,facebookLink);

    card.append(cardImg,cardTitle,cardText,linksUl);
    document.getElementById('rowMain').append(card);
    

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
    document.getElementById('rowMain').append(card);
   }
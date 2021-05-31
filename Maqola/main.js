fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  const url = new URL(window.location.href);
  const objectNumber=url.searchParams.get('id');

  creatPaper(data,objectNumber);
  createOfPaper(data);
  innerMainTitle(data,objectNumber)  
  return data
});




function creatPaper(item1,item2){

    const newObject=item1[item2];

    const paper=document.createElement('div');
    paper.classList.add('paper');

    const title=document.createElement('h3');
    title.classList.add('paper-title');
    title.innerText=newObject['title'];

    const text=document.createElement('p')
    text.classList.add('paper-text');
    text.innerHTML=newObject['body'];

    const img=document.createElement('img');
    img.classList.add('paper-img');
    img.src='http://192.144.37.95/images/'+ newObject['image'];
    //  paper footer mashitttan boshlab paska qarab ketuuuradi :)//
    const paperFooter=document.createElement('div');
    paperFooter.classList.add('paper-footer');

    const authorUL=document.createElement('ul');
    
    const authorImgLi=document.createElement('li');
    authorImgLi.classList.add('author-img');
    const authorImg=document.createElement('img');
    authorImg.src='http://192.144.37.95/images/'+ newObject['author']['image'];
    authorImgLi.append(authorImg);
    const authorNameLi=document.createElement('li');
    authorNameLi.classList.add('author-name')
    const authorNameLink=document.createElement('a')
    authorNameLink.href="../Muallif/index.html?"+`authorID=${newObject['author']['id']}`;
    authorNameLink.innerText=newObject['author']['name'];
    authorNameLi.append(authorNameLink);
    authorUL.append(authorImgLi , authorNameLi);


    const hashtagsUL=document.createElement('ul');
    for(i=0;i<newObject['tags']['length'];i++){
        const hashtag=document.createElement('li');
        const hashtagLink=document.createElement('a');
        hashtag.classList.add('hashtags');

        if(i<4){
            const hashtagText = newObject['tags'][`${i}`]['name'];
            hashtagLink.innerText= hashtagText;
            hashtagLink.href ='../Heshteg/index.html?'+ `tag=${hashtagText}` 
            
        }else{
            break;
        };
        hashtag.append(hashtagLink);
        hashtagsUL.append(hashtag);
    }
    paperFooter.append(authorUL,hashtagsUL);
    paper.append(title,text,img,paperFooter);
    document.getElementById('mainRow').append(paper)

}

//masheylarda tugeydi//

function createOfPaper(item1){

    let cataloguePaper = document.createElement('div');
    cataloguePaper.classList.add('catalogue-paper');

    let  allViewBtn=document.createElement('div');
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

     document.getElementById('mainRow').append(cataloguePaper)
}

function innerMainTitle(item1,item2){
   newObject=item1[item2];
   const title=newObject['category']['name'];
   document.getElementById('title-main').innerText=title;
}

function randomNumber(max){
    return Math.floor(Math.random() * max);
 }
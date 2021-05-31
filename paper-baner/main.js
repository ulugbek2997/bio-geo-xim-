fetch('http://192.144.37.95:8080/api/articles?langId=1')
.then((response) => {
  return response.json();
})
.then((data) => {

  console.log(data)

  createPaperBaner(data)

  return data
});


function createPaperBaner(item1){
  

    let paperBaner=document.createElement('div');
    paperBaner.classList='paperBaner';

    let title=document.createElement('h3');
    title.innerText=item1[0]['title']
    let mainText=document.createElement('p')
    mainText.innerHTML=item1[0]['body'];
    paperBaner.append(title,mainText);
     document.getElementById('paperBaner').append(paperBaner)
}
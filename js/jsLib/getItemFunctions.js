function getCardMain(item1,item2,item3){
    const date = new Date(item1[item2]['date'] ? item1[item2]['date'] : null);
    const cardMain={ 
    imgSrc:item3+item1[item2]['image'],
    title:item1[item2]['title'],
    body:item1[item2]['body'],
    dateStr:("00" + date.getDate()).slice(-2) + "." + ("00" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear(),
    id:item1[item2]['id'],
    langId:item1[item2]['langId'],
    journalId:item1[item2]['journalId']   
 }
 return cardMain
}

function getShortNewsCardMain(item1,item2){
    let shortNewsCardMain=[];
    for(let i=item2;i<item2+3;i++){
       const date = new Date(item1[i]['date'] ? item1[i]['date'] : null);
        const news={
           title:item1[i]['title'],
           dateStr:("00" + date.getDate()).slice(-2) + "." + ("00" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear(),
           langId:item1[i]['langId'],
           journalId:item1[i]['journalId'],
           id:item1[i]['id']
        }
        shortNewsCardMain.push(news)
    }
        return  shortNewsCardMain;
    }

function getPaperMain(item1,item2){
    let hashTagsArr=[];
    let tags={}
    for(let i=0;i<item1['tags']['length'];i++){
        hashTagsArr.push(
            tags={
            tagName:item1['tags'][i]['name'],
            tagId:item1['tags'][i]['id']
            });
    };
    const paperMain={
     title:item1['title'],
     body:item1['body'],
     imgSrc:item2+item1['image'],
     authorImg:item2+`${item1['author']['image']}`,
     authorName:item1['author']['name'],
     hashTags:hashTagsArr,
     authorId:item1['author']['id']
 }
 return paperMain
}    

function getPaperBannerMain(item1,item2){
    const paperBanerMain={
        title:item1[0]['title'],
        body:item1[0]['body'],
        imageSrc:item2+item1[0]['image']
    }
    return paperBanerMain;
}

    export {getCardMain , getShortNewsCardMain , getPaperMain , getPaperBannerMain};
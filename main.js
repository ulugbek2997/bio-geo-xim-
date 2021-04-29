let hamburgerBtn=document.getElementById('hamburgerBtn');
hamburgerBtn.addEventListener('click',helo)


function helo(){

let leftSectionMain=document.getElementById('leftSectionMain');

if(leftSectionMain.classList.value=="left-main"){
    leftSectionMain.classList.remove('left-main');
    leftSectionMain.classList.toggle('navActiv');
}
else{
    leftSectionMain.classList.toggle('navActiv');
    leftSectionMain.classList.add('left-main')
}

}
let hamburgerBtn=document.getElementById('hamburgerBtn');
hamburgerBtn.addEventListener('click',helo)




function helo(){

let leftSectionMain=document.getElementById('leftSectionMain');
let rightSectionUL=document.getElementById('rightSectionUlID');



if(leftSectionMain.classList.value=="left-main"&&rightSectionUL.classList.value=="rightSectionUl"){
    leftSectionMain.classList.remove('left-main');
    leftSectionMain.classList.toggle('navActiv');

    rightSectionUL.classList.remove("rightSectionUl");
    rightSectionUL.classList.toggle('rightSectionUlMobileVersion');

    document.getElementById('uzbek').innerText="Uzbek";
    document.getElementById('russian').innerText="Russian";
    document.getElementById('english').innerText="English";

}
else{
    leftSectionMain.classList.toggle('navActiv');
    leftSectionMain.classList.add('left-main');

    rightSectionUL.classList.toggle('rightSectionUlMobileVersion');
    rightSectionUL.classList.add("rightSectionUl")

    document.getElementById('uzbek').innerText="Uz";
document.getElementById('russian').innerText="Py";
document.getElementById('english').innerText="En";
}

}
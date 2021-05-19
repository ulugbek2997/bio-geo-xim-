let hamburgerBtn=document.getElementById('hamburgerBtn');
hamburgerBtn.addEventListener('click',helo)




function helo(){

let leftSectionMain=document.getElementById('leftSectionMain');
let rightSection=document.getElementById('rightSection');
let pageMain=document.getElementById('main')
let pageFooter=document.getElementById('footer')


if(leftSectionMain.style.display===""){
    leftSectionMain.style.display="block"
    rightSection.style.display="block"
    pageMain.style.display="none"
    pageFooter.style.display="none"

    document.getElementById('uzbek').innerText="Uzbek";
    document.getElementById('russian').innerText="Russian";
    document.getElementById('english').innerText="English";
}else{
    leftSectionMain.style.display=""
    rightSection.style.display=""
    pageMain.style.display="block"
    pageFooter.style.display="flex"

    document.getElementById('uzbek').innerText="Uz";
    document.getElementById('russian').innerText="Py";
    document.getElementById('english').innerText="En";
}

}


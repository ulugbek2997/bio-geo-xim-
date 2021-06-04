
       
    const hamburgerBtn=document.getElementById('hamburgerBtn');
    hamburgerBtn.addEventListener('click' , navBar)
    
    function navBar(){
    
    const leftSectionMain=document.getElementById('leftSectionMain');
    const rightSection=document.getElementById('rightSection');
    const pageMain=document.getElementById('main')
    const pageFooter=document.getElementById('footer')
    
    
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

    function selectCategory(item1){

    const bio=document.getElementById('bio');
    bio.href="./html/categoriesPage.html?" + `langId=${item1}` + '&journalId=1';
    const geo=document.getElementById('geo');
    geo.href="./html/categoriesPage.html?" + `langId=${item1}` + '&journalId=2';
    const kim=document.getElementById('kim');
    kim.href="./html/categoriesPage.html?" + `langId=${item1}` + '&journalId=3';
    }

    export { selectCategory }
const searchWrapper=document.querySelector(".search-input");
const inputBox=searchWrapper.querySelector("input");
const suggBox=searchWrapper.querySelector(".autocom-box");

//ako korisnik klikne i unese nesto (kupi ono sto je napisao e.target.value)

inputBox.onkeyup=(e)=>{
   let userData=e.target.value;//korisnikovi uneseni podaci
   let emptyArr=[];
   if(userData){
     emptyArr=suggestions.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
   // filtriranje niza i karaktera korisnika u mala slova i vracanje samo onih rijeci ili recenica
   //koje pocinju sa korisnikovom unesenom rijecju 
    })
    emptyArr=emptyArr.map((data)=>{
        return data='<li>'+data+'<li>';
      
    })
    console.log(emptyArr);
    searchWrapper.classList.add("active");//pokayuje auto complete box
    showSuggestions(emptyArr);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        //adding onclick attribute in all li tag
        allList[i].setAttribute("onclick", "selectt(this)");
    }
    console.log(allList);
}else{
    searchWrapper.classList.remove("active"); //hide autocomplete box
}
  
}

function selectt(element){
    let selectUserData=element.textContent;
    inputBox.value=selectUserData;
    console.log(selectUserData);
}

function showSuggestions(list){
    let listData;
    if(!list.length){
userValue=inputBox.value;
listData='<li>'+userValue+'<li>';
    }else{
        listData=list.join('');
    }
   
    suggBox.innerHTML=listData;
}

function contentSearch(s){

    s = s.toLowerCase();
    const divs = document.querySelectorAll(".card_meny");
    
    

    for( let div of divs){
        div.classList.remove("invisible");

       let title = div.querySelector("h2").innerText;
       let result = title.toLowerCase().search(s);

        if(result < 0){
            div.classList.add("invisible");
        }

    }

    console.log(divs);
       
      
}
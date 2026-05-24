
function contentSearch(s){

    s = s.toLowerCase();
    const divs = document.querySelectorAll(".card_meny");
    
    

    for( let div of divs){
        div.classList.remove("hidden");

       let title = div.children[0].innerText;
       let result = title.toLowerCase().search(s);

        if(result < 0){

            div.classList.add("hidden");
        }

    }
       
      
}
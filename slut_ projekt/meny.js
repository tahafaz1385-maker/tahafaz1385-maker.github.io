
function contentSearch(s){

    s = s.toLowerCase();
    const content = document.querySelectorAll(".card_meny");
    
    

    for( let div of content){
       console.log(div.children[0].innerText);
       
       
       
       
       
        /*let title = div.children[0].innerText
        let result = title.toLowerCase().search(s)

        console.log(result)*/
    }
}
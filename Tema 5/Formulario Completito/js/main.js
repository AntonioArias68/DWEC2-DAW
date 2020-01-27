{
 let init = function(){
    let form = document.getElementById("form");

    form.addEventListener("submit", function(evt){
        evt.preventDefault();
    });
 }

 document.addEventListener("DOMContentLoaded", init);
}
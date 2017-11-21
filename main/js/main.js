var SLIDE_INDEX = 1;
showDivs(SLIDE_INDEX);

function plusDivs(n){
    showDivs(SLIDE_INDEX += n);
}

function showDivs(n) {
    var i = 0;
    var x = document.getElementsByClassName("slides");
    if(n > x.length){SLIDE_INDEX = 1}
    if(n < 1){SLIDE_INDEX = x.length}
    while(i < x.length){
        x[i].style.display = "none";
        i++;
    }
    x[SLIDE_INDEX-1].style.display = "block";

}

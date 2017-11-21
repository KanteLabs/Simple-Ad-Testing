/* Load Images without using fetch */
window.onload=()=>{
    console.log('window ready');

    let slothDiv = document.getElementById('islands');
    let mountainsDiv = document.getElementById('mountains');
    let jungleDiv = document.getElementById('jungle');
    let desertsDiv = document.getElementById('deserts');

    /* If a user refreshes the page while within the specific view height this will load the images */
    if(slothDiv.offsetTop - window.innerHeight < window.pageYOffset){
        fetchImages();
    }

    window.onscroll = (ev)=>{
        /* Checks to see if the gallery is in view by comparing it's position
        with the height and YOffset of the window.  */
        if(slothDiv.offsetTop - window.innerHeight < window.pageYOffset){
            fetchImages();
        }else{
            null;
        }
    }

    function fetchImages(){
        slothDiv.style.backgroundImage = 'url("images/sloth.jpg")';
        mountainsDiv.style.backgroundImage = 'url("images/mountains.jpg")';
        jungleDiv.style.backgroundImage = 'url("images/jaguar.jpg")';
        desertsDiv.style.backgroundImage = 'url("images/fox.png")';
    }

}
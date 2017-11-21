window.onload=()=>{
    console.log('window ready');
    var myInit = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default' 
    }

    var imageIsLoaded = undefined;
    let scrollAmount = window.pageYOffset;
    let slothDiv = document.getElementById('islands');
    let mountainsDiv = document.getElementById('mountains');
    let jungleDiv = document.getElementById('jungle');
    let desertsDiv = document.getElementById('deserts');
    
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
        if(imageIsLoaded !== undefined){
            let slothImage = sessionStorage.getItem("sloth-image");
            let mountainsImage = sessionStorage.getItem("mountains-image");
            let jungleImage = sessionStorage.getItem("jungle-image");
            let desertsImage = sessionStorage.getItem("deserts-image");

            slothDiv.style.backgroundImage = `url(${slothImage})`;
            mountainsDiv.style.backgroundImage = `url(${mountainsImage})`;
            jungleDiv.style.backgroundImage = `url(${jungleImage})`;
            desertsDiv.style.backgroundImage = `url(${desertsImage})`;

        }else{
            console.log('fetching image')
            fetch("images/", myInit)
            .then(res=>{
                sessionStorage.setItem("sloth-image", `${res.url}sloth.jpg`)
                sessionStorage.setItem("mountains-image", `${res.url}mountains.jpg`)
                sessionStorage.setItem("jungle-image", `${res.url}jaguar.jpg`)
                sessionStorage.setItem("deserts-image", `${res.url}fox.png`)
                imageIsLoaded = true;
                fetchImages();
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

}
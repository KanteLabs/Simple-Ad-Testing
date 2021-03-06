window.onload=()=>{
    console.log('window ready');
    var myInit = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default' 
    }

    let slothDiv = document.getElementById('islands');
    let mountainsDiv = document.getElementById('mountains');
    let jungleDiv = document.getElementById('jungle');
    let desertsDiv = document.getElementById('deserts');

    /* If a user refeshes or revist the page this will load already stored images */
    if((slothDiv.offsetTop - window.innerHeight < window.pageYOffset)){
        if(localStorage.getItem("imagesStored") !== undefined && localStorage.getItem("imagesStored")){
            renderImages();
        }else{
            localStorage.setItem("imagesStored", "false");
            fetchImages();
        }
    }else{
        localStorage.setItem("imagesStored", "false");
        checkScroll();
    }

    function checkScroll(){
        console.log("checking scroll")
        window.onscroll = (ev)=>{
            /* Checks to see if the gallery is in view by comparing it's position
            with the height and YOffset of the window.  */
            if(slothDiv.offsetTop - window.innerHeight < window.pageYOffset && localStorage.getItem("imagesStored") == "false"){
                console.log("can now fetch images")
                fetchImages();
            }else{
                null;
            }
        }
    }

    function fetchImages(){
        if(localStorage.getItem("imagesStored") === "false"){
            // fetches the necessary images, and stores the url in local storage
            fetch("images/", myInit)
            .then(res=>{
                localStorage.setItem("sloth-image", `${res.url}sloth.jpg`)
                localStorage.setItem("mountains-image", `${res.url}mountains.jpg`)
                localStorage.setItem("jungle-image", `${res.url}jaguar.jpg`)
                localStorage.setItem("deserts-image", `${res.url}fox.png`)
                localStorage.setItem("imagesStored", "true")
                renderImages();
            })
            .catch(err=>{
                // If there's an error fetching, this function will attempt to fetch the images again
                console.log(err)
                fetchImages()
            })
        }
    }

    function renderImages(){
        // renders the images from local store into the image holders
        if(localStorage.getItem("imagesStored") === "true"){
            let slothImage = localStorage.getItem("sloth-image");
            let mountainsImage = localStorage.getItem("mountains-image");
            let jungleImage = localStorage.getItem("jungle-image");
            let desertsImage = localStorage.getItem("deserts-image");

            slothDiv.style.backgroundImage = `url(${slothImage})`;
            mountainsDiv.style.backgroundImage = `url(${mountainsImage})`;
            jungleDiv.style.backgroundImage = `url(${jungleImage})`;
            desertsDiv.style.backgroundImage = `url(${desertsImage})`;
        }
    }
}
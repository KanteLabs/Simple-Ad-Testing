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

    window.onscroll = (ev)=>{
        scrollAmount = window.pageYOffset;
        if(slothDiv.offsetTop - window.innerHeight < window.pageYOffset){
            fetchImages()
        }
    }

    function fetchImages(){
        console.log('fetching image')
        if(imageIsLoaded !== undefined){
            let slothImage = sessionStorage.getItem("sloth-image")
            slothDiv.style.backgroundImage = `url(${slothImage})`;
        }else{
            fetch("images/sloth.jpg", myInit)
            .then(res=>{
                console.log(res);
                sessionStorage.setItem("sloth-image", res.url)
                imageIsLoaded = true;
            })
            .catch(err=>console.log(err))
        }
    }

}
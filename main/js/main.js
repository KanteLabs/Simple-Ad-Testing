window.onload=()=>{
    console.log('window ready');
    var myInit = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default' 
    }

    let scrollAmount = window.pageYOffset;
    console.log(scrollAmount);
    window.onscroll = (ev)=>{
        console.log(window.innerHeight, window.pageYOffset);
        scrollAmount = window.pageYOffset;
    }
}
fetch("images/eagle.jpg", myInit)
.then(res=>console.log(res))
.catch(err=>console.log(err))
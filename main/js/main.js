window.onload=()=>{
    console.log('window ready');

    let scrollAmount = window.pageYOffset;
    console.log(scrollAmount);
    window.onscroll = (ev)=>{
        console.log(window.innerHeight, window.pageYOffset);
        scrollAmount = window.pageYOffset;
    }
}
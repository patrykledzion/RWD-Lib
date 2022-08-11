const XLScreen = () => {
    var cols = [];
    var sizes = [];
    
    for(let i=1; i<=12; i++) {   
        sizes[i] = document.querySelectorAll(".xl-"+i).length;
    }
    
    for(let i=1; i<=12; i++) {
        for(let j=0; j<sizes[i]; j++) {
            cols.push(document.querySelectorAll(".xl-"+i)[j]);
        }
    }
    
    
    for(let i=0;i<cols.length;i++) {
        cols[i].setAttribute("style", '--width: '+cols[i].clientWidth+"px;");
    }
 
}


const ChangeLayout = () => {
    const BrowserWidth = document.body.scrollWidth;
    const BrowserHeight = document.body.offsetHeight;
    
    XLScreen();
    
}

window.addEventListener("resize",()=>{
    ChangeLayout();
})

window.onload = () => {
    ChangeLayout();

}
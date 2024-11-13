//Loading
function loadingWebsite(){
    setTimeout(finishLoadingAnimation, 2000);
}

function finishLoadingAnimation(){
    document.getElementById("loader").style.animation = "fadeOut 1s linear";
    document.getElementById("main").style.display = "block";
    setTimeout(fadeInAnimation, 1000);
}

function fadeInAnimation(){
    document.getElementById("main").style.animation = "fadeIn 1s linear";
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("main").style.opacity = "100%";
}

//Change page

function onClickHome(){
    window.location.href = "index.html";
}

function onClickPlayer(){
    window.location.href = "giocatore.html";
}

function onClickMatch(){
    window.location.href = "match.html";
}

//OnMouseEnter events

function onMouseEnter(){
    document.body.style.cursor = "pointer";
}

function onMouseExit(){
    document.body.style.cursor = "default";
}

//Go to Player Page

function onFolorunshoClick(){
    window.location.href = "giocatore.html#folorunsho"
}

function onKvaratskheliaClick(){
    window.location.href = "giocatore.html#kvaratskhelia"
}

function onBuongiornoClick(){
    window.location.href = "giocatore.html#buongiorno"
}
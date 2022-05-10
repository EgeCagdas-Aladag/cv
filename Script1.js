// JavaScript source code

//var extension = document.getElementById("extension");
//var moreButton = document.getElementById("moreButton");

window.addEventListener("scroll", scrolled);

function moreButtonClicked() {
    if (document.getElementById("moreButton").innerHTML == "More") {
        document.getElementById("extension").style.display = "block";
        document.getElementById("moreButton").innerHTML = "Hide";
        document.getElementById("extension").scrollIntoView();


    }
    else {
        scrollTo(top);
        setTimeout(() => document.getElementById("extension").style.display = "none", 500);
        document.getElementById("moreButton").innerHTML = "More";
    }
    return;
}

function gototopClicked() {
    scrollTo(top);
}


function scrolled() {
    if (window.scrollY === 0) {
        document.getElementById("gototop").style.display = "none";
    }
    else {
        document.getElementById("gototop").style.display = "block";
    }
        
}

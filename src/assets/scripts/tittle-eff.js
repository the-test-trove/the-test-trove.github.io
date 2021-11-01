$(document).ready(function(){
    "use strict";
//------------------ Tittle Effect  ----------------------------------------
//--------------------------------------------------------------------------

TittleFloating1('.schedule-tittle-eff');
TittleFloating1('.schedule-tittle-eff2');
function TittleFloating1($tittle){

    TittleFloating1Acrive();
    function TittleFloating1Acrive(){
        var textWrapper = document.querySelector($tittle);
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");   
        anime.timeline({loop: false})
        .add({
            targets: $tittle+' span',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        })
    }

}


TitteEff2()
function TitteEff2(){
    var textWrapper = document.querySelector('.tittle-eff2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
        targets: '.tittle-eff2 .letter',
        scale:[3,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 200,
        delay: (el, i) => 200 * i
    }).add({
        targets: '.tittle-eff2',
        opacity: [1],
        duration: 1500,
        easing: "easeOutExpo",
        delay: 1500
    });
}

//--------------------END Tittle Effect------------------------------------------------------


 
});


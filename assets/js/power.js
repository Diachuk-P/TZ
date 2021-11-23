const matchesBtn = document.querySelector ('.matches_button')
const matchesSlider = document.querySelector ('.matches')
const battlesBTN = document.querySelector ('.battles_button')
const battlesSlider = document.querySelector ('.battles')
const activeBtn = document.querySelector ('.active')
const mobilMatches = document.querySelector ('.mobile_matches-cards')
const mobilBattles = document.querySelector ('.mobile-cards-battles')


// window.onload = function() {
//     if (window.innerWidth > 740){

//     }
// }


battlesBTN.addEventListener('click', () =>{
    if (window.innerWidth > 740 ) {
        matchesSlider.style.display = 'none';
        battlesSlider.style.display = 'block';
        $('.matches_button').removeClass('active');
        $('.battles_button').addClass('active');
    }else {
        mobilMatches.style.display = 'none';
        mobilBattles.style.display = 'flex';
        $('.matches_button').removeClass('active');
        $('.battles_button').addClass('active');
    }
})

matchesBtn.addEventListener('click', () => { 
    if (window.innerWidth > 740 ){
        matchesSlider.style.display = 'flex';
        battlesSlider.style.display = 'none';
        $('.battles_button').removeClass('active')
        $('.matches_button').addClass('active')
    }else {
        mobilMatches.style.display = 'flex';
        mobilBattles.style.display = 'none';
        $('.matches_button').addClass('active');
        $('.battles_button').removeClass('active');
    }
})


const cards = document.querySelectorAll('.card-inner');

cards.forEach(card=> {
    const moreBtn = card.querySelector('.more-btn');
    const backBtn = card.querySelector('.back-btn');

    moreBtn.addEventListener('click', ()=> {
        card.classList.add('card-flipped')
    })
    backBtn.addEventListener('click', ()=> {
        card.classList.remove('card-flipped')
    })
})
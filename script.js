
const cityElem = document.querySelector(".city");



for(let i = 0; i < restaurantNamesObj.length ; i++){
    const divElem = document.createElement("div");
    divElem.className = 'box';
    const paraElem = document.createElement("p");
    paraElem.textContent = restaurantNamesObj[i].name;
    divElem.appendChild(paraElem);
    const spanElem = document.createElement('span');
    const iElem = document.createElement('i');
    iElem.className = 'fa-solid fa-chevron-right';
    spanElem.appendChild(iElem);
    divElem.appendChild(spanElem);
    cityElem.appendChild(divElem);
}

const signUp = document.querySelector('.js-sign-up');
const signUpPopup = document.querySelector('.js-sing-up-popup');
const nav = document.querySelector('.navs');
const headline = document.querySelector('.headline');
const india = document.querySelector('.india p');
const closeSignInPopup = document.querySelector('.sing-up i');

function showSignIn(){
    signUpPopup.classList.add('show');
    // nav.style.opacity = '0.5';
    // headline.style.opacity = '0.3';
    // india.style.opacity = '0.3';
    document.body.classList.add('opacity-body');
}
signUp.addEventListener('click', showSignIn);

closeSignInPopup.addEventListener('click', () => {
    signUpPopup.classList.remove('show');
    document.body.classList.remove('opacity-body');
});



const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const exit = document.querySelector('#exit-btn')
const search = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const exitSearch = document.querySelector('.close-search-box');

const openNavigation = ()=>{
    nav.classList.toggle('hide-mobile');
}
const closeNavigation = ()=>{
    nav.classList.add('hide-mobile')
}
const openSearchBox = ()=>{
    searchForm.classList.toggle('search-form')
}
const closeSearchBox = ()=>{
    searchForm.classList.add('search-form')
}
menu.addEventListener('click',openNavigation);
exit.addEventListener('click',closeNavigation);
search.addEventListener('click',openSearchBox);
exitSearch.addEventListener('click',closeSearchBox);
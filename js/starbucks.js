// 숨겨진 메뉴들
const coffee = document.querySelector('.hidden-menu-coffee');
const menu = document.querySelector('.hidden-menu-menu');
const store = document.querySelector('.hidden-menu-store');
const response = document.querySelector('.hidden-menu-response');
const reward = document.querySelector('.hidden-menu-reward');
const sales = document.querySelector('.hidden-menu-sales');
const new_menu = document.querySelector('.hidden-menu-new');


const coffee_menu = document.querySelector('#coffee-menu');
coffee_menu.addEventListener('mouseover', showCoffee);
coffee_menu.addEventListener('mouseout', hideCoffee);

const menu_menu = document.querySelector('#menu-menu');
menu_menu.addEventListener('mouseover', showMenu);
menu_menu.addEventListener('mouseout', hideMenu);

const store_menu = document.querySelector('#store-menu');
store_menu.addEventListener('mouseover', showStore);
store_menu.addEventListener('mouseout', hideStore);


const response_menu = document.querySelector('#response-menu');
response_menu.addEventListener('mouseover', showResponse);
response_menu.addEventListener('mouseout', hideResponse);

const reward_menu = document.querySelector('#reward-menu');
reward_menu.addEventListener('mouseover', showReward);
reward_menu.addEventListener('mouseout', hideReward);

const sales_menu = document.querySelector('#sales-menu');
sales_menu.addEventListener('mouseover', showSales);
sales_menu.addEventListener('mouseout', hideSales);


const new_menu_menu = document.querySelector('#new-menu');
new_menu_menu.addEventListener('mouseover', showNew);
new_menu_menu.addEventListener('mouseout', hideNew);


function showCoffee(){
    coffee.style.display = 'block'; 
}

function showMenu(){
    menu.style.display = 'block';
}

function showStore(){
    store.style.display = 'block';
}

function showResponse(){
    response.style.display = 'block';
}

function showReward(){
    reward.style.display = 'block';
}

function showSales(){
    sales.style.display = 'block';
}

function showNew(){
    new_menu.style.display = 'block';
}

function hideCoffee(){
    coffee.style.display = 'none';
}

function hideMenu(){
    menu.style.display = 'none';
}

function hideStore(){
    store.style.display = 'none';
}

function hideResponse(){
    response.style.display = 'none';
}

function hideReward(){
    reward.style.display = 'none';
}

function hideSales(){
    sales.style.display = 'none';
}

function hideNew(){
    new_menu.style.display = 'none';
}
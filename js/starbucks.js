// 숨겨진 메뉴들
const coffee = document.querySelector('.hidden-menu-coffee');
const menu = document.querySelector('.hidden-menu-menu');
const store = document.querySelector('.hidden-menu-store');
const response = document.querySelector('.hidden-menu-response');
const reward = document.querySelector('.hidden-menu-reward');
const sales = document.querySelector('.hidden-menu-sales');
const new_menu = document.querySelector('.hidden-menu-new');
let cnt = 0;

const coffee_menu = document.querySelector('#coffee-menu');
coffee_menu.addEventListener('mouseover', showCoffee);
coffee_menu.addEventListener('mouseout', hideCoffee);
coffee.addEventListener('mouseover', showCoffee);
coffee.addEventListener('mouseout', hideCoffee);

const menu_menu = document.querySelector('#menu-menu');
menu_menu.addEventListener('mouseover', showMenu);
menu_menu.addEventListener('mouseout', hideMenu);
menu.addEventListener('mouseover', showMenu);
menu.addEventListener('mouseout', hideMenu);

const store_menu = document.querySelector('#store-menu');
store_menu.addEventListener('mouseover', showStore);
store_menu.addEventListener('mouseout', hideStore);
store.addEventListener('mouseover', showStore);
store.addEventListener('mouseout', hideStore);


const response_menu = document.querySelector('#response-menu');
response_menu.addEventListener('mouseover', showResponse);
response_menu.addEventListener('mouseout', hideResponse);
response.addEventListener('mouseover', showResponse);
response.addEventListener('mouseout', hideResponse);

const reward_menu = document.querySelector('#reward-menu');
reward_menu.addEventListener('mouseover', showReward);
reward_menu.addEventListener('mouseout', hideReward);
reward.addEventListener('mouseover', showReward);
reward.addEventListener('mouseout', hideReward);

const sales_menu = document.querySelector('#sales-menu');
sales_menu.addEventListener('mouseover', showSales);
sales_menu.addEventListener('mouseout', hideSales);
sales.addEventListener('mouseover', showSales);
sales.addEventListener('mouseout', hideSales);

const new_menu_menu = document.querySelector('#new-menu');
new_menu_menu.addEventListener('mouseover', showNew);
new_menu_menu.addEventListener('mouseout', hideNew);
new_menu.addEventListener('mouseover', showNew);
new_menu.addEventListener('mouseout', hideNew);

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


function rotateNotice(){
    const notices = document.querySelector('.notice ul');
    if (cnt === 0){
        notices.style.transform = 'translateY(40px)';
        cnt += 1;
        console.log(cnt);
    }
    else if(cnt === 1){
        notices.style.transform = 'translateY(0px)';
        cnt += 1;
        console.log(cnt);
    }
    else if(cnt === 2){
        notices.style.transform = 'translateY(-40px)';
        cnt = 0;
        console.log(cnt);
    }
    
}

setInterval(rotateNotice, 2000);
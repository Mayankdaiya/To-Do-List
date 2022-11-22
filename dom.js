// console.dir(document);
// console.dir(document.domain);
// console.dir(document.URL);
// console.dir(document.body);
// console.dir(document.head);
// console.dir(document.links);
// console.dir(document.all);
// document.all[5].textContent = 'hello world';
// console.dir(document.all[12].innerText);

// let header = document.getElementById('header-title');
// header.style.backgroundColor='red';
// header.innerHTML='<h3> This is a h3 heading</h3>'
// console.log(header)
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// for(let i=0;i<items.length;i++){
    // items[i].style.backgroundColor='orange';
    // Object.assign(items[i].style,{backgroundColor:'red',fontWeight:'bold'})
// }
// let heading=document.querySelectorAll('.title')
// for(let i=0;i<heading.length;i++){
    // heading[i].style.backgroundColor='green';
// }
// let ss=document.getElementsByClassName("container");
// ss.style.backgroundColor='green'


/*** Traversing dom */

// var itemList=document.getElementById('items');

// parent Node

// console.log(itemList);
// itemList.parentNode.style.backgroundColor='Grey';

// console.log(itemList.parentElement);

//child Node
// console.log(itemList.children);

// console.log(itemList.childNodes);

// for(let rr=0;rr<4;rr++) itemList.children[rr].style.backgroundColor='lightGreen';
// console.log(itemList.nextSibling,"  ",itemList.nextElementSibling);


// var button=document.querySelector('#btn');
// button.addEventListener('click',addEvent);
// button.addEventListener('mouseenter',runEvent);
// button.addEventListener('mouseover',runEvent);
// function runEvent(e){
    // console.log("Event type:"+e.type);
// }
// e.target, e.clientX, e.clientY, e.offsetX

// function addEvent(e){
    // console.log(e);
// }

// let input=document.getElementsById('#item');

const themeColors=document.querySelectorAll('[name="theme"]');
console.log(themeColors);

const storeTheme=function(theme){
    console.log(theme);
    localStorage.setItem('theme',theme);
}

const applyTheme=function(){
    const activeTheme=localStorage.getItem('theme');
    document.getElementById(activeTheme).checked=true;
}


themeColors.forEach(themeOption=>{
    themeOption.addEventListener('click',()=>{
        // console.log(themeOption);
        storeTheme(themeOption.id);
    })
})

document.onload=applyTheme();

function submit5()
{
    let localstorage=localStorage.getItem('data');
    let list = document.getElementById('item');
    if(list.value=='')
    {
        return;
    }
    console.log(list.value);
    if(!localstorage)
    {
        localstorage = {};
    }
    else
    {
        localstorage = JSON.parse(localstorage);
    }
    localstorage[list.value]=1;
    localStorage.setItem('data',JSON.stringify(localstorage));
}

function load()
{
    const data = JSON.parse(localStorage.getItem('data'));
    let str=``;
    if(data)
    {
        for(let i in data)
        {
            str=`${str}
            <li class="list-group-item" id="${i}">${i}<button class="btn btn-danger btn-sm float-right delete" onclick="del('${i}')">X</button></li>`;
        }
    }
    document.getElementById('items').innerHTML = str;
}

function del(id)
{
    let data = JSON.parse(localStorage.getItem('data'));
    delete data[id];
    localStorage.setItem('data',JSON.stringify(data));
    load();
}
document.getElementById('filter').addEventListener('input',search);

function search()
{
    let s = document.getElementById('filter');
    s = s.value.toLowerCase();
    let arr = document.querySelectorAll('.list-group-item');
    for(let data of arr)
    {
        if(data.textContent.toLowerCase().includes(s))
        {
            data.style.display="";
        }
        else
        {
            data.style.display="none";
        }
    }
}


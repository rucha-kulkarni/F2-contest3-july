/*
<div class="card">
            <div class="logo">
                <img src="images.png" width="30px"  alt="">
                <div class="name">
                    <div class="abrv">BTC</div>
                    <div class="fname">Bitcoin</div>
                </div>
            </div>
            <div class="percent">
               <span>2.03%</span> 
            </div>
            <div class="price">
                <span>$234,86</span>
            </div>
            <div class="total_volume">
                <span>Total Volume: 12435436357</span>
            </div>
            <div class="market_cap">
                <span>Market Cap: $413546657857</span>
            </div>
        </div>
*/

let container = document.getElementById("container");
 
async function fetchData() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    const data = await response.json();
    appendDataInGrid(data);
    appendDataInList(data);
}

function appendDataInGrid(cardslist){
    cardslist.forEach((card) => {
        let div = document.createElement("div");
        div.className = ("card");
        div.innerHTML = `
            <div class="logo">
                <img src="${card.image}" width="40px">
                <div class="name">
                    <div class="abrv">${card.symbol.toUpperCase()}</div>
                    <div class="fname">${card.name}</div>
                </div>
            </div>
            <div class="percent">
                <span ${card.price_change_percentage_24h>0?`style="color:rgb(115, 182, 111); border: 1px solid rgb(115, 182, 111)"`:`style="color:rgb(243, 38, 38); border: 1px solid rgb(243, 38, 38)"`}> ${card.price_change_percentage_24h} %</span> 
            </div>
            <div class="price">
                <span ${card.price_change_percentage_24h>0?`style="color:rgb(115, 182, 111); "`:`style="color:rgb(243, 38, 38);"`}> $${card.current_price}</span>
            </div>
            <div class="total_volume">
                <span>Total Volume: ${card.total_volume}</span>
            </div>
            <div class="market_cap">
                <span>Market Cap: &#36;${card.market_cap}</span>
            </div>`;
        container.appendChild(div);
   });
}

const tableBody = document.querySelector('.table tbody');

function appendDataInList(data){  

    data.forEach(item => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <tr>
                <td id="img"><img src="${item.image}" width="30px" alt=""></td>
                <td><div class="name">
                    <div class="abrv">${item.symbol.toUpperCase()}</div>
                    <div class="fname">${item.name}</div>
                </div></td>
                <td> <span class="figures p" ${item.price_change_percentage_24h>0?`style="color:rgb(115, 182, 111); border: 1px solid rgb(115, 182, 111)"`:`style="color:rgb(243, 38, 38); border: 1px solid rgb(243, 38, 38)"`}> ${item.price_change_percentage_24h} %</span> </td>
                <td> <span class="figures" ${item.price_change_percentage_24h>0?`style="color:rgb(115, 182, 111); "`:`style="color:rgb(243, 38, 38);"`}> $${item.current_price}</span></td>
                <td> <span class="big_figures">${item.total_volume}</span></td>
                <td> <span class="big_figures">$${item.market_cap}</span></td>
            </tr>`;
   });
 }  

let gridSection = document.getElementById("grids");
let listSection = document.getElementById("lists")
let list = document.getElementById("list");
gridSection.addEventListener("click", () => {
    let computedStyle = window.getComputedStyle(container)
    if (computedStyle.display === 'none') {
        console.log("inside grid");
        container.style.display = 'grid';
        list.style.display = 'none';
        gridSection.style.color =  '#4A80E2';
        gridSection.style.borderBottom = '2px solid #4A80E2';
        listSection.style.color =  '#fff';
        listSection.style.borderBottom = 'none';
      } 
    })    
listSection.addEventListener("click", () => {
    let computedStyle = window.getComputedStyle(list)
    if (computedStyle.display === 'none') {
        console.log("inside list");
        list.style.display = 'block';
        container.style.display = 'none';
        listSection.style.color =  '#4A80E2';
        listSection.style.borderBottom = '2px solid #4A80E2';
        gridSection.style.color =  '#fff';
        gridSection.style.borderBottom = 'none';
    }
})

fetchData();



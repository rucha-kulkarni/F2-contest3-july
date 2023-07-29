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

const container = document.getElementById("container");
 
async function fetchData() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    const data = await response.json();
     appendDataInGrid(data);
    //appendDataInList(data);
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
               <span>${card.price_change_percentage_24h} %</span> 
            </div>
            <div class="price">
                <span>&#36;${card.current_price}</span>
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
fetchData();

//const table = document.getElementsByTagName("table");

// function appendDataInList(cardsList){  

//     cardslist.forEach((card) => {
//         let tBody = document.createElement("tbody");
//         div.className = ("card");
//         div.innerHTML = `
  
//                 <tr>
//                     <td><img src="${card.image}" width="30px" alt=""></td>
//                     <td><div class="name">
//                         <div class="abrv">${card.symbol.toUpperCase()}</div>
//                         <div class="fname">${card.name}</div>
//                     </div></td>
//                     <td> <span class="figures">${card.price_change_percentage_24h} %</span> </td>
//                     <td> <span class="figures">&#36;${card.current_price}</span></td>
//                     <td> <span class="big_figures">Total Volume: ${card.total_volume}</span></td>
//                     <td> <span class="big_figures">Market Cap: &#36;${card.market_cap}</span></td>
//                 </tr>

//            `
//         table.appendChild(tBody);
//    });
// //     let tBody = document.createElement("tbody");
// //     for(let i = 0; i < cardsList.length; i++){
// // /*        <table>
// //             <tbody>
// //                 <tr>
// //                     <td><img src="images.png" width="30px" alt=""></td>
// //                     <td><div class="name">
// //                         <tr class="abrv">BTC</tr>
// //                         <tr class="fname">Bitcoin</tr>
// //                     </div></td>
// //                     <td> <span class="figures">2.03%</span> </td>
// //                     <td> <span class="figures">$234,86</span></td>
// //                     <td> <span class="big_figures">Total Volume: 12435436357</span></td>
// //                     <td> <span class="big_figures">Market Cap: $413546657857</span></td>
// //                 </tr>
// //             </tbody>
// //         </table>
// // */
// //         let tr = document.createElement("tr");
// //         let img= document.createElement("td");
// //         img.innerText = cardsList[i].image;

// //         let name = document.createElement("td");
// //         name.innerText = cardsList[i].symbol.toUpperCase(),cardsList[i].name;

// //         let percent = document.createElement("td");
// //         percent.innerText = cardsList[i].price_change_percentage_24h;

// //         let price = document.createElement("td");
// //         price.innerText = cardsList[i].current_price;

// //         let total_volume = document.createElement("td");
// //         total_volume.innerText = cardsList[i].total_volume;

// //         let market_cap = document.createElement("td");
// //         market_cap.innerText = cardsList[i].market_cap;

// //         tr.append(img, name, percent, price, total_volume, market_cap);
// //         tBody.appendChild(tr);
// //     }
// //   table.appendChild(tBody);
// }  

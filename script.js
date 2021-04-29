'use strict';

 const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: false 
  },

  methods: {
    makeGETRequest(url, callback) {
      return new Promise((resolve, reject) => {
        let xhr;
    
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
         //   if (xhr.status === 200) resolve(xhr.responseText);
         //   else reject('Error');
          callback(xhr.responseText);
          }
        };
    
      // xhr.open('GET', `${API_URL}${url}`, true);
        xhr.open('GET', url, true);
        xhr.send();
      });
    },

    clickHandler() {
      app.FilterGoods();
    },

    clickCart() {
      app.isVisibleCart = !app.isVisibleCart;
    },

    FilterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },

    mounted() {
      this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
        this.goods = JSON.parse(goods);
        this.filteredGoods = JSON.parse(goods);
      });
    }
  }
});



// class GoodsItem {
//     constructor(product_name, price, id_product) {
//       this.product_name = product_name;
//       this.price = price;
//       this.id_product = id_product;
//     }
//     render() {
//       return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button id="${this.id_product}">Добавить</button></div>`;
//     }
// }

// class GoodsList {
//     constructor() {
//       this.goods = [];
//       this.filteredGoods = [];
//     }
    // fetchGoods() {
    // return makeGETRequest(`/catalogData.json`)
    //   .then((goods) => {
    //     this.goods = JSON.parse(goods);
    //     this.filteredGoods = JSON.parse(goods);
    //   });
    // }

    // filterGoods(value) {
    //   const regexp = new RegExp(value, 'i');
    //   this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    //   this.render();
    // }

//     render() {
//       let listHtml = '';
//       this.goods.forEach(good => {
//         const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
//         listHtml += goodItem.render();
//       });
//       document.querySelector('.goods-list').innerHTML = listHtml;
//     }
//     totalPrice() {
//         let total = 0;
//         this.goods.forEach(item => {
//             total += item.price;
//         });            
//     }
// }

// const list = new GoodsList();
// list.fetchGoods().then(() => list.render());

// class shopBasket extends GoodsList {
//     constructor() {
//         super();
//     }
//     fetchGoods() {}
//     buy() {}
//     delete() {}
// }

// class shopBasketItem extends GoodsList {
//     constructor() {
//         super();
//     }
//     addOne() {}
//     removeItem() {}
//     deleteItem() {}
// }

// const searchInput = document.querySelector('.goods-search');
// searchInput.addEventListener('input', ({target}) => {
//   const {value} = target;
//   list.filterGoods(value);
// });



// Добавить методы и обработчики событий для поля поиска. 
// Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода. 
// На кнопку Искать добавить обработчик клика, вызывающий метод FilterGoods.
// Добавить корзину. В html-шаблон добавить разметку корзины. 
// Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
// * Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров пуст.




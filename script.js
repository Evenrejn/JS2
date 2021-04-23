'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
  return new Promise((resolve, reject) => {
    let xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) resolve(xhr.responseText);
        else reject('Error');
      }
    };

    xhr.open('GET', `${API_URL}${url}`, true);
    xhr.send();
  });
}

// const renderGoodsItem = (title = "item", price = "0") => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;

// const renderGoodsList = (list = []) => {
//     list.forEach(function(item) {
//         document.querySelector(".goods-list").innerHTML = document.querySelector(".goods-list").innerHTML + renderGoodsItem(item.title, item.price);
//     });
// };

class GoodsItem {
    constructor(title, price, id_product) {
      this.title = title;
      this.price = price;
      this.id_product = id_product;
    }
    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button id="${this.id_product}">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
      this.goods = [];
      this.filteredGoods = [];
    }
    fetchGoods() {
    //   this.goods = [
    //     { title: 'Shirt', price: 150 },
    //     { title: 'Socks', price: 50 },
    //     { title: 'Jacket', price: 350 },
    //     { title: 'Shoes', price: 250 },
    //   ];
    // }
    return makeGETRequest(`/catalogData.json`)
      .then((goods) => {
        this.goods = JSON.parse(goods);
        this.filteredGoods = JSON.parse(goods);
      });
    }

    filterGoods(value) {
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.title));
      this.render();
    }

    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price, good.id_product);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
    totalPrice() {
        let total = 0;
        this.goods.forEach(item => {
            total += item.price;
        });            
    }
}

const list = new GoodsList();
list.fetchGoods().then(() => list.render());

class shopBasket extends GoodsList {
    constructor() {
        super();
    }
    fetchGoods() {}
    buy() {}
    delete() {}
}

class shopBasketItem extends GoodsList {
    constructor() {
        super();
    }
    addOne() {}
    removeItem() {}
    deleteItem() {}
}

const searchInput = document.querySelector('.goods-search');
searchInput.addEventListener('input', ({target}) => {
  const {value} = target;
  list.filterGoods(value);
});

//renderGoodsList(goods);

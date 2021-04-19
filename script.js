'use strict';

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = "item", price = "0") => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;


const renderGoodsList = (list = []) => {
    list.forEach(function(item) {
        document.querySelector(".goods-list").innerHTML = document.querySelector(".goods-list").innerHTML + renderGoodsItem(item.title, item.price);
    });
};

class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
    totalPrice() {
        let total = +"";
        this.goods.forEach(item => {
            total += item.price;
        });            
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();


class shopBasket {
    constructor() {
    }
}

class shopBasketItem {
    constructor() {
    }
}



renderGoodsList(goods);


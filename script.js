'use strict';

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = "item", price = "0") => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => {
    list.forEach(function(item) {
        document.querySelector(".goods-list").innerHTML =  document.querySelector(".goods-list").innerHTML + renderGoodsItem(item.title, item.price);
    });
};


renderGoodsList(goods);


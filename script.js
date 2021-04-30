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

  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
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
          callback(xhr.responseText);
          }
        };
    
        xhr.open('GET', url, true);
        xhr.send();
      });
    },

    clickHandler() {
      app.FilterGoods();


      console.log('clickHandler');
    },

    clickCart() {
      app.isVisibleCart = !app.isVisibleCart;


      console.log('clickCart');
    },

    FilterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));


      console.log('FilterGoods');
    },

  }
});


var commonData = {
  menu: menuData,
  orders: {},
  activeDrinkCategory: "beerNWine",
  askReset: false,
  orderPlaced: false
};


var foodVM = new Vue({
  el: '#food_area',
  data: commonData,
  methods: {
  }
});


var drinkVM = new Vue({
  el: '#drink_area',
  data: commonData,
  methods: {
  }
});

var orderVM = new Vue({
  el: '#order_area',
  data: commonData,
  methods: {
  },
  computed: {
    totalSum: function () {
      var sum = 0;
      for (var i = 0; i < this.menu.food.length; i++) {
        var item = this.menu.food[i];
        sum += item.price * this.orders[item.id];
      }
      for (var categoryIndex = 0; categoryIndex < commonData.menu.drinks.length; categoryIndex++) {
        var category = commonData.menu.drinks[categoryIndex];
        for (var drinkIndex = 0; drinkIndex < category.content.length; drinkIndex++) {
          var drinkItem = category.content[drinkIndex];
          sum += drinkItem.price * this.orders[drinkItem.id];
        }
      }
      return sum;
    }
  }
});

var popupVM = new Vue({
  el: '#popups',
  data: commonData,
  methods: {
  }
});

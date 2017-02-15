var commonData = {
  menu: menuData,
  orders: {}
};


var foodVM = new Vue({
  el: '#food',
  //mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  data: commonData,
  methods: {
  }
});


var drinkVM = new Vue({
  el: '#drinks',
  //mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  data: commonData,
  methods: {
  }
});

var orderVM = new Vue({
  el: '#order_summary',
  //mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
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
      return sum;
    }
  }
});
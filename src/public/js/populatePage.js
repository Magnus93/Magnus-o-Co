var commonData = {menu: menuData};


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
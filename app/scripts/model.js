import $ from 'jquery';
import Backbone from 'backbone';
// import renderOrder from 'renderOrder';

    // add data to a model
const OrderMenu = Backbone.Model.extend({
  urlRoot: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
  defaults: {
    items: [],
    tax:'0825',
    total:'0'
  },
  pickItem: function (singleItem){
    let basket = this.get('items');
    let newBasket = basket.concat(singleItem);
    this.set('items', newBasket);
    console.log(this);
  }

});

let orderMenu = new OrderMenu();


// $orderMenu.set({
//   title: $('.foodItemName').val()


export default orderMenu;

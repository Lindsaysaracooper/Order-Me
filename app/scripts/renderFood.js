import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import orderMenu from './model';



// I need to get the group of objects to be in an array


function groupToArray(item) {
    let category = _.each(item, function(value, key) {
        // console.log(`value is ${value}`);
        // console.log(`key is ${key}`);

        let $categoryItem = $(`
            <div class="menuCategory">
            <h3 class="categoryName">${key}</h3>`);
        console.log($categoryItem);
        $('.menuWhole').append($categoryItem);
        // console.log(value[0].item)
        value.forEach(function(singleItem, i, arr) {
            let $eachItem = $(`
              <h3 class="foodItemName">${singleItem.item}</h3>
              <p class="itemDescription">${singleItem.description}</p>
              <p class="itemPrice">${singleItem.price}</p></div>`);

            $categoryItem.append($eachItem);

            $eachItem.filter('.foodItemName').on('click', function(evt) {
              console.log("yas queen");
                evt.preventDefault();
                orderMenu.pickItem(singleItem);
                // custom function that adds the  item to the ordermenu
            });
        });
    });

}



// });

// console.log(singleItem);


//   success: function success(data) {
//         console.log(data);
//         data.forEach((item, i, arr) => {
//
//     });
// }

// ajax request get

$.ajax({
    url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json'
}).then(groupToArray);

export default groupToArray;

import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import orderMenu from './model';


function renderOrder(model) {
  let menuItems = orderMenu.get('items');
    let $order = $(`
    <div class="taxAndTotal">
    // <p class= "salesTax">${orderMenu.get('tax')}</p>
    // <p class = "total">${orderMenu.get('total')}</p>
    <ul></ul>

    </div>
    <input class="orderButton" type="button" value="ORDER">
    </div>`);

    $('.orderList').empty().append($order);

      menuItems.forEach(function(item){
        let $addedItem = $(`
            <li>
              <h3>${menuItems.get('items')}</h3>

            </li>
          `);
          $order.find('ul').append($addedItem);
      });
  
      // <data>$${Number(item.price).toFixed(2)}</data>

}



// create a total var for all of the prices added


//     });
renderOrder();
// visual rep of order. model is the order. visual rep needs to re-draw herself every time the model changes.

orderMenu.on('change', renderOrder);
//
export default renderOrder;

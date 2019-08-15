'use strict';

//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button.asdfasdfasdf

/*
* #js-shopping-list-form - form
* #shopping-list-entry - input
*
* .shopping-list - container for...
* .shopping-items, the items.
*/

//Input function

/**
 * @param {newItem}
 * @returns {'string'}
*/
function inputTest() {
    console.log('input test is running');
  $('#js-shopping-list-form').submit( function(event){
    event.preventDefault();
    let item = $('#shopping-list-entry').val();
    console.log(item);
    if (typeof item === 'string'){
        //new string with html
        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>
        `);
    }
  });
}

function checkItem() {
  $('.shopping-item-toggle').on('click', function(event){
    $(event.currentTarget).closest('div').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function deleteItem() {
  $('.shopping-item-delete').on('click', function(event){
    $(event.currentTarget).closest('li').remove();
  });
}


let item = $('#shopping-list-entry').val();

console.log('this code is running!!');

$(()=>{
    inputTest();
    checkItem();
    deleteItem();
});

//List function
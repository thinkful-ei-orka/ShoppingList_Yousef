
// Get data from form and add
function handleAddItem () {
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault()
    const newItem = $(event.currentarget).find('.js-shopping-list-entry').val()
    $('.shopping-list').append(` <li>
          <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`)
  })
}


function checkAndUncheck() {
$('.shopping-item-toggle').on('click', function (event) {
    console.log('this is running')
    event.preventDefault()
    $('.shopping-list').on('click', '.shopping-item-toggle').toggleClass('shopping-item__checked')
})
}

function removeItem() {
$('.shopping-item-delete').on('click', function (event){
    event.preventDefault()

})
}

// $('.shopping-item-toggle').on('click', function(event){
//     event.currentarget().toggleClass('shopping-item__checked')
// })

$(handleAddItem)
$(checkAndUncheck)
$(removeItem)
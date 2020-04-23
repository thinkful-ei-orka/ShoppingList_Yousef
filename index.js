
// Get data from form and add
function handleAddItem () {
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault()
    const addItem = $('input').val()
    $('.shopping-list').append(` <li>
          <span class="shopping-item">${addItem}</span>
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

function checkAndUncheck () {
  $('.shopping-item-toggle').on('click', '.shopping-item-toggle', function (event) {
    console.log('this is running')
    this.closest('li').toggleClass('shopping-item__checked')
  })
}

function removeItem () {
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    this.closest('li').remove()
  })
}

$(handleAddItem)
$(checkAndUncheck)
$(removeItem)

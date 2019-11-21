$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        var myList = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${myList}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });
     $(document).on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $(document).on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
});
$(document).ready(function () {
  var jets = new Jets({
    searchTag: '#innerSearchBox',
    contentTag: '.tbody',
    didSearch: function (search_phrase) {

      document.location.hash = '';

      if (search_phrase == '') {
        // Empty search value
        // Display everything. Close tables
        $('.cat').show();
      } else {
        // Populated search field

        // Hide category icons
        $('.cat').hide();

        // Display all category tables
        $('.category-table').addClass('show');

        // Go through each table
        $('tbody').each(function (i) {
          // If tbody contains a visible table-*
          if ($(this).find('tr.table-success:visible').length > 0 || $(this).find('tr.table-failure:visible').length > 0) {
            $(this).parent().parent().addClass('show');
          } else {
            // Hide all tables not containing a visible tr
            $(this).parent().parent().removeClass('show');
          }
        });
      }
    }
  });
});

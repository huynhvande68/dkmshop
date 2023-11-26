    $(".select_pr").select2({
        tags: true,
        matcher: matchCustom,
        tokenSeparators: [',']
    })
    function matchCustom(params, data) {
        // If there are no search terms, return all of the data
        if ($.trim(params.term) === '') {
          return data;
        }
    
        // Do not display the item if there is no 'text' property
        if (typeof data.text === 'undefined') {
          return null;
        }
    
        // `params.term` should be the term that is used for searching
        // `data.text` is the text that is displayed for the data object
        if (data.text.indexOf(params.term) > -1) {
          var modifiedData = $.extend({}, data, true);
          modifiedData.text ;
    
          // You can return modified objects from here
          // This includes matching the `children` how you want in nested data sets
          return modifiedData;
        }
    
        // Return `null` if the term should not be displayed
        return null;
    }
    function selectAll() {
        $(".select_pr > option").prop("selected", true);
        $(".select_pr").trigger("change");
    }
    
    function deselectAll() {
        $(".select_pr > option").prop("selected", false);
        $(".select_pr").trigger("change");
    }
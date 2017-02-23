$(document).ready( function() {
    $('.tx-indexedsearch-searchbox-sword').on('click focusin', function () {
        var $$ = $(this);
        $$.attr('data-default-value', $$.attr('value'));

        if ($$.val() ==  $$.attr('data-default-value')) {
            $$.val("");
        }
    }).on('focusout', function () {
        var $$ = $(this);

        if ($$.val() == "") {
            $$.val($$.attr('data-default-value'));
        }
    });
});
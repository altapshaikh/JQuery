// External JQuery
$('#button').click(function() {
    var buttonText = $(this).text();
    if(buttonText === 'HIDE'){
        $('#green-card').slideUp();
        $(this).text('SHOW');
    }
    else{
        $('#green-card').slideDown();
        $(this).text('HIDE');
    }

});
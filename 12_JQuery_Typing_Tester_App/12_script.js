

// Get the HTML Elements
var originalTextElement = $('#original-text');
var textArea = $('#text-area');
var messageCard = $('#message-card');
var message = $('#message');
var minutesElement = $('#minutes');
var secondsElement = $('#seconds');
var milliSecondsElement = $('#milli-seconds');
var resetButton = $('#reset-button');

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;

// keypress for TextArea
textArea.keypress(function() {
    var textEnteredLength = $(this).val().length;
    if(textEnteredLength === 0){
        // start Timer
        setInterval(startTimer,10);
    }
});

// keyUp Event for TextArea
textArea.keyup(function() {
    var textEntered = textArea.val();
    var originalText = originalTextElement.text();
    var partialText = originalText.substr(0,textEntered.length);

   if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-success')
            .removeClass('bg-primary')
            .removeClass('bg-danger')
            .addClass('bg-light');
        message.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-light')
                .removeClass('bg-primary')
                .removeClass('bg-danger')
                .addClass('bg-success');
            message.text('Congratulations !!');
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-success')
                    .removeClass('bg-light')
                    .removeClass('bg-danger')
                    .addClass('bg-primary');
                message.text('Correct !!');
            }
            else{
                // red
                messageCard.removeClass('bg-success')
                    .removeClass('bg-primary')
                    .removeClass('bg-light')
                    .addClass('bg-danger');
                message.text('Wrong !!');
            }
        }
    }
});

// Start Timer
function startTimer() {
   minutes = Math.floor((timer/100)/60);
   seconds = Math.floor((timer/100) - (minutes * 60));
   milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

   minutesElement.text(leadingZero(minutes));
   secondsElement.text(leadingZero(seconds));
   milliSecondsElement.text(leadingZero(milliSeconds));

    timer++;
}

// Leading Zero Function
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

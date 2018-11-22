// Triangle 1
var theStr = 'NAVEENSAGGAM';
function triangleOne(str) {
    var tempStr = '';
    for(var i=1; i<=str.length; i++){
       tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleOne(theStr));

function triangleTwo(str) {
    var tempStr = '';
    for(var i=0; i<=str.length;i++){
        tempStr += addWhiteSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangleTwo(theStr));

// Triangle Three
theStr = 'NAVEENSAGGAM';
function triangleThree(str) {
    var tempStr = '';
    for(var i=str.length;i >=0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleThree(theStr));

// Triangle Four
theStr = 'NAVEENSAGGAM';
function triangleFour(str) {
    var tempStr = '';
    for(var i=str.length; i>=0; i--){
        tempStr += addWhiteSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangleFour(theStr));

// Triangle Five
theStr = 'NAVEEN SAGGAM';
function triangleFive(str) {
    var tempStr = '';
    var len = str.length;
    for(var i=0; i<len/2; i++){
        tempStr += str.substr(0,i) +
                   addWhiteSpace(len - (2 * i)) +
                   str.substr(len-i) + '\n';
    }
    for(var j=len/2; j>=0; j--){
        tempStr += str.substr(0,j) +
            addWhiteSpace(len - (2 * j)) +
            str.substr(len-j) + '\n';
    }
    return tempStr;
}
console.log(triangleFive(theStr));

// Triangle Six
theStr = 'NAVEENSAGGAM';
function triangleSix(str) {
    var tempStr = '';
    for(var i=1; i<=str.length; i++){
        tempStr += str.substr(0,i) + '\n';
    }
    for(var j=str.length-1 ; j>=0; j--){
        tempStr += str.substr(0,j) + '\n';
    }
    return tempStr;
}
console.log(triangleSix(theStr));

// Triangle Seven
theStr = 'NAVEENSAGGAM';
function triangleSeven(str) {
    var tempStr = '';
    for(var i=str.length; i>=0; i--){
        tempStr += addWhiteSpace(i) + str.substr(i) + '\n';
    }
    for(var j=1; j<str.length; j++){
        tempStr += addWhiteSpace(j) + str.substr(j) + '\n';
    }
    return tempStr;
}
console.log(triangleSeven(theStr));

function addWhiteSpace(num) {
    var tempSpace = '';
    for(var i=0; i<num; i++){
        tempSpace += ' ';
    }
    return tempSpace;
}

// Triangle One
$('#triangleOneInput').keyup(function() {
    var triangleString = triangleOne($(this).val());
    $('#triangeOneText').text(triangleString);
});

// Triangle Two
$('#triangleTwoInput').keyup(function() {
    var triangleString = triangleTwo($(this).val());
    $('#triangleTwoText').text(triangleString);
});

// Triangle Three
$('#triangleThreeInput').keyup(function() {
    var triangleString = triangleThree($(this).val());
    $('#triangleThreeText').text(triangleString);
});

// Triangle Four
$('#triangleFourInput').keyup(function() {
    var triangleString = triangleFour($(this).val());
    $('#triangleFourText').text(triangleString);
});

// Triangle Five
$('#triangleFiveInput').keyup(function() {
    var triangleString = triangleFive($(this).val());
    $('#triangleFiveText').text(triangleString);
});

// Triangle Six
$('#triangleSixInput').keyup(function() {
    var triangleString = triangleSix($(this).val());
    $('#triangleSixText').text(triangleString);
});

// Triangle Seven
$('#triangleSevenInput').keyup(function() {
    var triangleString = triangleSeven($(this).val());
    $('#triangleSevenText').text(triangleString);
});
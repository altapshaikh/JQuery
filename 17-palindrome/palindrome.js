<!doctype html>
<html>
<head>
<script>
function palin()
{
    var a,no,b,temp=0;

    no=Number(document.getElementById("no_input").value);

    b=no;
    while(no>0)
    {
        a=no%10;
        no=parseInt(no/10);
        temp=temp*10+a;
    }
    if(temp==b)
    {
        alert("Palindrome number");
    }
    else
    {
        alert("Not Palindrome number");
    }
}
</script>
</head>
<body>
Enter any Number: <input id="no_input">
    <button onclick="palin()">Check</button></br></br>
</body>
</html>
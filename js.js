function runwhile(){
var kelet = document.getElementById('pivo').value;  
var fib = []; 

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=kelet; i++)
{
    fib[i] = fib[i-2] + fib[i-1];
}
    document.getElementById('result').innerHTML = fib;
};
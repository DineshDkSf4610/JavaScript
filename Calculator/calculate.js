function dis(val)
{
    document.getElementById("result").value += val;
}

function Calc()
{
    var input = document.getElementById("result").value;
    var result = eval(input);
    document.getElementById("result").value = result;
}
function Clear()
{
    document.getElementById("result").value = "";
}
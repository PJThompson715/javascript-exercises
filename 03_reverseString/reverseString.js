const reverseString = function(string) 
{
    let reverse="";
    let length=string.length;
    for (let i=length-1;i>=0;i--)
    {
        reverse+=string[i];
    }
    return reverse;

};



// Do not edit below this line
module.exports = reverseString;

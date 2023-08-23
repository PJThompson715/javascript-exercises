const sumAll = function(first, last) 
{
    
    if(Number.isInteger( last) == false || Number.isInteger( first) == false)
    {
        return "ERROR";
    }

    
    if (first<0)
    {
        return "ERROR";
    }
    if(first>last)
    {
        let temp=first;
        first=last;
        last=temp;
    }
    let sum=0;
    for (let i=first;first<=last;first++)
    {
        sum+=first;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(arr, ...index) 
{
    let newarray=[];

    arr.forEach((item)=> {
        if(!index.includes(item))
        {
            newarray.push(item)
        }
    });
    return newarray
}

// Do not edit below this line
module.exports = removeFromArray;

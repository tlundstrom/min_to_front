const array = [5,-999,7,3,-5,8,1,0];

const findSmallest = (arr) => {
    let index = 0
    for (let i=0;i<arr.length; i++){
        if(arr[index]> arr[i]){
            index = i;
        }
    }
    return index;
}

const moveSmallest = (arr) =>{
    let newArray = [];
    let smallest = findSmallest(arr);
    newArray[0] = arr[smallest];
    for(let i =1; i<arr.length; i++){
        i> smallest?
        newArray[i] = arr[i]
        :newArray[i] = arr[i - 1]
    }
    return newArray;
}


console.log(moveSmallest(array));
    var arr =[1,5,3,2]
    var integer =8
    for(var i = 0 ; i < arr.length ; i++){
        for(var x = i + 1 ; x < arr.length ; x ++){
            if(arr[i]+arr[x]== integer){
                console.log(arr[i],arr[x])
                x++;
            }
            i++;

        }
    }
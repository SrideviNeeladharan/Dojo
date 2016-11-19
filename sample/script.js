/*$("document").ready(function(){
    var inputValue = $("#inputValue").val();
    $("#submit").on('Click', function(evt){
      evt.preventDefault();
        
      console.log(inputValue);
      
        
    });
    
});*/
function placeholder(){

    var sum = 0;
   for(var i = 4; i<=10; i++)
   {
       if(i%2===0)
       {
       sum=sum+i;
       }
   }
    debugger;
   //your code here
   return sum; 
}
/*function maxMinAvg(arr) {
    //your code here 
    var sum=0;
    var avg=0;
    var max=0;
    var min=0;
    var arrnew =[];   
    for(i=0,j=1; i<arr.length; i++,j++)
    {        
        sum = sum+arr[i];
        if(arr[i]< arr[j])
        {
              if(max < arr[j])
              {
                  max=arr[j];
              } 
              if(min > arr[i])
              {
              min = arr[i];
              }  
        }
        else
        {
            if(max < arr[i])
            {
                max=arr[i];
            }
             if(min > arr[j])
            {
                min = arr[j];
            }
        }
     }
      
        avg = sum/arr.length;
        arrnew.push(max,min,avg);
    debugger;
        return arrnew; 
}*/

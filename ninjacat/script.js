$('document').ready(function(){
    
    $('img').click(function(){
        console.log(this);
        var curImg = $(this).attr('src');
        var nextImg = $(this).attr('data-alt-src');
        console.log(curImg, nextImg);
        $(this).attr('src', nextImg);
        $(this).attr('data-alt-src', curImg);
    });  
    
    $("#genBut").click(function(){
        $('body').append('<div><button class="newBut">new button</button></div');
        
    $(document).on('click', '.newBut', function(){
        alert("you clicked on a newly added button");
    });
        
    });
    
    
});
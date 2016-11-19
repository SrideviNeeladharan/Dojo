$(document).ready(function(){
    $('#button1').click(function(){
        console.log("hi");
        $("p").addClass("para").text("New class created");
        
    });
    
    $("#button2").click(function(){
         $('body').data('color', 'Blue');
        console.log( $('body').data('color'));
    });
        
    $("#button3").click(function(){
        $('.toggle').slideToggle('slow');
       
    });
     $("#button4").click(function(){
        $('.toggle').slideToggle('slow');
       
    });
     $("#button5").click(function(evt){  
         var sample =  $('#haha').val();
         $('body').data('thing', sample);
         $('h5').append($('body').data('thing'));
       
    });
    $("#button6").click(function(){
        $("#button6").html("DoneClicking!").css("background-color", "yellow").css("height","25px");
        
        $("img").before("<h3>Who did that!!!</h3>");
        $('h3').toggle('slow');
        
        var src = $('img').attr("src").replace("glossy-red-button.png", "Knapp.png");
        
      $("img").attr('src', src);;
      $("img").after("<b>Thank you!!!!</b>");
        
    });
    
    $('#btn4').click(function(){
    $('#focusing').focus();
})
});
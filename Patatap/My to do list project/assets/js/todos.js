// // Check off specific todos by clicking
// $(document).ready(function(){
// //if li is gray
// alert("connected");

//     $("body").on("click", "li", function(){
//         $(this).toggleClass("completed");     
//     });
// //remove selected todo if click on X

// //Add todos from input

// });
// });
$(document).ready(function(){
    //ToggleCLass completed
    $("body").on("click", "li", function(){
        $(this).toggleClass("completed");
    });
    //remove selected li's from To-Do List
    $("body").on("click", "span", function(e){
      
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
          
        });
        e.stopPropagation();
    });
    // Add To-Dos
    $("input").keypress(function(e){
        if(e.which === 13){
            //clear input
            var todoText = $(this).val();
           
            //append input
            
            $("li:last").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
            $(this).val("");
        }
    })
$(".fa-plus").click(function(){
    $("input").fadeToggle();
})

})

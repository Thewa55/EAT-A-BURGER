$(function(){ //I don't think I need this since my js link is at the bottom but I am being safe
  
  $(".create-form").on("submit", (event)=>{
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burg").val().trim()
    };

    $.ajax("/api/burgers",{
      type: "POST",
      data: newBurger  
    }).then(() =>{
      location.reload();
    })
  })

  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var eatenState = $(this).data("neweat")
    console.log("This is the eatenstate: " + eatenState)
    var newEatState = {
      eaten: eatenState
    }
    $.ajax("/api/burgers/" + id,{
      type: "PUT",
      data: newEatState
    }).then(
        function(){

    })
  })
})
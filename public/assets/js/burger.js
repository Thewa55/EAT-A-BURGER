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

})
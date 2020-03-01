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
    $(this).attr("display", "none")
    console.log("This is the eatenstate: " + eatenState)
    var newEatState = {
      hungry: eatenState
    }
    $.ajax("/api/burgers/" + id,{
      type: "PUT",
      data: newEatState
    }).then(
        function(){
        location.reload();
    })
  })

  let buttonRender = ()=>{
    let buttons = document.querySelectorAll(".change-eat")
    for(let i=0; i < buttons.length; i++){
      if(buttons[i].dataset.neweat === "false"){
        buttons[i].style.display = "none"
      }
    }
    // console.log(buttons.innerText)
      // console.log(button.data("neweat"))
      // if($(this).data("neweat" === false)){
      //   console.log($(this).data("neweat"))
      // }
    // })
  }

  buttonRender()
})
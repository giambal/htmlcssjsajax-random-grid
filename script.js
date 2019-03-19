
function squareClick() {
  var me=$(this);
  me.removeClass("red");
  me.removeClass("yellow");
  $.ajax({
          url: "https://www.boolean.careers/api/random/int",
          method: 'GET',
          success: function(data){

              if (data.success) {
                me.text(data.response);
                if (data.response<6) {
                  me.addClass("yellow");
                }else {
                  me.addClass("red");
                }
              }
          },
          error: function(error){
              alert("Attenzione! Errore!");
              console.log(error);
          }
   });
}

function generateGrid() {
  var cont=$(".grid-container");
  for (var i = 0; i < 36; i++) {

    $(cont).append("<div class=\"box\"></div>");
  }
}

function init() {

  generateGrid();

  $(".box").click(squareClick);
}

$(document).ready(init);

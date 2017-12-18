var left = $('#Div1').offset().left;
var left = $('#Div2').offset().left;
var left = $('#Div3').offset().left;

$("#Div1").css({left:left}).animate({
    width: "200px",
    height: "200px",
    left: 0
  }, {
    duration: 3000,
    specialEasing: {
      width: "linear",
      height: "easeOutBounce"
    },
    complete: function() {
    }
  });
  
$("#Div2").css({left:left}).animate({
    width: "200px",
    height: "200px",
    left: 0
  }, {
    duration: 3000,
    specialEasing: {
      width: "linear",
      height: "easeOutBounce"
    },
    complete: function() {

    }
  });

$("#Div3").css({left:left}).animate({
    width: "200px",
    height: "200px",
    left: 0
  }, {
    duration: 3000,
    specialEasing: {
      width: "linear",
      height: "easeOutBounce"
    },
    complete: function() {

    }
  });

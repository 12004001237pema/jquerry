// poop up
$(document).ready(function(){
  $("h1").mouseenter(function(){
    alert("ITS WORLD CUP TIME");
  });
});

// Hide effect
$(document).ready(function(){
  $("#hide").click(function(){
    $("img").hide();
  });
  $("#show").click(function(){
    $("img").show();
  });
});

// toggle
$(document).ready(function(){
  $(".pp").click(function(){
    $("#img1").toggle();
    
  });
});
//   slid
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

//   animation
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});

//   stop sliding
$(document).ready(function(){
  $("#slid").click(function(){
    $("#down").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#down").stop();
  });
});

//   callback
$(document).ready(function(){
  $("#hid").click(function(){
    $("p").hide("2000")
      alert("your hidden now");
    
  });
});
//   jquery
$(document).ready(function(){
  $("#cha").click(function(){
    $("#p2").css("color", "purple")
      .slideUp(1500)
      .slideDown(1500);
  });
});

//   get
$(document).ready(function(){
  $("#get1").click(function(){
    alert("Text: " + $("#A").text());
  });
  $("#get2").click(function(){
    alert("HTML: " + $("#A").html());
  });
});

//   HTML
$(document).ready(function(){
  $("#htm").click(function(){
    alert("Value: " + $("#b").val());
  });
});
//   value
$(document).ready(function(){
  $("#cc").click(function(){
    alert($("#C").attr("href"));
  });
});

//   set

$(document).ready(function(){
  $("#set1").click(function(){
    $("#d1").text("DREAM !");
  });
  $("#set2").click(function(){
    $("#d2").html("<b>COMES!</b>");
  });
  $("#set3").click(function(){
    $("#d3").val("TRUE");
  });
});
//   set html
$(document).ready(function(){
  $("#bt1").click(function(){
    $("#e1").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
  });

  $("#bt2").click(function(){
    $("#e2").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });
});

// ADD HTML
$(document).ready(function(){
  $("#wwe").click(function(){
    $("img").before("<b>PORTUGAL</b>");
  });

  $("#wwe1").click(function(){
    $("img").after("<i>PORTUGAL</i>");
  });
});

// remove html
$(document).ready(function(){
  $("button").click(function(){
    $("#d1").remove();
  });
});

// add html


$(document).ready(function(){
  $("#gg").click(function(){
    $("h4, h5, p").addClass("red");
    $(".ff").addClass("important");
  });
});


// css html
$(document).ready(function(){
  $("#uu").click(function(){
    $("#tt").css("background-color", "skyblue");
  });
});

// dimension html
$(document).ready(function(){
  $("button").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div1").width() + "</br>";
    txt += "Height of div: " + $("#div1").height();
    $("#div1").html(txt);
  });
});
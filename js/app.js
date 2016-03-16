$(document).ready(pageReady);

function pageReady() {
  $("#submit-btn").click(submitFunction);
  function submitFunction() {

    event.preventDefault();


    var city = $("#city-type").val();
    $("#city-type").val("");
    city = city.toLowerCase().trim();


    resetBody();


    if(city == "new york city" || city == "nyc" || city == "new york") {
      $("body").addClass("nyc");
    }

    else if (city == "sf" || city == "san francisco" || city == "bay area") {
      $("body").addClass("sf");
    }

    else if (city == "austin" || city == "atx") {
      $("body").addClass("austin");
    }

    else if (city == "los angeles" || city == "la" || city == "lax") {
      $("body").addClass("la");
    }

    else if (city == "sydney" || city == "syd") {
      $("body").addClass("sydney");
    }

  }

  function resetBody() {
    $("body").removeClass("nyc sf austin la sydney");
  }

}

$(document).ready(function () {
  $(".tabs li").on("click", function(e) {
    e.preventDefault();
    var content = $(this).find('a').attr('href')
    $(".tab-content").hide();

    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(content).show();
  })
});

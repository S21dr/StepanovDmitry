$(document).ready(() => {
  let $button = $('.go');

  $button.on("click", function () {
    var $this = $(this);
    if ($this.hasClass("active_go") || $this.hasClass("success")) {
      return false;
    }
    $this.addClass("active_go");
    setTimeout(() => {

      $this.addClass("loader");
    }, 125);  
    setTimeout(() => {
      $this.removeClass("loader active_go");
      
      $this.addClass("validate animated pulse");
    }, 2600);
    setTimeout(() => {
      
      $this.removeClass("validate animated pulse");
      $this.blur();
    }, 3900);
  });
});
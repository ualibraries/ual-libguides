// Add libraryh3lp chat service
(function() {
  var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
  x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "us.libraryh3lp.com/js/libraryh3lp.js?6875";
  var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
})();

$(document).ready(function(){

  // Remove links from profile images
  $('.s-lib-profile-image').unwrap();

  // Replace profile box title with "Your librarian"
  $("div[id*='profile_box'] > h2").contents().replaceWith("Your librarian");

  // remove empty p tags inserted after hr
  $("hr + p").filter( function() {
    return $.trim($(this).html()) == ' ';
  }).remove();

  // Remove breadcrumb links
  $('#s-lib-bc').remove();

  // Hide side tabs if there is only one page and no in-page navigation
  var navigation = $("ul.nav-pills.nav-stacked");
  var listitems = navigation.children();
  if (navigation.children("li").length <= 1 && listitems.children("ul").length == 0) {
    navigation.hide();
  }
});

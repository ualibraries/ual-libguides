$(document).ready(function() {
  // Remove links from profile images
  $('.s-lib-profile-container img').unwrap();

  // Replace profile box title with "Your librarian"
  $("div[id*='profile_box'] > h2").contents().replaceWith("Your librarian");

  // remove empty p tags inserted after hr
  $("hr + p").filter(function() {
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

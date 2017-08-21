/**
 * Customize breadcrumb links
 */
$(document).ready(function(){

  // Remove link back to library.arizona.edu
  $('#s-lib-bc-list li:first-child').remove();

  // Rewrite LibGuides link to point to group guides page
  $('#s-lib-bc-list a[href="http://libguides.library.arizona.edu"]')
  .attr('href','http://libguides.library.arizona.edu/ahsl')
  .text('AHSL Guides');
});

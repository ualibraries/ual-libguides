/*
* LibGuides: Customize breadcrumb links
* - Change URL in .attr() and string in .text() to match group
* - Paste this code code between script tags in group level "Custom JS/CSS Code" area
*
*/
$(document).ready(function(){

    // Remove link back to UAL main page
    $('#s-lib-bc-list li:first-child').remove();

    // Rewrite LibGuides link to point to group guides page
    $('#s-lib-bc-list a[href="http://libguides.library.arizona.edu"]')
        .attr('href','http://libguides.library.arizona.edu/ahsl')
        .text('AHSL Guides');
});
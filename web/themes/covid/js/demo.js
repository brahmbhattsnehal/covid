/**
 * @file
 * demo behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Behavior description.
   */
  Drupal.behaviors.demo = {
    attach: function (context, settings) {

      console.log('It works!');

    }
  };

  var baseUrl = drupalSettings.path.baseUrl;

  jQuery(document).on("click", ".reg-btn", function() {
      var nid = jQuery('#get_nid').attr('data-nid');    
      jQuery.ajax({
          url:  baseUrl + "updateprofiles",
          type: 'post', 
          dataType: "json", 
          data:  {nid:nid},          
          success: function (response) {
            console.log('response==>' + response);
            location.reload();
          },
      });
  });

} (jQuery, Drupal));

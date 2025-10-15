/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // Mobile policy: force all links into the hidden menu
  var isMobile = (window.matchMedia && window.matchMedia('(max-width: 768px)').matches);
  if (isMobile) {
    // Move everything into hidden
    while ($vlinks.children().length > 0) {
      $vlinks.children().last().prependTo($hlinks);
    }
    $btn.removeClass('hidden');
    $hlinks.addClass('hidden');
    breaks = [];
    $btn.attr('count', $hlinks.children().length);
    // Update paddings based on masthead height
    var mastheadHeight = $('.masthead').height();
    $('body').css('padding-top', mastheadHeight + 'px');
    if ($('.author__urls-wrapper button').is(':visible')) {
      $('.sidebar').css('padding-top', '');
    } else {
      $('.sidebar').css('padding-top', mastheadHeight + 'px');
    }
    return;
  } else {
    // Desktop: restore any hidden items before running standard greedy logic
    if ($hlinks.children().length > 0) {
      if ($vlinks_persist_tail.length > 0 && $vlinks_persist_tail.children().length > 0) {
        // insert before tail block to keep tail at end
        while ($hlinks.children().length > 0) {
          $hlinks.children().last().insertBefore($vlinks_persist_tail);
        }
      } else {
        while ($hlinks.children().length > 0) {
          $hlinks.children().last().appendTo($vlinks);
        }
      }
      breaks = [];
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
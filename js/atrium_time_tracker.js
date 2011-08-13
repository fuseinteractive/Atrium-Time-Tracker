
/*
  Just a little fix for when you hit the 'enter' key from
  the comment form. In Atrium there is a hidden submit button
  for attachments that some browsers (Firefox for example) will
  use as the submit button when hitting 'enter' from one of the
  time tracker fields.
*/
Drupal.behaviors.timeTrackerEnterKey = function(context) {
  $("#comment-form input").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      e.preventDefault();
      $('#comment-form input.form-submit[value=Save]').click();
      return false;
    } else {
      return true;
    }
  });
}
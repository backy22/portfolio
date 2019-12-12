// menu toggle for mobile
$('.menu').click(function(){
  $('nav li').toggle();
});

// When loading the page, projects fadein in order
$(window).on('load', function(){
  $('.project').each(function(i){
    $(this).delay(200*i).queue(function() {
      $(this).addClass('show').dequeue();
    });
  });
});

// When a project is clicked, hide thank message.
$('.project').click(function(){
  $('.thanks').hide();
});

var hash = location.hash;
var key = hash.replace(/#/, '')
// When loading the page, if there is thanks params, thanks class shows.
if (key == 'thanks'){
  $('.thanks').show();
}else{
  $('.thanks').hide();
}

// menu for mobile
$('.menu').click(function(){
  $('nav li').toggle();
});

// project data
var projectData = {
  'dessert': {title: 'Vector Matcha Parfeit', property: 'illustrator', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['dessert-1.jpg']},
  'identity': {title: 'Identity Design', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['identity-1.jpg', 'identity-2.jpg', 'identity-3.jpg']},
  'restaurant': {title: 'Restaurant Website', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['i5KA4-o18XI']},
  'typography': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['typography-1.jpg', 'typography-2.jpg', 'typography-3.jpg']},
  'sean': {title: 'Sean', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['sean-1.jpg', 'sean-2.jpg']},
  'matrix': {title: 'Matrix', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['XHbsLUddccE']},
  'mindmap': {title: 'Mindmap', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['gDN7L0b2RZE']},
    'package': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['package-1.jpg']},
  'packman': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['WOr41mp1-p0']},
  //'portfolio': {title: 'Portfolio', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['portfolio-1.mp4']},
  'retouch': {title: 'Retouch', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['retouch-1.jpg']},
  'sushi': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['5gxkMYFUvrM']},
  'tsubaki': {title: 'Tsubaki', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['tsubaki-1.jpg', 'mKBNDYzUN9M', 'tsubaki-3.mp4', '0H9qpuyyfp8']},
  'twitter': {title: 'Twitter', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['twitter-1.mp4']},
  'wario': {title: 'Wario', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['wario-1.jpg', 'Metc2PP5tMY']}
}

for (var i=0; i<Object.keys(projectData).length; i++){
  var projectKey = Object.keys(projectData)[i];
  $('.projects').append('<div class="project"><a href="index.html#' + projectKey + '"><img src="img/' + projectKey + '-thumbnail.jpg" alt=""></a><div class="title">' + projectData[projectKey]['title'] + '</div></div>');
}

// scroll fadein
$(window).on('load', function(){
  $('.project').each(function(i){
    $(this).delay(200*i).queue(function() {
      $(this).addClass('show').dequeue();
    });
  });
});

// click a project
$('.project').click(function(){
  var href = $(this).find('a').prop('href');
  var projectKey = href.replace(/.*?#/,'');
  getParams(projectKey);
});

var hash = location.hash;
var projectKey = hash.replace(/#/, '')
if (projectKey == 'thanks'){
  $('.thanks').show();
} else if (projectKey){
  $('.thanks').hide();
  getParams(projectKey);
}

function getParams(projectKey){
  $('html').scrollTop(0);
  $('.detail-title').html(projectData[projectKey]['title'])
  $('.detail-property').html(projectData[projectKey]['property'])
  $('.detail-text').html(projectData[projectKey]['text'])
  $('.detail-images').empty();
  // put images and videos
  for (var i=0; i<projectData[projectKey]['images'].length; i++){
    if (projectData[projectKey]['images'][i].match('jpg')){
      $('.detail-images').append('<img class="demo" src="img/' + projectData[projectKey]['images'][i] + '" alt="">');
    }else if (projectData[projectKey]['images'][i].match('mp4')){
      $('.detail-images').append('<video class="demo" src="video/' + projectData[projectKey]['images'][i] + '"autoplay muted loop controls></video>');
    }else{
      $('.detail-images').append('<div class="video demo"><iframe width="853" height="480" src="https://www.youtube.com/embed/' + projectData[projectKey]['images'][i] + '?&autoplay=1&rel=0&loop=1&playlist='+ projectData[projectKey]['images'][i] + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
    }
  }
  createNav(projectKey);
  // click prev nav or next nav
  $('.prev-nav, .next-nav').click(function(){
    var href = $(this).prop('href');
    var projectKey = href.replace(/.*?#/,'');
    getParams(projectKey);
  });
  $('.detail').show();
}

// create previous and next navigations
function createNav(projectKey){
  for (var i=0; i<Object.keys(projectData).length; i++){
    if (Object.keys(projectData)[i] == projectKey){
      if (i > 0){
        var prevKeyLink = '<a class="prev-nav" href="index.html#' + Object.keys(projectData)[i-1] + '">&#60;prev&nbsp;</a>'
      }
      if (i < Object.keys(projectData).length-1){
        var nextKeyLink = '<a class="next-nav" href="index.html#' + Object.keys(projectData)[i+1] + '">&nbsp;next&#62;</a>'
      }
      prevKeyLink = prevKeyLink ? prevKeyLink : '' 
      nextKeyLink = nextKeyLink ? nextKeyLink : '' 
      $('.project-nav').html(prevKeyLink + nextKeyLink) 
    }
  }
}

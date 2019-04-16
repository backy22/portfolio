// menu for mobile
$('.menu').click(function(){
  $('nav li').toggle();
});

// project data
var projectData = {
  'dessert': {title: 'Vector Matcha Parfeit', property: 'illustrator', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['dessert-1.jpg']},
  'identity': {title: 'Identity Design', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['identity-1.jpg', 'identity-2.jpg', 'identity-3.jpg']},
  'restaurant': {title: 'Restaurant Website', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['restaurant-1.mp4']},
  'typography': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['typography-1.jpg', 'typography-2.jpg', 'typography-3.jpg']},
  'sean': {title: 'Sean', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['sean-1.jpg', 'sean-2.jpg']},
  'matrix': {title: 'Matrix', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['matrix-1.mp4']},
  'mindmap': {title: 'Mindmap', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['mindmap-1.mp4']},
    'package': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['package-1.jpg']},
  'packman': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['packman-1.mp4']},
  //'portfolio': {title: 'Portfolio', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['portfolio-1.mp4']},
  'retouch': {title: 'Retouch', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['retouch-1.jpg']},
  'sushi': {title: 'Typography', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['sushi-1.mp4']},
  'tsubaki': {title: 'Tsubaki', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['tsubaki-1.jpg', 'tsubaki-2.mp4', 'tsubaki-3.mp4', 'tsubaki-4.mp4']},
  'twitter': {title: 'Twitter', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['twitter-1.mp4']},
  'wario': {title: 'Wario', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['wario-1.jpg', 'wario-2.mp4']}
}

var delay = 0;
for (var i=0; i<Object.keys(projectData).length; i++){
  var projectKey = Object.keys(projectData)[i];
  $('.projects').append('<div class="project" data-delay="' + delay + '"><a href="index.html#' + projectKey + '"><img src="img/' + projectKey + '-thumbnail.jpg" alt=""></a><div class="title">' + projectData[projectKey]['title'] + '</div></div>');
  delay = delay + 200;
}

// scroll fadein
var scrollAnimationElm = document.querySelectorAll('.project');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    showPos = elm.getBoundingClientRect().top + 300;
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset['delay'])? elm.dataset['delay'] : 0;
      setTimeout(function(index) {
        scrollAnimationElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

$('.project').click(function(){
  var href = $(this).find('a').prop('href');
  var projectKey = href.replace(/.*?#/,'');
  getParams(projectKey);
});

var hash = location.hash;
var projectKey = hash.replace(/#/, '')
console.log(projectKey);
if (projectKey == 'thanks'){
  console.log('thanks');
} else if (projectKey){
  getParams(projectKey);
}

function getParams(projectKey){
  $('html, body').animate({scrollTop:0}, '10', 'linear');
  $('.detail-title').html(projectData[projectKey]['title'])
  $('.detail-property').html(projectData[projectKey]['property'])
  $('.detail-text').html(projectData[projectKey]['text'])
  $('.detail-images').empty();
  for (var i=0; i<projectData[projectKey]['images'].length; i++){
    if (projectData[projectKey]['images'][i].match('jpg')){
      $('.detail-images').append('<img class="demo" src="img/' + projectData[projectKey]['images'][i] + '" alt="">');
    }else if (projectData[projectKey]['images'][i].match('mp4')){
      $('.detail-images').append('<video class="demo" src="video/' + projectData[projectKey]['images'][i] + '"autoplay muted loop></video>');
    }
  }
  $('.detail').show();
}


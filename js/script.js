// menu toggle for mobile
$('.menu').click(function(){
  $('nav li').toggle();
});

// project data
var projectData = {
'identity': {title: 'Identity Design', property: 'Adobe Illustrator<br>Logo',text: "This project is connected to the next project. I created the logo for my fictional company that serves web design and web development. I chose one out of other options in the second image. Some options were associated with the meaning of “tsubaki”, which is camellia in Japanese. Some of them represents programming. The reasons why I finally chose the logo are scalability and simplicity. Also, it works with black color. I use Acme Gothic as a font of logo, which shows clean, advanced and professional. In terms of brand identity of business card, envelope and letterhead, I tried to make them simple but unique and have consistency.", images: ['identity-1.jpg', 'identity-2.jpg', 'identity-3.jpg']},
'tsubaki': {title: 'Design Agent Website', property: 'Moodboard<br>Paper prototyping<br>Mockup<br>Adobe Illustrator<br>Adobe Photoshop<br>Adobe XD<br>Responsive',text: "I added some keywords to the previous logo and identity design project. I created the moodboard with keywords \"powerful\", \"creative\", \"unique\", \"cheerful\" and \"fashionable\". I’m very satisfied with combination of the colors and fonts. Using a lot of yellow looks the website cheerful along with Active font. The first video shows the paper prototype. User testing using paper prototype made the navigation clear. I made high fidelity mock up for mobile and desktop website.", images: ['tsubaki-1.jpg', 'mKBNDYzUN9M', 'tsubaki-3.mp4', '5JyUjQvLiK8']},
'weathermap': {title: 'Weather Map', property: 'jQuery<br>API', text: "This website shows the weather in the place you click on the map using the open weather map api and the google geocorder api. <p class=\"link\"><a href=\"https://ayatsubakino.com/creativecoding/weather\" target=\"blank\"> \>\> View the website</a><p>", images: ['SnNd_RBdF9I']},
'sushi': {title: 'Conveyor Belt Sushi', property: 'JavaScript<br>HTML<br>CSS',text: "This website is completely \"useless\". You can pick sushi from conveyor belt and when you click the \"Check Please!\" button, the number of plates you picked appear. Then when you finish the payment,  you can continue to pick sushi again.<p class=\"link\"><a href=\"https://ayatsubakino.com/creativecoding/sushi/\" target=\"blank\"> \>\> View the website</a><p>", images: ['5gxkMYFUvrM']},
'mindmap': {title: 'Mindmap', property: 'JavaScript<br>Canvas',text: "I made an animated and interactive graphic using the HTML5 Canvas and JavaScript. As I show in the video, you can create a mindmap and preview it on the page.<p class=\"link\"><a href=\"https://ayatsubakino.com/creativecoding/canvas/mindmap/\" target=\"blank\"> \>\> View the website</a><p>", images: ['gDN7L0b2RZE']},
'packman': {title: 'PacMan', property: 'HTML<br>CSS Animations',text: "This is a fan site for the classic video game Pac Man using animations, transitions and transforms of CSS.<p class=\"link\"><a href=\"https://ayatsubakino.com/contemporarywebd1/assignment1/\" target=\"blank\"> \>\> View the website</a><p>", images: ['WOr41mp1-p0']},
'sean': {title: 'Sean', property: 'Wireframe<br>Mockup<br>Adobe Illustrator<br>Adobe Photoshop<br>HTML<br>CSS<br>JavaScript',text: "This project was redesigning of the Sean Connery official site (http://www.seanconnery.com/). I began from assessing the current website and completely rethought the design and the structure of the website. I set the purpose of the website as to introduce him because he already retired and the existing website is non-commercial site. As a result of him, I set keywords which are \"successful\", \"historic\", \"elegant\", \"formal\" and \"timeless\".The biggest feature is the layout of images. The layout that each piece of image finishes at a different point makes users scroll through the pages. Black, white, grey and gold match the keywords of the website. Keeping consistency in every page was the most difficult point of the project, because I tried to use various technique to achieve the goal at first. I focused on the four columns layout with randomness and removed some contents which are not important. As a result, I kept consistency as well as achieved the goal of the website. In the front-end development, I made use of Grid system.<p class=\"link\"><a href=\"https://ayatsubakino.com/webd100/finalassignment/\" target=\"blank\"> \>\> View the website</a><p>", images: ['sean-1.jpg', 'sean-2.jpg', 'sean-3.jpg']},
 'restaurant': {title: 'Restaurant Website', property: 'HTML<br>CSS, JavaScript',text: "This is the website for a restaurant. The target user is female customers, so the website looks elegant. I used image slideshows and video to attract users.<p class=\"link\"><a href=\"https://ayatsubakino.com/webd100/assignment2/\" target=\"blank\"> \>\> View the website</a><p>" , images: ['i5KA4-o18XI']},
'typography': {title: 'Typography', property: 'Typography<br>Adobe Illustrator',text: "I put three projects using typography.The first one is to express the meaning of a word and its opposite using typographic contrasts. I chose \"unstable\" and \"stable\". The second one is to arrange song lyrics using the typographic contrast with the principle of alignment and hierarchy. I chose \"Just The Way You Are\" of Bruno Mars. I balanced the size of fonts and chose the color to highlight. <br>The final one is the typographic specimen poster. I chose OPTIMA to promote in the poster.  I did some research about the history, designer, features and companies who use OPTIMA and show the results arranged with hierarchy. The type anatomy is my favorite part.",  images: ['typography-1.jpg', 'typography-2.jpg', 'typography-3.jpg']},
'wario': {title: 'Wario', property: 'Adobe After Effects<br>Adobe Photoshop<br>Adobe Premiere',text: "After preparing the action sequences for all actions such as jump, power up, run, swim and climb and he background stage using Photoshop, I created animation on After Effects and put sound effect on Premiere.", images: ['wario-1.jpg', 'Metc2PP5tMY']},
'twitter': {title: 'Twitter', property: 'Adobe After Effects<br>Adobe Illustrator',text: "I made motion graphic of the actions below of iPhone and twitter app.<br>1. Unlock the iPhone<br>2. Scroll up and down the control center<br>3. Slide the widget on the left page<br>4. Load the home screen of iPhone<br>5. Open the twitter<br>6. Scroll the feed<br>7. Tap the button to tweet<br>8. Tweet<br>9. Show the tweet", images: ['twitter-1.mp4']},
'matrix': {title: 'Matrix', property: 'Adobe After Effects',text: "I used the character panel to create characters that rain down, ultimately spelling your name in Adobe After Effects.", images: ['XHbsLUddccE']},
  'dessert': {title: 'Vector Matcha Parfait', property: 'Adobe Illustrator', text: "I translated a bitmap photo of Matcha parfait into a vector image without using the image trace function. Match parfait is consist of matcha jelly, sponge cakes, cream, red beans, rice cakes, chocolate, macaron, ice cream, mint and the parfait glass. I repressed the texture, shadow and layers of them with accuracy by using various tools.", images: ['dessert-1.jpg']},           
    'package': {title: 'Package Design', property: 'illustrator',text: "This is the package for a Nintendo Switch game cover for a new game titled 'Pixel vs Vector'", images: ['package-1.jpg']},
  'retouch': {title: 'Photo Retouch', property: 'Adobe Photoshop',text: "I retouched the old image ( the left image below ) to the right one.", images: ['retouch-1.jpg']}
  //'portfolio': {title: 'Portfolio', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['portfolio-1.mp4']},
}

// Make the each DOM of the project list
for (var i=0; i<Object.keys(projectData).length; i++){
  var projectKey = Object.keys(projectData)[i];
  $('.projects').append('<div class="project"><a href="index.html#' + projectKey + '"><img src="img/' + projectKey + '-thumbnail.jpg" alt=""></a><div class="title">' + projectData[projectKey]['title'] + '</div></div>');
}

// When loading the page, projects fadein in order
$(window).on('load', function(){
  $('.project').each(function(i){
    $(this).delay(200*i).queue(function() {
      $(this).addClass('show').dequeue();
    });
  });
});

// When a project is clicked, call the getParams function.
$('.project').click(function(){
  $('.thanks').hide();
  var href = $(this).find('a').prop('href');
  var projectKey = href.replace(/.*?#/,'');
  getParams(projectKey);
});

var hash = location.hash;
var projectKey = hash.replace(/#/, '')
// When loading the page, if there is thanks params, thanks class shows.
if (projectKey == 'thanks'){
  $('.thanks').show();
} else if (projectKey){
  $('.thanks').hide();
  getParams(projectKey);
}

// Show the project detail of projectKey
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
  // When clicking the prev nav or next nav, call getParams function
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

// menu toggle for mobile
$('.menu').click(function(){
  $('nav li').toggle();
});

// project data
var projectData = {
'attendance': {title: 'Attendance App', property: 'Ruby on Rails<br>Bootstrap<br>Postgresql<br>Heroku', text: "This attendance app allows users to log in or out, and clock-in or clock-out or edit. This app includes sign-in and user management function. <p class=\"link\"><a href=\"https://gentle-river-49145.herokuapp.com/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/attendance\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['k1H-w4j2hzs'], tag: 'development'},
'blog': {title: 'Toronto Blog', property: 'Gatsby<br>Netlify', text: "I made this blog site to try Gatsby and Netlify after attending the JAMstack meetup. Both tools help us develope websites very quickly. I developed this website in a half day. First, I installed NetlifyCMS and customized the CMS template on my local. Second, I pushed the code on my github and deployed to Netlify. Now, I can update my blog on a cloud CMS and the changes are deployed automatically.  <p class=\"link\"><a href=\"https://laughing-newton-11f0b8.netlify.com/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/blog\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['blog-1.jpg'], tag: 'development'},
'give&take': {title: 'React Chat Application', property: 'Sketch<br>Mockup<br>React<br>Redux<br>Material-UI<br>Firebase',text: "This is a personal project named \"give&take\". After finishing the design using Sketch, I'm working on developing the application using react ×redux ×firebase. The concept of this application is similar with Craigslist, but this application will allow us to trade other than money. We are not motivated only by money, but also value the give and take of a relationship. I hope that this way of thinking will have an impact on our life style. <p class=\"link\"><a href=\"https://givetake-pro.web.app\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/givetake\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['give&take-1.jpg', 'h7D4t1jYDgs'], tag: 'development'},
'videoplayer': {title: 'Video Player', property: 'JavaScript',text: "This is the videoplayer using JavaScript and MeidaAPI. You can play, pause, stop, loop, mute and seek the video. <p class=\"link\"><a href=\"https://ayatsubakino.com/advanced_multimedia_technology/assignment1/video.html\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/advanced_multimedia_technology/tree/master/assignment1\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['zFDgMS1lbic'], tag: 'development'},
'quotecube': {title: 'Quote Cube', property: 'JavaScript<br>three.js', text: "This Quote Cube uses Three.js to make cubes, <a href=\"https://github.com/lukePeavey/quotable\" target=\"blank\"> Quotable API </a> to get random quotes, and Web Speech API to read the quotes. <p class=\"link\"><a href=\"https://ayatsubakino.com/advanced_multimedia_technology/assignment2/quotecube.html\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/advanced_multimedia_technology/tree/master/assignment2\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['2E-f-0EUFAA'], tag: 'development'},
'movielist': {title: 'Movie List', property: 'PHP', text: "This movie list is made by PHP and is integrated with <a href=\"https://docs.google.com/spreadsheets/d/1xqJrvCpL04SNQwZH9aD3dFDf75TDZiSmmA-be8AgTy0/edit#gid=0\" target=\"blank\"> Google Docs API </a>. You can add new data. I'm using data from <a href=\"https://www.imdb.com/?ref_=nv_home\" target=\"blank\"> IMDb.</a> <p class=\"link\"><a href=\"https://ayatsubakino.com/ContemporaryWebDesign2/assignment1/movie-list.php\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/contemporary_web_design2/tree/master/assignment1\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['se_EDAFfyEg'], tag: 'development'},
'whslist': {title: 'World Heritage Site List', property: 'PHP<br>MySQL', text: "This is the World Heritage Sites I've been in my life. This is used PHP and mySQL. You can add new data including image upload, edit and delete the data. I'm using data from <a href=\"https://whc.unesco.org/\" target=\"blank\"> UNESCO </a>. <p class=\"link\"><a href=\"https://ayatsubakino.com/ContemporaryWebDesign2/assignment2/WHS.php\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/contemporary_web_design2/tree/master/assignment2\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['JQ3KSQQ9cbs'], tag: 'development'}, 
'sokka': {title: 'App Promotion Website', property:'Adobe Photoshop<br>Mockup<br>HTML<br>CSS<br>JavaScript<br>Responsive' , text: "This website was designed to promote an application called Sokka. I made two versions of high fidelity mockups to represent this application within two days. After designing them, I developed this responsive website using HTML, CSS and JavaScript and based on the model that the client chose. I made an effort to understand what the client wanted and achieved success in a short time. As a result, the client was really pleased with my design and was satisfied with my quality of work. <p class=\"link\"><a href=\"http://sokka.tokyo/en/index.html\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/sproject\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['sokka-1.jpg'], tag: 'development'},
'weathermap': {title: 'Weather Map', property: 'jQuery<br>API', text: "This website shows the weather in any place you click on the map using the Open Weather Map API  and the Google Geocoding API. <p class=\"link\"><a href=\"https://ayatsubakino.com/creativecoding/weather\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/creative_coding/tree/master/weather\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['SnNd_RBdF9I'], tag: 'development'},
'sushi': {title: 'Sushi Conveyor Belt', property: 'JavaScript<br>HTML<br>CSS',text: "This website is completely \"useless\" but will make you laugh. You can pick sushi from the conveyor belt and when you click the \"Check Please!\" button, the number of plates you picked appears. Then when you finish the payment,  you can continue to pick sushi again.<p class=\"link\"><a href=\"https://ayatsubakino.com/creativecoding/sushi/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/creative_coding/tree/master/sushi\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['5gxkMYFUvrM'], tag: 'development'},
'mindmap': {title: 'Mindmap', property: 'JavaScript<br>Canvas',text: "I made an animated and interactive graphic using HTML5 Canvas and JavaScript. As the video shows, you can create your original mindmap and preview it with animation on the page.<p class=\"link\"><a href=\"https://ayatsubakino.com/creativecoding/canvas/mindmap/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/creative_coding/tree/master/canvas/mindmap\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['gDN7L0b2RZE'], tag: 'development'},
'packman': {title: 'PacMan', property: 'HTML<br>CSS Animations',text: "This is a fan site for the classic video game Pac Man using animations, transitions and transforms of CSS.<p class=\"link\"><a href=\"https://ayatsubakino.com/contemporarywebd1/assignment1/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/contemporary_web_design1/tree/master/assignment1\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['WOr41mp1-p0'], tag: 'development'},
'sean': {title: 'Sean Connery\'s Website', property: 'Wireframe<br>Mockup<br>Adobe Illustrator<br>Adobe Photoshop<br>HTML<br>CSS<br>JavaScript',text: "This project was redesigning  <a href=\"http://www.seanconnery.com/\">Sean Connery's official site</a>. I began by assessing the current website and completely rethought the design and the structure of the website. Next, I set the purpose of the website as to introduce him because he already retired and the existing website is a non-commercial site. I set keywords which are \"successful,\" \"historic,\" \"elegant,\" \"formal\" and \"timeless.\" The biggest feature of my design is the layout of images. The layout that each piece of image finishes at a different point makes users scroll through the pages. Black, white, grey and gold match the keywords of the website. Keeping consistency in every page was the most difficult point of the project, because I tried to use various techniques to achieve the goal at first. I decided to focus on the four columns layout with randomness and removed some content which was not important. As a result, I kept consistency as well as achieved the goal of the website. In the front-end development, I made use of a Grid system.<p class=\"link\"><a href=\"https://ayatsubakino.com/webd100/finalassignment/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/web_tech1/tree/master/finalassignment\" target=\"blank\"> \>\> Sourse code</a><p>", images: ['sean-1.jpg', 'sean-2.jpg', 'sean-3.jpg'], tag: 'development'},
 'restaurant': {title: 'Restaurant Website', property: 'HTML<br>CSS, JavaScript',text: "This is the website for a restaurant. The target users are female customers, so I created the website to look elegant. I used image slideshows and videos to attract users.<p class=\"link\"><a href=\"https://ayatsubakino.com/webd100/assignment2/\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/web_tech1/tree/master/assignment2\" target=\"blank\"> \>\> Sourse code</a><p>" , images: ['i5KA4-o18XI'], tag: 'development'},
'merchandiseui': {title: 'Merchandise UI', property: 'JavaScript', text: "I worked on this UI as a group for 2 days. I was in charge of the confirmation page. <p class=\"link\"><a href=\"https://ayatsubakino.com/week8/merchandise.html\" target=\"blank\"> \>\> View the website</a>&nbsp;&nbsp;<a href=\"https://github.com/backy22/week8\" target=\"blank\"> \>\> Sourse Code</a></p>", images: ['tamgRTqgsDk'], tag: 'development'},
'myhumberredesign': {title: 'MyHumber App Redesign', property: 'InVision', text: "<h3>Problem</h3>The current MyHumber App is not helpful for students to do time management. There are a lot of services such as writing center, peer tutoring, international center and math center. But each center has each system to make an appointment and these diversified booking platforms cause confusion. <br><h3>Target</h3>International students in Humber College<br><h3>Goal</h3>To help international students to do time management.<br><br>After the research and ideation, I decided to focus on a booking system for college services. First image shows all kinds of solutions to help students to do time management. But for these reasons, the final mockup focuses on a booking system.<br><br>1. There are a lot of competitors of calendar and todo app.<br>2. The most valuable function for our target users, international students in Humber College, is a booking system because international students use a lot of services in addition to their regular classes. <br><br>I made a mockup using InVision.", images: ['llZyu1pKyCc'], tag: 'design'},
'identity': {title: 'Identity Design', property: 'Adobe Illustrator<br>Logo',text: "This project is connected to my next project. I created the logo for my fictional company that serves web design and web development services. I chose one of the options in the second image. Some options were associated with the meaning of \"tsubaki,\" which is camellia in Japanese. Some of them represent programming. The reasons why I chose the final logo are scalability and simplicity. Also, it works in black and white. Acme Gothic is used as the logo font, which gives a clean, advanced and professional impression. In terms of brand identity of the business card, envelope and letterhead, I tried to make them simple but unique and consistent.", images: ['identity-1.jpg', 'identity-2.jpg', 'identity-3.jpg'], tag: 'design'},
'tsubaki': {title: 'Design Agent Website', property: 'Moodboard<br>Paper prototyping<br>Mockup<br>Adobe Illustrator<br>Adobe Photoshop<br>Adobe XD<br>Responsive',text: "I added some keywords to the previous logo and identity design project. I created the moodboard with the keywords \"powerful,\" \"creative,\" \"unique,\" \"cheerful,\" and \"fashionable.\" I’m very satisfied with the combination of colours and fonts. Using a lot of yellow makes the website look cheerful along with the Active font. The first video shows the paper prototype. User testing using a paper prototype made the navigation clear. I made high fidelity mock-ups for mobile and desktop websites. You can see them in the third and fourth videos.", images: ['tsubaki-1.jpg', 'mKBNDYzUN9M', 'tsubaki-3.mp4', '5JyUjQvLiK8'], tag: 'design'},
'typography': {title: 'Typography', property: 'Typography<br>Adobe Illustrator',text: "I put three projects together using typography.The first one is to express the meaning of a word and its opposite using typographic contrasts. I chose \"unstable\" and \"stable.\" The second one is to arrange song lyrics using the typographic contrast with the principle of alignment and hierarchy. I chose \"Just The Way You Are\" by Bruno Mars. I balanced the size of fonts and chose the colour blue to highlight. <br>The final one is the typographic specimen poster promoting OPTIMA font. I did some research about the history, designers, features and companies who use OPTIMA and showed the results arranged with hierarchy. The type anatomy is my favourite part.",  images: ['typography-1.jpg', 'typography-2.jpg'], tag: 'design'},
'wario': {title: 'Wario Animation', property: 'Adobe After Effects<br>Adobe Photoshop<br>Adobe Premiere',text: "After preparing the action sequences for all actions of Wario, such as jump, power up, run, swim and climb, and the background stage using Photoshop. I created animation using After Effects and put sound effects using Premiere.", images: ['wario-1.jpg', 'Metc2PP5tMY'], tag: 'design'},
'twitter': {title: 'Motion Graphic of Twitter', property: 'Adobe After Effects<br>Adobe Illustrator',text: "I made a motion graphic of the actions below of an iPhone and the Twitter app.<br>1. Unlock the iPhone<br>2. Scroll up and down the control center<br>3. Slide the widget on the left page<br>4. Load the home screen of iPhone<br>5. Open Twitter<br>6. Scroll through the feed<br>7. Tap the button to tweet<br>8. Tweet<br>9. Show the tweet", images: ['twitter-1.mp4'], tag: 'design'},
'matrix': {title: 'Matrix', property: 'Adobe After Effects',text: "I used the character panel to create characters that rain down, ultimately spelling my name in Adobe After Effects.", images: ['XHbsLUddccE'], tag: 'design'},
'dessert': {title: 'Vector Matcha Parfait', property: 'Adobe Illustrator', text: "I translated a bitmap photo of a matcha parfait into a vector image without using the image trace function. A matcha parfait consists of matcha jelly, sponge cakes, cream, red beans, rice cakes, chocolate, macaron, ice cream, mint and the parfait glass. I repressed their texture, shadow and layers with accuracy by using various tools.", images: ['dessert-1.jpg'], tag: 'design'},           
  'package': {title: 'Package Design', property: 'Adobe Illustrator<br>Adobe Photoshop',text: "This is the package for a Nintendo Switch game cover for a new game titled 'Pixels vs Vectors.'", images: ['package-1.jpg'], tag: 'design'},
'retouch': {title: 'Photo Retouch', property: 'Adobe Photoshop',text: "I retouched the old image (the left image below) to the right one.", images: ['retouch-1.jpg'], tag: 'design'},
'albumcover': {title: 'Album Cover', property: 'Adobe Photoshop',text: "I designed two album covers for two different music genres using the same background image, title and band name. The genre of the first one is country pop music and the second one is healing music.", images: ['albumcover-1.jpg','albumcover-2.jpg'], tag: 'design'},
'framemotion': {title: 'Frame Motion', property: 'Adobe After Effects', text: "In this animation, an alphabet transforms to an animal using Adobe After Effects.", images: ['I-w3ahiE70w'], tag: 'design'},
'brandpackage': {title: 'Brand Package', property: 'Adobe After Effects', text: "I created a motion graphics package for a company called \"noela\", Japanese fashion brand. This package includes intro, lower third and bumper.", images: ['brandpackage-1.jpg', 'cqBVNsuuA5E'], tag: 'design'}
  //'portfolio': {title: 'Portfolio', property: 'illustrator',text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ['portfolio-1.mp4']},
}

// Make the each DOM of the project list
for (var i=0; i<Object.keys(projectData).length; i++){
  var projectKey = Object.keys(projectData)[i];
  if (projectData[projectKey]['tag'] == 'development'){
    $('.development').append('<div class="project"><a href="index.html#' + projectKey + '"><img src="img/' + projectKey + '-thumbnail.jpg" alt="thumbnail image"></a><div class="title">' + projectData[projectKey]['title'] + '</div></div>');
  }else{
    $('.design').append('<div class="project"><a href="index.html#' + projectKey + '"><img src="img/' + projectKey + '-thumbnail.jpg" alt="thumbnail image"></a><div class="title">' + projectData[projectKey]['title'] + '</div></div>');
  }
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
      $('.detail-images').append('<img class="demo" src="img/' + projectData[projectKey]['images'][i] + '" alt="image of project">');
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

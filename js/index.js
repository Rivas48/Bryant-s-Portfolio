function onLoadPortfolio(){
    $('#cont-home').show();
    $('#cont-resume').hide();
    $('#cont-portfolio').hide();
    $('#cont-contact').hide();
    $('#cont-feedback').hide();
}

function navRow() {
  if ($(window).scrollTop() >= 0) {
      $("#image").animate({"left": '0px'}, 700);
          $("#name").animate({"left": '0px'}, 700);
          $("#job").animate({"left": '0px'}, 700);  
          $("#nav").animate({"left": '0px'}, 700);  
      }
}

function infoRow() {
    if ($(window).scrollTop() >= 228) {
        $("div[id^='right-1']").animate({"left": '0px'}, 700);
        $("div[id^='left-1']").animate({"left": '0px'}, 700);  
    }
}

function employmentRow(){
    if ($(window).scrollTop() >= 350) {
        $("div[id^='right-2']").animate({"left": '0px'}, 700);
        $("div[id^='left-2']").animate({"left": '0px'}, 700);  
    }
}

function footerRow(){
    if($(window).scrollTop() >= 380){
       $("#footer").animate({"left": '0px'}, 700);
    }
}

function homeClick(){
    $('#cont-home').show();
    $('#cont-resume').hide();
    $('#resume-slide').hide();
    $('#cont-portfolio').hide();
    $('#portfolio-slide').hide();
    $('#cont-contact').hide();
    $('#contact-slide').hide();
}

function resumeClick(){
   $('#cont-home').hide();
   $('#cont-resume').show();
   $('#resume-slide').slideDown('slow');
   $('#resume-fade-in').fadeIn(2000);
   $('#resume-slide-right').slideDown(1000);
   $('#cont-portfolio').hide();
   $('#portfolio-slide').hide();
   $('#portfolio-fade-in').hide();
   $('#portfolio-slide-right').hide();
   $('#cont-contact').hide();
   $('#contact-slide').hide();
   $('#contact-fade-in').hide();
   $('#contact-slide-right').hide();
}

function portfolioClick(){
    $('#cont-home').hide();
    $('#cont-resume').hide();
    $('#resume-slide').hide();
    $('#resume-fade-in').hide();
    $('#resume-slide-right').hide();
    $('#cont-portfolio').show();
    $('#portfolio-slide').slideDown('slow');
    $('#portfolio-fade-in').fadeIn(2000);
    $('#portfolio-slide-right').slideDown(1000);
    $('#cont-contact').hide();
    $('#contact-slide').hide();
    $('#contact-slide').hide();
    $('#contact-fade-in').hide();
    $('#contact-slide-right').hide();
}

function contactClick(){
    $('#cont-home').hide();
    $('#cont-resume').hide();
    $('#resume-slide').hide();
    $('#resume-fade-in').hide();
    $('#resume-slide-right').hide();
    $('#cont-portfolio').hide();
    $('#portfolio-slide').hide();
    $('#portfolio-slide').hide();
    $('#portfolio-fade-in').hide();
    $('#portfolio-slide-right').hide();
    $('#cont-contact').show();
    $('#contact-slide').slideDown('slow');
    $('#contact-fade-in').fadeIn(2000);
    $('#contact-slide-right').slideDown(1000);
}

$(document).ready(onLoadPortfolio);
setInterval(infoRow,250);
setInterval(navRow,250)
setInterval(employmentRow,250);
setInterval(footerRow,250);
setInterval(footerRow, 250);
$('#home').click(homeClick);
$('#resume').click(resumeClick);
$('#portfolio').click(portfolioClick);
$('#contact').click(contactClick);

const allWebsites = document.querySelector("#query").querySelectorAll("div[data='websites']");
const allProjects = document.querySelector("#query").querySelectorAll("div");
const allSmallProjects = document.querySelector("#query").querySelectorAll("div[data='project']");
const allMockups = document.querySelector("#query").querySelectorAll("div[data='mockups']");

function getWebsites(event){
allProjects.forEach(function(project)
{
    $('.project').fadeOut(1000);
})
allWebsites.forEach(function(website)
{
    $('.websites').fadeIn(1500)
})
}

function getAll(event){
allProjects.forEach(function(project)
{
    $('.project').fadeIn(1500);
})
}
function getProjects(event){
allProjects.forEach(function(project)
{
    $('.project').fadeOut(1000);
})
allSmallProjects.forEach(function(website)
{
    $('.proj').fadeIn(1500);
})
}

function getMockups(event){
allProjects.forEach(function(project)
{
    $('.project').fadeOut(1000);
})
allMockups.forEach(function(website)
{
    $('.mockups').fadeIn(1500);
})
}

function animatePercentCircle(item,index){
    if (index == 0){
    item.animate(0.60);
  }else if(index == 1){
    item.animate(0.85);
  }else if(index == 2){
    item.animate(0.93);
  }
  item.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  item.text.style.fontSize = '2rem';
}

var html = new ProgressBar.Circle('#html', {
  color: 'rgb(255,255,255)',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: 'rgb(81,218,230)', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});


var circle2 = new ProgressBar.Circle('#css', {
  color: 'rgb(255,255,255)',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: 'rgb(228,189,44)', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});


var circle3 = new ProgressBar.Circle('#javascript', {
  color: 'rgb(255,255,255)',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: 'rgb(237,155,138)', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

var progressCircle = [html,circle2,circle3];
progressCircle.map(function(circle,index){
  animatePercentCircle(circle,index);
})

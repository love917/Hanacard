//slick
$(document).ready(function(){
    $('.eb_slider_list').slick({
      arrows:false,//괄호나 중괄호 안에 세미콜론 넣으면 x(값이 있을 땐 넣으면 안됨)
      dots:true, //false-존재x / ture-존재하게 함
      autoplay:true,
      pauseOnHover:false, //slick-마우스를 올리면 멈추는걸 방지함
      fade:true

    });
  });
  
// ⏸️정지/▶️재생 버튼
// 버튼.click(어떤 일); --> 버튼을 클릭하면 어떤 일이 일어난다.
// 버튼.click(function(){}); --> 그 어떤 일은 함수 function(){}
// .hasClass('active') --> 버튼이 active라는 class를 가지고 있는 것인가?(질문)
// 가지고 있다면 true, 가지고 있지 않다면 false가 떠야함 

$('.event_box2 .page_act .btn_stop').click(function(e){
  e.preventDefault(); //위로 튕겨가는 현상이 없어짐⬜
  if($('.event_box2 .page_act').hasClass("on")){
    $('.event_box2 .page_act').removeClass("on") 
    $('.eb_slider_list').slick('slickPause');
    //--> 만약 on이라는 클래스 있으면 지워라
  }
})

$('.event_box2 .page_act .btn_play').click(function(e){
  e.preventDefault();
  if(!$('.event_box2 .page_act').hasClass('on')){
//! 느낌표--> not,부정을 의미.-->아닐 떄 true
//즉, on을 가지고 있지 않아야 true
  $('.event_box2 .page_act').addClass('on')//on추가
  $('.eb_slider_list').slick('slickPlay');
  }
})

//box_slider2
let card=$('.card')/* 🟨 */
  $('.card').slick({
      arrows:false,
      dots:true,
      autoplay:true,
      pauseOnHover:false,
      fade:true
  });
$('.event_box3 .page_act .btn_stop').click(function(e){
  e.preventDefault();// ⬜
  if($('.event_box3 .page_act').hasClass('on')){
    $('.event_box3 .page_act').removeClass('on');
  card.slick('slickPause');// card : 변수에 넣어서 사용했다면 여기서도 변수를 그대로 사용해야함🟨
  }
  // 클래스를 가지고 있으면 true/아니면 false
})

$('.event_box3 .page_act .btn_play').click(function(e){
  e.preventDefault();
  if(!$('.event_box3 .page_act').hasClass('on')){
    //(느낌표가 있어서 부정임)on을 가지고있지 않아야 true임-->on을 가지고 있지 않니?
      $('.event_box3 .page_act').addClass('on')
      // Manually refresh positioning of slick
      $('.card').slick('slickPlay');
  }
  //내장함수 --> 함수를 javaScript나 jQurey가 가지고 있어서 
  //우리는 함수를 직접 만드는 것이 아니라 이미 있는 함수를 가져다 쓰는것
})

/* life 배경 */
let tab = $('.life_menu ul li');
let style = $('.life_style ul li')

//hover = mouseover
//tab메뉴에 마우스를 올리면 어떤일이 일어난다.
tab.mouseover(function(){
  let target = $(this); //버튼 4개중에서 사용자가 마우스를 올린 버튼 그것(this)=>target
  let index = target.index()//버튼 그것(this)의 index번호를 추출함.
  //console.log(index)
  //css형식으로 컨트롤할 수 있다.
  style.css({opacity:0})//1)모두 안보이게 하기
  style.eq(index).css({opacity:1})//2)menu의 li(용자가 마우스를 올린 버튼)의 index번호에 해당하는 .life_style ul li 요소를 보이게 한다. / eq = eq balance

})


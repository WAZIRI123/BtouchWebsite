const menu=document.querySelector('#mobile_menu');
const menulinks=document.querySelector('.navbar_menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar_container').addClass("sticky");
            $('.navbar_link').addClass("stick");
        } else{
           $('.navbar_container').removeClass("sticky");
           $('.navbar_link').removeClass("stick");
        }
 
    if(this.scrollY>100){
        $('.ScrollUp_arrow').addClass("show");
    }else{
        $('.ScrollUp_arrow').removeClass("show");
    }
});
});
$('.ScrollUp_arrow').click(function(){
$('html').animate({
scrollTop:0
});
});
 
var typed= new Typed(".typing", {
strings:["YouTube","Developer","Blogger","Designer","Freelancer"],
typeSpeed:100,
backSpeed:60,
loop:true
});
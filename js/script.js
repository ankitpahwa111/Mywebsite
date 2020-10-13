window.onload=function(){
    new Typed('#typed',{
        strings:["Ankit Pahwa","Full Stack Developer","Data Structures And Algo Lover","Football Fanatic","Ironman😅"],
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000,
        loop:true,
        smartBackspace:true,
        callback:function(){}
    })


    preloaderFadeOutTime = 500;
        function hidePreloader() {
        $('.spinner-wrapper').fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();


}
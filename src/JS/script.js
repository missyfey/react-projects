import $ from 'jquery/dist/jquery';

$(function() {
    $(window).on('load' , function(){
        document.querySelectorAll('.linksContainer a')
        .forEach(link => link.addEventListener("click", function(){
            document.querySelector('.siteNavbar').classList.remove('show');
           
            // if(link.pathname === '/'){
            //     document.getElementById('scrollDown').addEventListener('click',arrow , false);  
            // }
        }));

        // function arrow(){                      
        //     // $(document.documentElement) = $('html,body')
        //     // Homepage scrollDown arrow
        //     let homeTop = document.getElementById('homeTop').offsetTop;
        //         if(window.innerWidth > 992){
        //             //on large screen
        //             $('html,body').animate(
        //                 {
        //                 scrollTop: homeTop - 87
        //                 },
        //                 500
        //             );
        //         }else{
        //             //on small screen
        //             $('html,body').animate(
        //                 {
        //                 scrollTop: homeTop - 125
        //                 },
        //                 500
        //             );
        //         } 
        // }
        
    })
    
  });
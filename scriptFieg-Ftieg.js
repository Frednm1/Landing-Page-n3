        $(function(){
            $("#hamburger").click(function(){
                var menu = $(".menu-mobile-display");
                var display = menu.css('display')
                if(display == "none"){
                    document.getElementById('hamburger').src = "assets/close.png"
                    menu.fadeIn();
                }else{
                    document.getElementById('hamburger').src = "assets/hamburger.png"
                    menu.fadeOut();
                }
                
            })
        });

        
        



        
               
        
            

         
                
                
                
                
            

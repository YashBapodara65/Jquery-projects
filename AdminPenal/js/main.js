$(document).ready(function(){
        $(".mainlist1").click(function(){
            $(".innerul1").slideToggle();
            $(".innerul2").slideUp();
            $(".innerul3").slideUp();
            $(".innerul4").slideUp();
            $(".innerul5").slideUp();
            $(".innerul6").slideUp();
            $(".innerul7").slideUp();
            $(".ra1").toggleClass("right-arr");
            $(".ra2").removeClass("right-arr");
            $(".ra3").removeClass("right-arr");
            $(".ra4").removeClass("right-arr");
            $(".ra5").removeClass("right-arr");
            $(".ra6").removeClass("right-arr");
            $(".ra7").removeClass("right-arr");
            $(".mainlist1").toggleClass("lst-col");
            $(".mainlist2").removeClass("lst-col");
            $(".mainlist3").removeClass("lst-col");
            $(".mainlist4").removeClass("lst-col");
            $(".mainlist5").removeClass("lst-col");
            $(".mainlist6").removeClass("lst-col");
            $(".mainlist7").removeClass("lst-col");
        });
        $(".mainlist2").click(function(){
            $(".innerul2").slideToggle();
            $(".innerul1").slideUp();
            $(".innerul3").slideUp();
            $(".innerul4").slideUp();
            $(".innerul5").slideUp();
            $(".innerul6").slideUp();
            $(".innerul7").slideUp();
            $(".ra2").toggleClass("right-arr");
            $(".ra1").removeClass("right-arr");
            $(".ra3").removeClass("right-arr");
            $(".ra4").removeClass("right-arr");
            $(".ra5").removeClass("right-arr");
            $(".ra6").removeClass("right-arr");
            $(".ra7").removeClass("right-arr");
            $(".mainlist2").toggleClass("lst-col");
            $(".mainlist1").removeClass("lst-col");
            $(".mainlist3").removeClass("lst-col");
            $(".mainlist4").removeClass("lst-col");
            $(".mainlist5").removeClass("lst-col");
            $(".mainlist6").removeClass("lst-col");
            $(".mainlist7").removeClass("lst-col");
        });
        $(".mainlist3").click(function(){
            $(".innerul3").slideToggle();
            $(".innerul2").slideUp();
            $(".innerul1").slideUp();
            $(".innerul4").slideUp();
            $(".innerul5").slideUp();
            $(".innerul6").slideUp();
            $(".innerul7").slideUp();
            $(".ra3").toggleClass("right-arr");
            $(".ra1").removeClass("right-arr");
            $(".ra2").removeClass("right-arr");
            $(".ra4").removeClass("right-arr");
            $(".ra5").removeClass("right-arr");
            $(".ra6").removeClass("right-arr");
            $(".ra7").removeClass("right-arr");
            $(".mainlist3").toggleClass("lst-col");
            $(".mainlist2").removeClass("lst-col");
            $(".mainlist1").removeClass("lst-col");
            $(".mainlist4").removeClass("lst-col");
            $(".mainlist5").removeClass("lst-col");
            $(".mainlist6").removeClass("lst-col");
            $(".mainlist7").removeClass("lst-col");
        });
        $(".mainlist4").click(function(){
            $(".innerul4").slideToggle();
            $(".innerul2").slideUp();
            $(".innerul3").slideUp();
            $(".innerul1").slideUp();
            $(".innerul5").slideUp();
            $(".innerul6").slideUp();
            $(".innerul7").slideUp();
            $(".ra4").toggleClass("right-arr");
            $(".ra1").removeClass("right-arr");
            $(".ra2").removeClass("right-arr");
            $(".ra3").removeClass("right-arr");
            $(".ra5").removeClass("right-arr");
            $(".ra6").removeClass("right-arr");
            $(".ra7").removeClass("right-arr");
            $(".mainlist4").toggleClass("lst-col");
            $(".mainlist2").removeClass("lst-col");
            $(".mainlist3").removeClass("lst-col");
            $(".mainlist1").removeClass("lst-col");
            $(".mainlist5").removeClass("lst-col");
            $(".mainlist6").removeClass("lst-col");
            $(".mainlist7").removeClass("lst-col");
        });
        $(".mainlist5").click(function(){
            $(".innerul5").slideToggle();
            $(".innerul2").slideUp();
            $(".innerul3").slideUp();
            $(".innerul4").slideUp();
            $(".innerul1").slideUp();
            $(".innerul6").slideUp();
            $(".innerul7").slideUp();
            $(".ra5").toggleClass("right-arr");
            $(".ra1").removeClass("right-arr");
            $(".ra2").removeClass("right-arr");
            $(".ra3").removeClass("right-arr");
            $(".ra4").removeClass("right-arr");
            $(".ra6").removeClass("right-arr");
            $(".ra7").removeClass("right-arr");
            $(".mainlist5").toggleClass("lst-col");
            $(".mainlist2").removeClass("lst-col");
            $(".mainlist3").removeClass("lst-col");
            $(".mainlist4").removeClass("lst-col");
            $(".mainlist1").removeClass("lst-col");
            $(".mainlist6").removeClass("lst-col");
            $(".mainlist7").removeClass("lst-col");
        });
        $(".mainlist6").click(function(){
            $(".innerul6").slideToggle();
            $(".innerul2").slideUp();
            $(".innerul3").slideUp();
            $(".innerul4").slideUp();
            $(".innerul5").slideUp();
            $(".innerul1").slideUp();
            $(".innerul7").slideUp();
            $(".ra6").toggleClass("right-arr");
            $(".ra1").removeClass("right-arr");
            $(".ra2").removeClass("right-arr");
            $(".ra3").removeClass("right-arr");
            $(".ra4").removeClass("right-arr");
            $(".ra5").removeClass("right-arr");
            $(".ra7").removeClass("right-arr");
            $(".mainlist6").toggleClass("lst-col");
            $(".mainlist2").removeClass("lst-col");
            $(".mainlist3").removeClass("lst-col");
            $(".mainlist4").removeClass("lst-col");
            $(".mainlist5").removeClass("lst-col");
            $(".mainlist1").removeClass("lst-col");
            $(".mainlist7").removeClass("lst-col");
        });
        $(".mainlist7").click(function(){
            $(".innerul7").slideToggle();
            $(".innerul2").slideUp();
            $(".innerul3").slideUp();
            $(".innerul4").slideUp();
            $(".innerul5").slideUp();
            $(".innerul6").slideUp();
            $(".innerul1").slideUp();
            $(".ra7").toggleClass("right-arr");
            $(".ra1").removeClass("right-arr");
            $(".ra2").removeClass("right-arr");
            $(".ra3").removeClass("right-arr");
            $(".ra4").removeClass("right-arr");
            $(".ra5").removeClass("right-arr");
            $(".ra6").removeClass("right-arr");
            $(".mainlist7").toggleClass("lst-col");
            $(".mainlist2").removeClass("lst-col");
            $(".mainlist3").removeClass("lst-col");
            $(".mainlist4").removeClass("lst-col");
            $(".mainlist5").removeClass("lst-col");
            $(".mainlist6").removeClass("lst-col");
            $(".mainlist1").removeClass("lst-col");
        });
        
        $(".close-open").click(function(){
            $("aside").toggleClass("aside-close-open");
            $("header").toggleClass("headresp");
            $(".mh").toggleClass("menu-head");
            $(".mainli").toggleClass("box");
            $(".fa-angle-down").toggleClass("hidera");
            $("#logo1").toggleClass("l1");
            $(".logo").toggleClass("l2");
            $(".cls-btn").toggleClass("close-btns");
            $("aside").mouseenter(function(){
                $("aside").addClass("mouseeffect");
                $(".mh").addClass("menu-head1");
                $(".ra1").addClass("mhra");
                $(".ra2").addClass("mhra");
                $(".ra3").addClass("mhra");
                $(".ra4").addClass("mhra");
                $(".ra5").addClass("mhra");
                $(".ra6").addClass("mhra");
                $(".ra7").addClass("mhra");
            });
            $("aside").mouseleave(function(){
                $("aside").removeClass("mouseeffect");
                $(".mh").removeClass("menu-head1");
                $(".ra1").removeClass("mhra");
                $(".ra2").removeClass("mhra");
                $(".ra3").removeClass("mhra");
                $(".ra4").removeClass("mhra");
                $(".ra5").removeClass("mhra");
                $(".ra6").removeClass("mhra");
                $(".ra7").removeClass("mhra");
            });
            $(".s1").toggleClass("ms1");
            $(".s2").toggleClass("ms2");
            $(".s3").toggleClass("ms3");
            $("footer").toggleClass("foot");
        });
    });
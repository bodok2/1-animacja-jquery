

// $(document).ready(function(){
//        $(this).on('click', 'button.wth', function(){
//            $('.box').animate({
//                left: '250px',
//                height: '150px',
//                width: '150px'
//            });
//        });
//    });

$(document).ready(function(){
    $("#btn").click(function(){
        $(".box").animate({left: "100px", height: "100px", width: "100px"}, "3000");
        
//        $(".box").css("background-color", "green");
        $(".box").css({"background-color": "blue", "display": "block"});
        $("h2").show();
    });

});


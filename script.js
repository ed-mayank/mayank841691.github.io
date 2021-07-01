$(document).ready(function(){
    $("#change").click(function(){
        $("#profile_pics").slideToggle();
        $("#profile_pics").css("display","inline-flex");
    });

    $("#ext1,#ext2").click(function(){
        $(this).animate({marginLeft: '20%'},"slow");
        $(this).animate({height:'400px', width: '400px'},"slow");
    });

    $("a").hover(function(){
        $(this).css("backgroundColor","#95d5b2");
    },
    function(){
        $(this).css("backgroundColor","white");    
    });

});

function changeProfile(pic){
    var profile;
    if(pic == '1')
    {
        profile="images/pic1.jpeg"
    }else if(pic == '2'){
        profile = "images/pic2.jpeg"
    }else if(pic == '3'){
        profile = "images/image.jpeg"
    }else{
        profile="images/profile.jpeg"
    };

    document.getElementById("myimg").src = profile;
}

var i=1;
function changePicture(){
    var picture;
    if(i == 0){
        picture = "images/img1.jpeg";
        i = (i + 1)%5;
    }else if(i == 1){
        picture = "images/img2.jpeg";
        i = (i + 1)%5;
    }else if(i == 2){
        picture = "images/img3.jpeg";
        i = (i + 1)%5;
    }else if(i == 3){
        picture = "images/img4.jpeg";
        i = (i + 1)%5;
    }else{
        picture = "images/img5.jpeg";
        i = (i + 1)%5;
    }

    document.getElementById("pics").src = picture;

}
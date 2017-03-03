$(document).ready(function () {
    var height1 = $('.main-content').height()
    var height2 = $('body').height()

    if (height1 > height2) {
        $('.sidebar1').height(height1)
    } else {
        $('.sidebar1').height(height2)
    }

    $(document).ajaxStart(function(){
      $("#avatar").attr("src","src/progress.gif");
    }).ajaxStop(function(){
      console.log("Ajax Stopped.")
    }).ajaxSuccess(function(){
      console.log("Ajax Success")
    }).ajaxComplete(function(){
      console.log("Ajax Completed")
    })

    $("#get-data").on("click",function(){
      //var username = $("#username").val();
      //console.log(username);
      $.ajax({
        url:"https://public-api.wordpress.com/rest/v1/sites/25262138/posts",
        success: function(data){
          console.log(data)
          $("#avatar").attr("src",data.posts[0].author.avatar_URL);
          $("#heading").text(data.posts[0].title);
          $("#info").attr("href",data.posts[0].URL);
          $("#get-data").text(data.posts[0].author.name);
          $("#info2").text(data.posts[0].content);
        },
        error: function(){
          $("#avatar").attr("src","src/no-user.png");
          $("#info").text("I am no one");
        }
      })
    })

});

$(function(){
	$(".link-item").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
      });
       
});

function viewPassword() {
  let x = document.getElementById("password-field");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
steroids.view.setBackgroundColor("#ecf0f1");
var tutorial = new steroids.views.WebView("tutorial.html");
var sign = new steroids.views.WebView({
    location: "sign.html",
    id: "sign"
});
function signup(){
steroids.modal.show( {
  view: sign,
  keepLoading: false,
  navigationBar: false,
  disableAnimation: false,
  waitTransitionEnd: true
  });
  };
function login(){
document.getElementById("index").style.padding="5% 0% 0% 0%";
document.getElementById("log").innerHTML='<div class="list"><label class="item item-input item-floating-label"><span class="input-label">Email</span><input type="text" placeholder="Email"></label><label class="item item-input item-floating-label"><span class="input-label">Password</span><input type="password" placeholder="Password"></label></div>';
document.getElementById("loginbtn").innerHTML='<button onclick="loginbutton()" class="button button-block button-outline button-calm">Log In</button>';
}
function loginbutton(){
steroids.modal.show( {
  view: tutorial,
  keepLoading: true,
  navigationBar: true,
  disableAnimation: false,
  waitTransitionEnd: true
  });
};

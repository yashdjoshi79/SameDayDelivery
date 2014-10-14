steroids.statusBar.hide();
steroids.view.setBackgroundColor("#ecf0f1");
var tutorial = new steroids.views.WebView("tutorial.html");
function signup(){
steroids.modal.hide();
};
function login(){
document.getElementById("index").style.padding="5% 0% 0% 0%";
document.getElementById("log").innerHTML='<div class="list"><label class="item item-input item-floating-label"><span class="input-label">User Name</span><input type="text" placeholder="Username"></label><label class="item item-input item-floating-label"><span class="input-label">Password</span><input type="password" placeholder="Password"></label></div>';
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
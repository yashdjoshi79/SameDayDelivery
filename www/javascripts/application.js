//...........NavBar.................
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
};
if( isMobile.Android()){
steroids.view.navigationBar.show("Same Day Delivery");
}else{
// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("Same Day Delivery");
// three Lines Button
var threeLines = new steroids.buttons.NavigationBarButton();
threeLines.imagePath = "/icons/lines.png";
var anim = new steroids.Animation("slideFromRight");
var left = new steroids.views.WebView({location: "left.html", id: "leftDrawer"})
threeLines.onTap = function(){
  steroids.modal.show(left);
};

// Car button
var deliveryMode = new steroids.buttons.NavigationBarButton();
deliveryMode.imagePath = "/icons/car63.png";
var driver = new steroids.views.WebView("Driver.html");
deliveryMode.onTap = function(){
steroids.layers.push( {
    view: driver,
    animation: anim
  } );
};

// Initially display the login button
steroids.view.navigationBar.update({
  buttons: {
    right: [deliveryMode],
	left: [threeLines]
  }
});
}
// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#ecf0f1");


//preloading Sub Menus
var clothes = new steroids.views.WebView({location: "Clothes.html", id: "clothes"});
var Alcohol = new steroids.views.WebView({location: "Alcohol.html", id: "alcohol"});
var Toiletries = new steroids.views.WebView({location: "Toiletries.html", id: "toiletries"});
var Stationary = new steroids.views.WebView({location: "Stationary.html", id: "stationary"});
var Gaming = new steroids.views.WebView({location: "Gaming.html", id: "gaming"});
var Groceries = new steroids.views.WebView({location: "Groceries.html", id: "groceries"});
var Flowers = new steroids.views.WebView({location: "Flowers.html", id: "flowers"});
var Electronics = new steroids.views.WebView({location: "Electronics.html", id: "electronics"});
var Sports = new steroids.views.WebView({location: "Sports.html", id: "sports"});

function mainMenuClick(elem){
if(elem.id=="Clothes"){
steroids.layers.push(clothes);
}else if(elem.id=="Toiletries"){
steroids.layers.push(Toiletries);
}else if(elem.id=="Stationary"){
steroids.layers.push(Stationary);
}else if(elem.id=="Gaming"){
steroids.layers.push(Gaming);
}else if(elem.id=="Groceries"){
steroids.layers.push(Groceries);
}else if(elem.id=="Flowers"){
steroids.layers.push(Flowers);
}else if(elem.id=="Electronics"){
steroids.layers.push(Electronics);
}else if(elem.id=="Sports"){
steroids.layers.push(Sports);
}else if(elem.id=="Alcohol"){
steroids.layers.push(Alcohol);
}
}


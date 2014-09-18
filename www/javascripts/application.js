//...........NavBar.................
// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("Same Day Delivery");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#003153");

var loginText = null;

document.addEventListener("DOMContentLoaded", function() {
  loginText = document.querySelector("#login-text");
});

// three Lines Button
var threeLines = new steroids.buttons.NavigationBarButton();
threeLines.imagePath = "/icons/lines.png";
threeLines.onTap = function(){
window.open("/left.html");
steroids.view.navigationBar.hide();
};

var deliveryMode = new steroids.buttons.NavigationBarButton();
deliveryMode.imagePath = "/icons/pill@2x.png";
// Initially display the login button
steroids.view.navigationBar.setButtons({
  left: [threeLines],
  right: [deliveryMode]
});
//............Profile.........

//............Drawers..........
/*var leftDrawerView = new steroids.views.WebView({location:"/left.html", id:"leftDrawer"})
var indexView = new steroids.views.WebView({location:"/tutorial.html", id:"http://localhost/tutorial.html"}) 

window.ViewController = {
    leftDrawer: leftDrawerView,
    index: indexView,
}
leftDrawerView.widthOfDrawerInPixels = 200;

function updateDrawers() {
	steroids.drawers.update({
		left: ViewController.leftDrawer,
		options: {
			showShadow: true,
			stretchDrawer: true,
			animation: steroids.drawers.defaultAnimations.SWINGING_DOOR,
    }
	});
}

function closeDrawerAndShowView(view) {
    steroids.drawers.hide({
        center: ViewController[view]
    });
}

function showDrawer(edge) {
    steroids.drawers.show({
        edge: edge
    })
}*/
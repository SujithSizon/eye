<h1>eye</h1>
classical eye following mouse webpage layout

![Alt Text](https://github.com/SujithSizon/eye/raw/master/screensht.gif)

<h3>Quick steal: Javascript: eyefollow()</h3>
```javascript
function eyefollow() {
	var tooltipSpan = document.getElementById('eyes');
	window.onmousemove = function (e) {
    var x = screen_drag_offset*(e.clientX), 
    y = screen_drag_offset*(e.clientY);
    tooltipSpan.style.top = (y + 484) + 'px';
    tooltipSpan.style.left = (x + 448) + 'px';
	}	
}
```
where var "screen_drag_offset" decides the drag factor for the eyeballs to prevent overcrossing layers.

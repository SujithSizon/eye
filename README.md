<h1>eye</h1>
classical eye following mouse webpage layout

<p>
  <img src="screensht1.gif" width="400"/>
</p>
<h3>Quick steal: Javascript: eyefollow()</h3>
   Credits: <a href="http://stackoverflow.com/users/5168153/alexis">Alexis</a>

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


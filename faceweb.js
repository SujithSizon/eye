function move(){
	var tooltipSpan = document.getElementById('eyes');
	window.onmousemove = function (e) {
    var x = 0.01*(e.clientX), y = 0.01*(e.clientY);
    tooltipSpan.style.top = (y + 484) + 'px';
    tooltipSpan.style.left = (x + 448) + 'px';
	}	
}
window.onload=move; 
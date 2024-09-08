
		const loading = document.getElementById('loading');
		const cursorRiv = document.getElementById('com');

	const moveCursor = (e) => {
			const { pageX, pageY } = e;
			const vwCalc = (6 * window.innerWidth) / 100;
			cursorRiv.style.transform = `translate3d(${(pageX - vwCalc)}px, ${(pageY - (vwCalc))}px, 0)`;

		}
	function detectBlock(){
		if (loading.matches(':hover')) {
				cursorRiv.style.display = "block";
			} else {
				cursorRiv.style.display = "none";
			}
	}
	window.addEventListener('mousemove',detectBlock);
	loading.addEventListener('mousemove', moveCursor);

const themes = document.querySelector('.themes__check')
const cssFile = document.getElementsByTagName('link')

themes.addEventListener('click', () => {
	for (let el of cssFile) {
		if (el.getAttribute('rel') == 'stylesheet') {
			if (themes.checked) {
				el.setAttribute('href', './css/main-light.css')
			} else {
				el.setAttribute('href', './css/main.css')
			}
		}
	}
	themesChange()
})

function themesChange() {
	if (themes.checked) {
		// Светлая тема
		for (let elem of document.getElementsByClassName('field')) {
			elem.style.backgroundImage = 'none'
		}

		document
			.querySelector('.themes__img')
			.setAttribute('src', './img/light__themes.png')
	} else {
		// Тёмная тема
		for (let elem of document.getElementsByClassName('field')) {
			elem.style.backgroundImage =
				'radial-gradient(circle, rgba(19, 128, 206, 0.21) 0%, #0a0d10 75%)'
		}

		document
			.querySelector('.themes__img')
			.setAttribute('src', './img/dark__themes.png')
	}
}

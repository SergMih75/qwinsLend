const themes = document.querySelector('.themes__check')

themes.addEventListener('click', () => {
	themesChange()
})

function themesChange() {
	if (themes.checked) {
		// Установка светлой темы
		for (let elem of document.getElementsByTagName('body')) {
			elem.classList.add('bg-light')
		}
		for (let elem of document.getElementsByTagName('a')) {
			elem.style.color = '#0a0d10'
		}
		for (let elem of document.getElementsByTagName('h1')) {
			elem.style.color = '#0a0d10'
		}
		for (let elem of document.getElementsByTagName('h2')) {
			elem.style.color = '#0a0d10'
		}
		for (let elem of document.getElementsByTagName('p')) {
			elem.style.color = '#0a0d10'
		}

		for (let elem of document.getElementsByTagName('div')) {
			if (elem.hasAttribute('themes-bg')) {
				elem.style.backgroundColor = '#e3e7eaa1'
			}
		}

		for (let elem of document.getElementsByClassName('field')) {
			elem.style.backgroundImage = 'none'
		}

		document
			.querySelector('.themes__img')
			.setAttribute('src', './img/light__themes.png')
		document.querySelector('.lang').style.background = '#fff'
	} else {
		// Установка тёмной темы
		for (let elem of document.getElementsByTagName('body')) {
			elem.classList.remove('bg-light')
		}
		for (let elem of document.getElementsByTagName('a')) {
			elem.style.color = '#fff'
		}
		for (let elem of document.getElementsByTagName('h1')) {
			elem.style.color = '#fff'
		}
		for (let elem of document.getElementsByTagName('h2')) {
			elem.style.color = '#fff'
		}
		for (let elem of document.getElementsByTagName('p')) {
			elem.style.color = '#fff'
		}

		for (let elem of document.getElementsByTagName('div')) {
			if (elem.hasAttribute('themes-bg')) {
				elem.style.backgroundColor = '#0d1419'
			}
		}

		for (let elem of document.getElementsByClassName('field')) {
			elem.style.backgroundImage =
				'radial-gradient(circle, rgba(19, 128, 206, 0.21) 0%, #0a0d10 75%)'
		}

		document
			.querySelector('.themes__img')
			.setAttribute('src', './img/dark__themes.png')
		document.querySelector('.lang').style.background = '#0a0d10'
	}
}

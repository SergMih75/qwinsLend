const lang = document.querySelector('.lang__check')

lang.addEventListener('click', () => {
	langCheng()
})

function langCheng() {
	if (lang.checked) {
		document
			.querySelector('.lang__img')
			.setAttribute('src', './img/eng__lang.png')
	} else {
		document
			.querySelector('.lang__img')
			.setAttribute('src', './img/ru__lang.png')
	}
}

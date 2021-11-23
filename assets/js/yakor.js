document.querySelectorAll('a.yakor').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementsById(href);

        const top0ffset = 100;
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - top0ffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})
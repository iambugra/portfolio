console.log('Siuuuuuu')

let basePath = "/static/css/"
let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode=='light'){
        document.getElementById('theme-style').href = basePath + 'default.css'
    }

    if (mode=='blue'){
        document.getElementById('theme-style').href = basePath + 'blue.css'
    }

    if (mode=='purple'){
        document.getElementById('theme-style').href = basePath + 'purple.css'
    }

    if (mode=='green'){
        document.getElementById('theme-style').href = basePath + 'green.css'
    }

    localStorage.setItem('theme', mode)
}
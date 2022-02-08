const select = document.querySelector('select')

function updateTheme(){
    const themeChoice = select.value
   
    themeChoice === 'black' ? updateThemeColor('white', 'black') : 
        updateThemeColor('black', 'white')
}


function updateThemeColor(textColor, backgroundColor){
    document.body.style.color = textColor
    document.body.style.backgroundColor = backgroundColor
}



select.addEventListener('change', updateTheme)
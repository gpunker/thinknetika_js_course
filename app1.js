function dataProtectHandler(event) {
    event.preventDefault()

    switch(event.type) {
        case 'copy':
            alert('А-тя-тя, нельзя копировать')
            break
        case 'cut':
            alert('А-тя-тя, нельзя вырезать')
            break
        case 'contextmenu':
            alert('А-тя-тя, нельзя вызывать контекстное меню')
            break
    }
}

function openConsoleHandler(event) {
    const isF12 = event.key === 'F12'
    const isCtrlShiftI = event.key === 'I' && event.ctrlKey && event.shiftKey
    const isCtrlShiftC = event.key === 'C' && event.ctrlKey && event.shiftKey

    if (isF12 || isCtrlShiftI || isCtrlShiftC) {
        event.preventDefault()
        alert('А-тя-тя, нельзя вызывать консоль разработчика')
    }
}

document.addEventListener('copy', dataProtectHandler)
document.addEventListener('cut', dataProtectHandler)
document.addEventListener('contextmenu', dataProtectHandler)
document.addEventListener('keydown', openConsoleHandler)
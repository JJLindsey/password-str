const password = document.getElementById('password');
const background = document.getElementById('background')

//as password is unput background becomes clearer = less blurry
password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length

    const blurValue = 20 - length * 2
    background.style.filter = `blur(${blurValue}px)`
})

//test for spec characters, spaces, etc.
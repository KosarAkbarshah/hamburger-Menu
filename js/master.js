const span = document.querySelectorAll('.line > span')
const menu = document.querySelector('.menu')
let flag = 1
function toggleMenu(s) {
    if (flag % 2) {
        span[0].style.transform = 'rotate(32deg)'
        span[2].style.transform = 'rotate(-392deg) translate(4px, -20px)' ///32deg + 360deg = 392    
        span[1].style.opacity = '0'
        menu.style.left = '37%'
    } else {
        span[0].style.transform = 'rotate(0deg)'
        span[2].style.transform = 'rotate(0deg)'
        span[1].style.opacity = '1'
        menu.style.left = '-100%'
    }
    flag++
}
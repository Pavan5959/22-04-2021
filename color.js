var button=document.querySelector('btn')
var body=document.querySelector('body')
var colors=['red','green','blue','yellow','pink','purple']

body.style.backgroundColor = 'voilet'
button.addEventListener('click', changeBackground)

function changeBackground()
{
    var colorIndex=parseInt(Math.random()*colors.length)
    body.style.background=colors[colorIndex]
}

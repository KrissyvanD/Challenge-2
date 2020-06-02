setInterval(setClock, 1000)

const hourLine = document.querySelector('[data-hour-line]')
const minuteLine = document.querySelector('[data-minute-line]')
const secondLine = document.querySelector('[data-second-line]')

function setClock (){
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondLine, secondsRatio)
    setRotation(minuteLine, minutesRatio)
    setRotation(hourLine, hoursRatio)

}

function setRotation(element, rotationRatio){
	element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

var color = ["url('spaceOne.jpg')", "url('spaceTwo.jpg')", "url('spaceThree.jpg')", "url('spaceFive.jpg')"]
var i = 0;
document.querySelector("button").addEventListener("click", function(){
	i = i < color.length ? ++i : 0;
	document.querySelector("body").style.backgroundImage = color[i]
})
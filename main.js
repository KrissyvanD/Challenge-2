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

var color = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
var i = 0;
document.querySelector("button").addEventListener("click", function(){
	i = i < color.length ? ++i : 0;
	document.querySelector("body").style.background = color[i]
})
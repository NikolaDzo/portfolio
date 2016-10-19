// Welcome! require() some modules from npm (like you were using browserify)
// and then hit Run Code to run your code on the right side.
// Modules get downloaded from browserify-cdn and bundled in your browser.
//var domElement = yo '<html string>'
/*-----------------------------------------------------------------------------
  REQUIRE
-----------------------------------------------------------------------------*/
var yo = require('yo-yo')
var minixhr = require('minixhr')
var csjs = require('csjs-inject')
/*-----------------------------------------------------------------------------
  THEME
-----------------------------------------------------------------------------*/
// coolors.co
var FONT        = 'Ubuntu, sans-serif'
var BLACK       = 'hsla(0,0%,0%,1)'
var WHITE       = 'hsla(0,0%,100%,1)'
var BLUE        = 'hsla(208,95%,50%, 1)'
var AZUREBLUE   = 'hsla(208,100%,87%, 1)'
var PIGEONBLUE  = 'hsla(208,97%,87%, 1)'
var LIGHTBLUE   = 'hsla(208,45%,82%, 1)'
var PINK        = 'hsla(346,84%,61%, 1)'
var YELLOW      = 'hsla(42,100%,70%, 1)'
var GREEN       = 'hsla(164,95%,43%,1)'
var GREY        = 'hsla(30,100%,99%,1)'
var LIGHTGREY   = 'hsla(30,100%,99%,.4)'
var COLORS      = [BLUE, AZUREBLUE, PIGEONBLUE, LIGHTBLUE]
/*-----------------------------------------------------------------------------
  LOADING DATA
-----------------------------------------------------------------------------*/
minixhr('https://api.github.com/users/nikoladzo', responseHandler1)
function responseHandler1 (data) {
  document.body.appendChild(webpage({
    data: JSON.parse(data),
    theme: {
      font: FONT,
      black: BLACK,
      white: WHITE,
      lightGrey: LIGHTGREY,
      blue: BLUE,
      azureblue: AZUREBLUE,
      pigeonblue: PIGEONBLUE,
      lightblue: LIGHTBLUE,
      pink: PINK,
      yellow: YELLOW,
      green: GREEN,
      grey: GREY,
      colors: COLORS
    }
  }))
  activateScrollEffect({ colors: COLORS })
}
// OR IF MANY HTTP CALLS
// minixhr('https://api.github.com/users/esova-ana', responseHandler1)
// function responseHandler1 (data) {
//   data = JSON.parse(data)
//   minixhr('https://api.github.com/users/esova-ana', responseHandler2)
// }
// function responseHandler2 (data) {
//   data.push(JSON.parse(data))
//   minixhr('https://api.github.com/users/esova-ana', responseHandler3)
// }
// function responseHandler3 (data) {
//   data.push(JSON.parse(data))
//   document.body.appendChild(webpage(data))
//   activateScrollEffect({ colors: themeColors })
// }
/*-----------------------------------------------------------------------------
  LOADING FONT
-----------------------------------------------------------------------------*/
var links = [
  'https://fonts.googleapis.com/css?family=Ubuntu',
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
]
var font = yo`<link href=${links[0]} rel='stylesheet' type='text/css'>`
var fontAwesome = yo`<link href=${links[1]} rel='stylesheet' type='text/css'>`
document.head.appendChild(font)
document.head.appendChild(fontAwesome)
/*-----------------------------------------------------------------------------
  WEB PAGE
-----------------------------------------------------------------------------*/
function webpage ({ data = {}, theme = {} } = {}) {
  var css = csjs`
    body {
      text-align: center;
      background-color: ${theme.azureblue};
      color: ${theme.black};
      font-family: ${theme.font};
    }
    h1 {
      margin-top: 1em;
      color: ${theme.white};
      font-size: 4em;
      font-weight: bold;
      text-transform: uppercase;
    }
  	h3 {
      color: ${theme.white};
      font-size: 3em;
      margin-bottom: 3em;
    }
    img {
      margin-top: 3em;
      border: 5px solid ${theme.grey};
      border-radius: 50%;
      width: 15em;
    }
  	@-webkit-keyframes bounce {
      0% {
        bottom: 50px;
      }
      70% {
        bottom: 100px;
        color: ${theme.lightGrey};
      }
      100% {
        bottom: 50px;
      }
    }
    .arrow {
      position: relative;
      font-size: 3em;
      color: ${theme.grey};
      animation: bounce 2s infinite
    }
  `
  function template () {
  	return yo`
      <div>
      	<img src="https://avatars.githubusercontent.com/u/18312351?v=3">
        <h1>Super Saiyan Blue</h1>
        <h3>Super Saiyan God Super Saiyan</h3>
        <div>
        <i class="${css.arrow} fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        ${portfolioComponent({ theme: theme })}
    		${textboxComponent({ theme: theme })}
    		${footerComponent({ theme: theme })}
      </div>
    `
  }
  var element = template() // creates a dom element
  return element
}
/*--------------------------------------------------------------------------------
  PORTFOLIO COMPONENT
--------------------------------------------------------------------------------*/
function portfolioComponent ({ data = {}, theme = {} } = {}) {
	var css = csjs`
  	.portfolio {
      margin   : 2em 0 2em 0;
      width    : 100%;
    }
    .portfolioItem     {
      width            : 100%;
      padding-bottom   : 200px;
    	background-color : ${theme.azureblue};
      color            : ${theme.white};
      display          : flex;
      flex-direction   : column;
      align-items      : flex-start;
      transition       : 2s;
    }
    .portfolioItem_isHover {
      width                : 100%;
      padding-bottom       : 200px;
    	background-color     : ${theme.blue};
      color                : ${theme.white};
      display              : flex;
      flex-direction       : column;
      align-items          : flex-start;
      cursor               : pointer;
      transition           : 2s;
    }
    .portfolioTitle    {
      margin           : 2em;
      padding          : 0.5em;
      font-size        : 3em;
      color            : ${theme.white};
      background-color : ${theme.azureblue};
      border-radius    : 4px;
      border           : 4px solid ${theme.grey};
      transition       : 2s;
    }
    .portfolioTitle_isHover {
      margin                : 2em 2em 2em 1.5em;
      padding               : 0.5em;
      font-size             : 3em;
      color                 : ${theme.white};
      background-color      : ${theme.blue};
      border-radius         : 4px;
      border                : 4px solid ${theme.grey};
      transition            : 2s;
    }
    .portfolioBody {
      margin       : 0 40% 0 0em;
      text-align   : left;
      font-size    : 1.2em;
      color        : ${theme.azureblue};
      transition   : 2s;
    }
    .portfolioBody_isHover {
      margin               : 0 35% 0 4em;
      text-align           : left;
      font-size            : 1.2em;
      color                : ${theme.white};
      transition           : 2s;
    }
  `
  function template () {
    // eventListener is a custom function
    // listens for certain events, like: 'mouseover'
    // whenever a user puts the cursor above the div element with the event listener
    // the event listener function is called automatically
    return yo`
      <div onmouseover=${hoverPortfolio}>
        <div class="${css.portfolio}">
          <div class="${css.portfolioItem}">
            <div class="${css.portfolioTitle}">
              Become Super Saiyan Blue
            </div>
            <div class="${css.portfolioBody}">
              Super Saiyan Blue, also known as Super Saiyan God Super Saiyan is a form that can be  							accessed after absorbing the power of Super Saiyan God and then combining it with the 							Super Saiyan form, or through vigorous ki control training. This form surpasses Super 							Saiyan God.
             </div>
          </div>
        </div>
      </div>
    `
  }
  function hoverPortfolio () {
    var newElement = yo`
      <div onmouseout=${unhoverPortfolio} onclick=${openNewTab}>
        <div class="${css.portfolio}">
          <div class="${css.portfolioItem_isHover}">
            <div class="${css.portfolioTitle_isHover}">
              Become Super Saiyan Blue
            </div>
            <div class="${css.portfolioBody_isHover}">
              Super Saiyan Blue, also known as Super Saiyan God Super Saiyan is a form that can be  							accessed after absorbing the power of Super Saiyan God and then combining it with the 							Super Saiyan form, or through vigorous ki control training. This form surpasses Super 							Saiyan God.
             </div>
          </div>
        </div>
      </div>
    `
    // 'this' is a reference to the dom node,
    // that hoverPortfolio was attached to as an eventListener
    yo.update(element, newElement)
  }
  function unhoverPortfolio() { yo.update(element, template()) }
  function openNewTab() {
    var url = "https://nikoladzo.github.io/quiz/"
    var tab = window.open(url, '_blank')
    tab.focus()
  }
  var element = template()
  return element
}
/*--------------------------------------------------------------------------------
  TEXTBOX COMPONENT
--------------------------------------------------------------------------------*/
function textboxComponent ({ data = {}, theme = {} } = {}) {
  var css = csjs`
  .textbox {
    margin: 5em 25% 3em 25%;
    color: ${theme.white};
    font-size: 2em;
    line-height: 1.5em;
    text-align: justify;
  }
  `
  function template () {
    return yo`
      <div>
        <div class="${css.textbox}">
          Check out stuff I do and get in touch. We can meet for coffee
          and talk about amazing products you want to build. I can
          help you make it work :)
        </div>
      </div>
    `
  }
  var element = template()
  return element
}


/*--------------------------------------------------------------------------------
  FOOTER COMPONENT
--------------------------------------------------------------------------------*/

function footerComponent ({ data = {}, theme = {} } = {}) {
	var css = csjs`
  	.container {
      display: flex;
      justify-content: center;
    }
    .icon {
      padding: 1em;
      font-size: 35px;
      color: ${theme.grey};
    }
    .icon:hover {
      opacity: 0.4;
    }
  `
  function template () {
    return yo`
    <div class="${css.container}">
      <a href="https://github.com/NikolaDzo">
        <i class="${css.icon} fa fa-github" aria-hidden="true"></i>
      </a>
        <a href="mailto:nikolasretenovicdzo@gmail.com ">
        <i class="${css.icon} fa fa-envelope-o" aria-hidden="true"></i>
      </a>
      <a href="https://www.facebook.com/nikola.sretenovic.969">
       <i class="${css.icon} fa fa-facebook" aria-hidden="true"></i>
      </a>
    </div>
    `
  }
  var element = template()
  return element
}
/*-----------------------------------------------------------------------------
  HELPERS
-----------------------------------------------------------------------------*/
function activateScrollEffect ({ colors = [] } = {}) {
  var docHeight = (document.height !== undefined) ?
    document.height
  	: document.body.offsetHeight
	var step = docHeight/colors.length
  window.addEventListener("scroll", function(event) {
  	var position = document.documentElement.scrollTop || document.body.scrollTop
    var i = Math.floor(position/step)
    var currentColor = colors[i]
    document.body.style.backgroundColor = currentColor
    document.body.style.transition = "background-color 3s"
  })
}

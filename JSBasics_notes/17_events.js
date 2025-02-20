// EVENT OBJECT

/* The 'event' object is automatically passed into the function called whenever we trigger an event listener. It contains useful information about the event, such as the type of event, the target element, and additional details specific to the event type.
- The event object is created by the browser
- This event object is optional and in most cases we don't use it
- Useful methods:
1. event.preventDefault() - Cancels the default action that normally occurs when the event is triggered
2. event.target - The element that triggered event
3. event.type - The event type
*/

// Example
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the form from submitting and reloading the page
  console.log(e.type); // returns the type = "submit"
});

/* EVENT BUBBLING
- Event bubbling means that when an event occurs on an element, it first runs its own event handler and then bubbles up to trigger event handlers on its parent, grandparent, and so on (unless stopped).

*/

// Example

// HTML
/*
<div>
	<button id="one">One</button>
	<button>Two</button>	
	<button>Three</button>	
	<button>Four</button>	
	<button>Five</button>	
</div>
*/

// JS
/*
const parentEl = document.querySelector('div')

parentEl.addEventListener('click', (e) => {
	alert(e.target.innerText)
})
*/

// Here, when we click on any of the buttons, they pass the event to their parent which handles it. The parent will also pass up the event to the body element but since we do not have an event listener setup for that, no action is performed

// Question: What if you do not want to pass an event to the parent -> Answer: event.stopPropagation()

/*
const parentEl = document.querySelector('div')
const btnId = document.querySelector('#one')

parentEl.addEventListener('click', (e) => {
	alert(e.target.innerText)
})

btnId.addEventListener('click', function(e){
	alert("I am the special button")
	event.stopPropagation() // -> Prevents the event from going up to the 'parentEl' event listener
})

*/

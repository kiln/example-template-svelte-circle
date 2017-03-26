import App from './App.html';
import tween from './tween.js';
import * as eases from 'eases-jsnext';

// Anything the end user can configure in the settings panel must
// be in this object. The separate settings.js file references
// these property names.
export var state = {
	// Note: property names starting with an underscore are reserved for use by Flourish
	radius: 10,
	stroke: 1,
	color: "#FF0000"
};

var lastState = Object.assign( {}, state );
var currentTween;
var app;

// Initialise the graphic
export function draw() {
	app = new App({
		target: document.body,
		data: state
	});
}

// The update function is called when the user changes a state property in
// the settings panel or presentation editor. It updates elements to reflect
// the current state.
export function update() {
	if (state.radius <= 0) throw new Error("Radius must be positive");

	if ( currentTween ) currentTween.stop();
	currentTween = tween( lastState, state, function ( state ) {
		app.set( state );
		lastState = state;
	}, {
		duration: 400,
		easing: eases.cubicInOut
	});
}

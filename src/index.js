import App from './App.svelte';
import tween from './tween.js';
import * as eases from 'eases-jsnext';

// Anything the end user can configure in the settings panel must
// be in this object. The separate settings.js file references
// these property names.
export const state = {
	// Note: property names starting with an underscore are reserved for use by Flourish
	radius: 10,
	stroke: 1,
	color: "#FF0000"
};

let lastState = Object.assign( {}, state );
let currentTween;
let app;

// Initialise the graphic
export function draw() {
	app = new App({
		target: document.body,
		props: state
	});
}

// The update function is called when the user changes a state property in
// the settings panel or presentation editor. It updates elements to reflect
// the current state.
export function update() {
	if (state.radius <= 0) throw new Error("Radius must be positive");

	if ( currentTween ) currentTween.stop();
	currentTween = tween( lastState, state, function ( state ) {
		app.$set( state );
		lastState = state;
	}, {
		duration: 400,
		easing: eases.cubicInOut
	});
}

// This template uses d3-selection and d3-transition
// Importing d3-transition adds the .transition() method to selections
import { select } from "d3-selection";
import "d3-transition";

// Anything the end user can configure in the settings panel or
// presentations editor must be in this object. The separate settings.js
// file references these property names.
export var state = {
	// Note: property names starting with an underscore are reserved for use by Flourish
	radius: 10,
	stroke: 1,
	color: "#FF0000"
};

var svg, circle;

// Initialise the graphic
export function draw() {
	// Append and style elements based on the current state
	var w = window.innerWidth,
	    h = window.innerHeight;
	svg = select(document.body).append("svg").attr("width", w).attr("height", h);
	circle = svg.append("circle")
		.attr("cx", w/2)
		.attr("cy", h/2)
		.attr("r", state.radius)
		.attr("fill", state.color)
		.attr("stroke", "black")
		.attr("stroke-width", state.stroke);
}

// For non-fluid visualisations, e.g. where an SVG is drawn to fill the available space,
// it may be useful to update the visualisation when the window size changes.
window.addEventListener("resize", function() {
	var w = window.innerWidth,
	    h = window.innerHeight;
	svg.attr("width", w).attr("height", h);
	circle.attr("cx", w/2).attr("cy", h/2);
});

// The update function is called when the user changes a state property in
// the settings panel or presentation editor. It updates elements to reflect
// the current state.
export function update() {
	circle.transition()
		.attr("r", state.radius)
		.attr("fill", state.color)
		.attr("stroke-width", state.stroke);
}

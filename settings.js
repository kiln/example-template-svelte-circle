[
	{
		property: "radius",
		category: "Data",
		name: "Radius",
		type: "number",
		validate: function(r) {
			if (r < 0) return "The radius cannot be negative";
			else if (r == 0) return "The radius cannot be zero";
			else if (r >= 1000) return "The radius must be less than 1000";
		},
		description: "The radius of the circle",
	},
	{
		property: "stroke",
		category: "Design",
		name: "Stroke",
		description: "The thickness of the circle's border, between 0 and 5",
		type: "number",
		validate: function(thickness) {
			if (thickness < 0 || thickness > 5) return "The thickness must be between 0 and 5";
		}
	},
	{
		property: "color",
		category: "Design",
		name: "Color",
		description: "The color of the circle",
		type: "color"
	}
]

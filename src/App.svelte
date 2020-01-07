<script>
	export let radius;
	export let stroke;
	export let color;

	let width = 500; // Default values
	let height = 500;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<svg {width} {height}>
	<circle cx={width / 2} cy={height / 2} r={radius} fill={color} stroke="black" stroke-width={stroke}></circle>
</svg>
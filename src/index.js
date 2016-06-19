import regeneratorRuntime from 'regenerator/runtime-module'; // eslint-disable-line

export default function* yourPlugin(options) {

	// Yield some stuff in here

	// E.g. this will count up from 0
	var i = 0;
	while (true) {
		yield i;
		i++;
	}
}

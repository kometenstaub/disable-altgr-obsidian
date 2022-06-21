import { Plugin } from 'obsidian';

export default class AltGrPlugin extends Plugin {

	async onload() {
		console.log('disabling AltGR');

		app.scope.register([], 'AltGraph', (evt, ctx) => {return false});

	}

	onunload() {
		console.log('reenabling AltGr');
	}

}

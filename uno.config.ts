import { presetWebFonts, presetWind } from 'unocss';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [
		presetWind(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				display: 'Zeyada',
				sans: {
					name: 'Raleway',
					weights: [100, 300, 500, 700, 900]
				},
				serif: {
					name: 'Sawarabi Mincho',
					weights: [100, 300, 500, 700, 900]
				},
				mono: {
					name: 'Nova Mono',
					weights: [100, 300, 500, 700, 900]
				}
			}
		})
	]
});

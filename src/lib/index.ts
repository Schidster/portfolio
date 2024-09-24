import { interpolateLab } from 'd3-interpolate';
import { tweened } from 'svelte/motion';

const accentColors = [
	'rgb(230, 175, 46)',
	'rgb(150, 29, 78)',
	'rgb(68, 255, 209)',
	'rgb(228, 87, 46)',
	'rgb(14, 173, 105)',
	'rgb(255, 181, 194)',
	'rgb(25, 100, 126)'
];

const randColor = () => accentColors[Math.round(Math.random() * accentColors.length)];

export const accentColor = tweened(randColor(), {
	duration: 1000,
	interpolate: interpolateLab
});
export const getTypewriter = (initialValue: string = '', duration: number = 200) => {
	return tweened(initialValue, {
		interpolate(a, b) {
			const totalLength = a.length + b.length;
			return (t) => {
				const progress = Math.floor(t * totalLength);
				if (progress < a.length) {
					return a.slice(0, a.length - progress);
				} else if (progress < totalLength) {
					return b.slice(0, progress - a.length);
				}
				return b; // Return full b if progress exceeds total length
			};
		},
		duration(from, to) {
			const totalLength = from.length + to.length;
			return totalLength * duration;
		}
	});
};

setInterval(() => accentColor.set(randColor()), 2000);

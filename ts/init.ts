import Title from "./Components/Title";

let outputSection: HTMLElement | null = document.querySelector(".headings");

let heading1 = new Title("h1", "Hello Vlad!");
let heading2 = new Title("h2", "Hello Evhen!");
let heading3 = new Title("h3", "Hello World!");
let heading4 = new Title("h4", "Hello TS!");
let heading5 = new Title("h5", "Hello JS!");
let heading6 = new Title("h6", "Hello React!");

let outputArr: HTMLElement[] = [
	heading1.element,
	heading2.element,
	heading3.element,
	heading4.element,
	heading5.element,
	heading6.element,
];

function appendOutput(outputArr: HTMLElement[]): void {
	for (let i: number = 0; i < outputArr.length; i++) {
		outputSection?.appendChild(outputArr[i]);
	}
}

appendOutput(outputArr);

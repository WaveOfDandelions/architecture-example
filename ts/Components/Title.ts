abstract class Component {
	protected abstract render(): HTMLElement;
}

type TitleTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default class Title extends Component {
	private text: string;
	private titleTagType: TitleTagType;
	private heading: HTMLElement;

	constructor(titleTagType: TitleTagType, text: string) {
		super();
		this.text = text;
		this.titleTagType = titleTagType;

		this.heading = this.render();
		this.heading.textContent = text;
	}

	render(): HTMLElement {
		const heading = document.createElement(this.titleTagType);
		heading.textContent = this.text;

		return heading;
	}

	public get element(): HTMLElement {
		return this.heading;
	}
}

console.log("title");

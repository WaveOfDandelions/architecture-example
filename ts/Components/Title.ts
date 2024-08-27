// Абстрактная фабрика и абстрактные методы
type THTMLElements = HTMLElementTagNameMap[keyof HTMLElementTagNameMap]; 

type HeadingTitleTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IComponentFactory<T> {
	create(type: keyof HTMLElementTagNameMap, text: string): T;
	render(
		componentType: keyof HTMLElementTagNameMap,
		text: string,
		destination: THTMLElements,
	): T;
}

export default class TitleFactory implements IComponentFactory<HTMLHeadingElement> {
	public create(type: HeadingTitleTagType, text: string) {
		let createdTitle = document.createElement(type);
		createdTitle.textContent = text;

		return createdTitle;
	}

	public render(
		componentType: HeadingTitleTagType,
		text: string,
		destination: THTMLElements | null,
	) {
		const element = this.create(componentType, text);

		if (destination) {
			destination.appendChild(element);
		}

		if (!destination) {
			throw new Error(
				"Тег в который вы пытаетесь добавить заголовок отсутствует",
			);
		}

		return element;
	}
}

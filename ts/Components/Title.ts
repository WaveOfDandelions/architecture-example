// Абстрактная фабрика и абстрактные методы
type TitleTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IComponentFactory {
	create(type: TitleTagType, text: string): HTMLElement;
	render(
		componentType: string,
		text: string,
		destination: HTMLElement,
	): HTMLElement;
}

export default class TitleFactory implements IComponentFactory {
	public create(type: TitleTagType, text: string): HTMLElement {
		let createdTitle: HTMLElement = document.createElement(type);
		createdTitle.textContent = text;

		return createdTitle;
	}

	public render(
		componentType: TitleTagType,
		text: string,
		destination: HTMLElement | null,
	): HTMLElement {
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

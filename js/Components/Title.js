export default class TitleFactory {
    create(type, text) {
        let createdTitle = document.createElement(type);
        createdTitle.textContent = text;
        return createdTitle;
    }
    render(componentType, text, destination) {
        const element = this.create(componentType, text);
        if (destination) {
            destination.appendChild(element);
        }
        if (!destination) {
            throw new Error("Тег в который вы пытаетесь добавить заголовок отсутствует");
        }
        return element;
    }
}

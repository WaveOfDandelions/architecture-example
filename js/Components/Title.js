class Component {
}
export default class Title extends Component {
    constructor(titleTagType, text) {
        super();
        this.text = text;
        this.titleTagType = titleTagType;
        this.heading = this.render();
        this.heading.textContent = text;
    }
    render() {
        const heading = document.createElement(this.titleTagType);
        heading.textContent = this.text;
        return heading;
    }
    get element() {
        return this.heading;
    }
}
console.log("title");

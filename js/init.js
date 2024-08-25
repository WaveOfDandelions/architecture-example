// ts/Components/Title.ts
var Component = class {
};
var Title = class extends Component {
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
};
console.log("title");

// ts/init.ts
var outputSection = document.querySelector(".headings");
var heading1 = new Title("h1", "Hello World!");
var heading2 = new Title("h2", "Hello Evhen!");
var heading3 = new Title("h3", "Hello Vlad!");
var heading4 = new Title("h4", "Hello TS!");
var heading5 = new Title("h5", "Hello JS!");
var heading6 = new Title("h6", "Hello React!");
var outputArr = [
  heading1.element,
  heading2.element,
  heading3.element,
  heading4.element,
  heading5.element,
  heading6.element
];
function appendOutput(outputArr2) {
  for (let i = 0; i < outputArr2.length; i++) {
    outputSection?.appendChild(outputArr2[i]);
  }
}
appendOutput(outputArr);
console.log("init");

import TitleFactory from "./Components/Title";

const outputContainer: HTMLElement | null = document.querySelector(".headings");
let makeTitle = new TitleFactory();

let h1 = makeTitle.render("h1", "Hello World!", outputContainer);

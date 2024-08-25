// ts/Components/Title.ts
var TitleFactory = class {
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
      throw new Error(
        "\u0422\u0435\u0433 \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u043F\u044B\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"
      );
    }
    return element;
  }
};

// ts/init.ts
var outputContainer = document.querySelector(".headings");
var makeTitle = new TitleFactory();
var h1 = makeTitle.render("h1", "Hello World!", outputContainer);

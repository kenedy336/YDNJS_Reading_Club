class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.attachViewListeners();
    this.coverattachlListenersToModel();
  }
  attachViewListeners() {
    this.view.submit.addEventListener("click", event => {
      event.preventDefault();
      const record = this.view.getNewRecordData();
      this.model.add(new Book(record));
    });
  }
  coverattachlListenersToModel() {
    const eventsMap = [
      { event: "ADD", handler: this.view.renderRecord.bind(this.view) },
      { event: "REMOVE", handler: this.view.removeRecord.bind(this.view) },
      { event: "CLEAR", handler: this.view.removeAllReccords.bind(this.view) }
    ];

    eventsMap.forEach(listener => this.model.attach(listener));
  }
}

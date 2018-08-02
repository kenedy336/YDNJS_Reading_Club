class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.attachListenersToView();
    this.attachListenersToModel();
  }
  attachListenersToView() {
    this.view.submit.addEventListener("click", event => {
      event.preventDefault();
      const record = this.view.getNewRecordData();
      this.model.add(new Book(record));
    });

    this.view.bookList.addEventListener("click", event => {
      const element = event.target;
      if (element.classList.contains("delete")) {
        let bookIndex = element.dataset["bookIndex"];
        this.model.remove(bookIndex);
      }
    });

    this.view.filter.addEventListener("input", event => this.model.findBy(event.target.value))

    this.view.clearTasks.addEventListener("click", event => this.model.clear());
  }
  attachListenersToModel() {
    const eventsMap = [{
        event: "ADD",
        handler: (...payload) => {
          this.view.renderRecord(...payload)
          this.view.clearInputData()
        }
      },
      {
        event: "REMOVE",
        handler: this.view.removeRecord.bind(this.view)
      },
      {
        event: "CLEAR",
        handler: this.view.removeAllRecords.bind(this.view)
      },
      {
        event:"FIND",
        handler:this.view.renderRecordsList.bind(this.view)
      }
    ];

    eventsMap.forEach(listener => this.model.attach(listener));
  }
}
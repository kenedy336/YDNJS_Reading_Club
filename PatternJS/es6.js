class EventObserver{
  constructor() {
    this.observers = [];
  }
  subsribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subsribed to ${fn.name}`);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item){
      if(item !== fn) {
        return item;
      }
    })
    console.log(`You are now unsubsribed from ${fn.name}`);
  }
  fire() {
    this.observers.forEach(function(observer){
      observer.call();
    })
  }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function(e) {
  click.subsribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(e) {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(e) {
  click.subsribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(e) {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function(e) {
  click.fire();
});

const getCurrentMilliseconds = function(){
  console.log(`Current millisecond: ${new Date().getMilliseconds()}`)
}

const getCurrentSeconds = function(){
  console.log(`Current seconds: ${new Date().getSeconds()}`)
}
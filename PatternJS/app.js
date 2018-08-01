// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangrText: function(){
//       changeText();
//     }
//   }
// })();

// UICtrl.callChangrText();

const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log(`Item ${item} was added...`);
  };

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  };

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
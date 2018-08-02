const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to){
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const chatRoom = function() {
  let users = {};

  return {
    register: function(user){
      user[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to){
      if(to){
        to.receive(message, from);
      } else {
        for(key in users){
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const dima = new User('Dima');

const chatroom = new chatRoom();

chatroom.register(brad);
chatroom.register(dima);

brad.send('Hello Dima', dima);
dima.send('Hello Brad', brad);
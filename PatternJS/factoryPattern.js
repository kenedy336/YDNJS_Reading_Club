function MemberFactory() {
  this.createMember = function(name, type){
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if (type === 'standart') {
      member = new StandartMembership(name);
    } else if(type === 'super'){
      member = new SuperMembershipt(name);
    }

    member.type = type;
    member.define1 = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandartMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembershipt = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Dima', 'super'));
members.push(factory.createMember('Aloha', 'simple'));
members.push(factory.createMember('John', 'standart'));
members.push(factory.createMember('Billy', 'super'));

members.forEach(function(member) {
  member.define1();
})
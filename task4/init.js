const UICtrl = (function() { 
  const UISelectors = {
    attack: '#attack',
    defends: '#defend',
    nextMove: '#next-move',
    giveUp: '#give-up',
    yourHealth: '.yourHealth',
    enemyHealth: '.enemyHealth',
    listLog: '.listLog'
  }
  return {
    getSelectors: function(){
      return UISelectors;
    },
    getAttack: function(){
      return  parseInt(document.querySelector(UISelectors.attack).value);
    },
    getDefend: function(){
      return  parseInt(document.querySelector(UISelectors.defends).value);
    },
    getYourHealth: function(){
      return parseInt(document.querySelector(UISelectors.yourHealth).textContent);
    },
    getEnemyHealth: function(){
      return parseInt(document.querySelector(UISelectors.enemyHealth).textContent);
    },
    setYourHealth: function(dmg){
      document.querySelector(UISelectors.yourHealth).textContent = dmg;
    },
    setEnemyHealth: function(dmg){
      document.querySelector(UISelectors.enemyHealth).textContent = dmg;
    },
    logDamage: function(a, b){
      const li1 = document.createElement('li');
      li1.innerHTML = `You have done ${a} damage to enemy`;
      const li2 = document.createElement('li');
      li2.innerHTML = `Enemy have done ${b} damage to you`;
      document.querySelector(UISelectors.listLog).appendChild(li1);
      document.querySelector(UISelectors.listLog).appendChild(li2);
    },
    clearLog: function(){
      document.querySelector(UISelectors.listLog).innerHTML = '';
    }
  } 
})();

const fightCtrl = (function() {

  const data = {
    myHealth: 100,
    enemyHealth: 100
  }

  const loadEventListener = function(){
    document.querySelector(UICtrl.getSelectors().nextMove).addEventListener('click', nextMove);
    document.querySelector(UICtrl.getSelectors().giveUp).addEventListener('click', giveUp);
  }

  const nextMove = function(){
    let myDamge, enemyDamage;

    const attack = UICtrl.getAttack();
    const defend = UICtrl.getDefend();

    const getBotAttack = Random(6, 1);
    const getBotDefend = Random(6, 1);

    myDamage = Random(getDamage(attack, getBotDefend), 1);
    enemyDamage = Random(getDamage(getBotAttack, defend), 1);

    data.myHealth -= enemyDamage;
    data.enemyHealth -= myDamage;

    UICtrl.logDamage(myDamage, enemyDamage);

    UICtrl.setYourHealth(data.myHealth);
    UICtrl.setEnemyHealth(data.enemyHealth);

    winCheck(data.myHealth, data.enemyHealth);
  } 
  const giveUp = function(){
    winCheck(0, 100);
  }
  const winCheck = function(my, en){
    if(my <= 0) {
      alert('You have lost!');
      UICtrl.clearLog();
      data.myHealth = 100;;
      data.enemyHealth = 100;
      UICtrl.setYourHealth(data.myHealth);
      UICtrl.setEnemyHealth(data.enemyHealth);
    }
    if (en <= 0 ){
      alert ('You have won!');
      UICtrl.clearLog();
      data.myHealth = 100;;
      data.enemyHealth = 100;
      UICtrl.setYourHealth(data.myHealth);
      UICtrl.setEnemyHealth(data.enemyHealth);
    }
  }

  const getDamage = function(attack, defend){
    let returnAttack;

    if(defend === attack){
      if(attack === 1) returnAttack = 3;
      else if(attack === 3) returnAttack = 2;
      else returnAttack = 1;
    } else {
      if(attack === 1) returnAttack = 9;
      else if(attack === 3) returnAttack = 8;
      else returnAttack = 6;
    }
    
    return returnAttack;
  }

  const Random = function(a, b){
    return Math.floor(Math.random() * ((a + 1) - b) + b);
  }

  return {
    getEvents: function(){
      return loadEventListener();
    }
  }

})();

const init = (function(){

  fightCtrl.getEvents();
  

})();

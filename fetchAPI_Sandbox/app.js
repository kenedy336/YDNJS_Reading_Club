document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
  fetch('text.txt')
    .then(function(res){
      return res.text(); 
    })
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.log(err);
    });
}

function getJson(){
  fetch('posts.json')
    .then(function(res){
      return res.json(); 
    })
    .then(function(data){
      console.log(JSON.stringify(data));
    })
    .catch(function(err){
      console.log(err);
    });
}

function getExternal(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json(); 
    })
    .then(function(data){
      console.log(JSON.stringify(data));
    })
    .catch(function(err){
      console.log(err);
    });
}
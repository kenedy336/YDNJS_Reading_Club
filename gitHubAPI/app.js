const searchUser = document.getElementById('search-user');
const github = new GitHub;
const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if(userText !== '') {
    github.getUser(userText)
      .then(data => {
        if(data.profileData.message === "Not Found"){
          ui.clearProfile();
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profileData);
          ui.showRepos(data.reposData);
        }
      })
  } else {
    ui.clearProfile();
  }
  
  e.preventDefault();
});


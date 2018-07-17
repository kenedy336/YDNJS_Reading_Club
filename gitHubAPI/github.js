class GitHub {
  constructor(){
    this.client_id = 'c732a534ad7e85c47f65';
    this.client_secret = 'fc7914bdfc3bc240e5dd8be77cd71927977e52f3';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();
    return {
      profileData,
      reposData
    }
  }

}
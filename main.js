const linksSocialMedia = {
        
  github: "isnardcavalcanti", 
  youtube: "",
  facebook: "isnard.cavalcanti.9",
  instagram: "isnardcavalcantii",
  twitter: "IsnardBatista1"

}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    let social = li.getAttribute('class');
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }


}

changeSocialMediaLinks();

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name 
    userBio.textContent = data.bio
    userLink.href = data.url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos(); 
// Busca de API no repositório GitHub
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/FelipeFerraz98/Portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json() //Salva a API em json
    return profileData
}
const fetchUserRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pinned`);
    const repos = await response.json();
    return repos;
};

const renderRepos = (repos, counter) => {
    const ul = document.querySelector(".portfolio");
    const html = [];
    
    for (let i = 0; i < 6; ) {
        const repo = repos[i];
        if (repo.name != 'FelipeFerraz98') {
            html.push(`
                <li>
                    <span class="title github" href="${repo.html_url}" target="_blank">${repo.name}</span>
                    <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
                </li>
            `);
        i++ }
    }
    
    ul.innerHTML += html.join("");;

};

document.addEventListener("DOMContentLoaded", async () => {
    const username = "FelipeFerraz98";
    const repos = await fetchUserRepos(username);
    renderRepos(repos, 0);
});

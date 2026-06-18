// Seletor da Seção About (section)
const about = document.querySelector('#about');

async function getAboutGithub() {
    try {

        // Não esqueça de trocar conteudoGeneration pelo seu usuário do GitHub
        const resposta = await fetch('https://api.github.com/users/lilianlacerda');
        const perfil = await resposta.json();

        about.innerHTML = '';

        about.innerHTML = `
            <figure class="about-image">
                <img src="${perfil.avatar_url}" alt="Foto do perfil - ${perfil.name}">
            </figure>

            <article class="about-content">
                <h2>Sobre mim</h2>
                <p>
                    [em processo de escrita]
                </p>
                
                <p>
                    [em processo de escrita]
                </p>

                <div class="about-buttons-data">
                    <div class="buttons-container">
                        <a href="${perfil.html_url}" target="_blank" class="botao">Ver GitHub</a>
                        <a href="#" target="_blank" class="botao-outline">Currículo</a>
                    </div>
                    
                    <div class="data-container">
                        <div class="data-item">
                            <span class="data-number">${perfil.followers}</span>
                            <span class="data-label">Seguidores</span>
                        </div>
                        <div class="data-item">
                            <span class="data-number">${perfil.public_repos}</span>
                            <span class="data-label">Repositórios</span>
                        </div>
                    </div>
                </div>
            </article>
        `;
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
}

// Executar a função ao carregar o script
getAboutGithub();

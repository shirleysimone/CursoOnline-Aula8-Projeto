# Projeto - M de Maravilhosa


## Sobre o projeto: 

Precisamos falar sobre mulheres que mudaram o mundo. 

* like a girl (https://www.youtube.com/watch?v=XjJQBjWYDTs)
* microsoft (https://www.youtube.com/watch?v=tNqSzUdYazw)


## Orientações para git/github:

* forkar o respositório
* após isso, clone o projeto do *seu github* na sua máquina: `git clone url-do-projeto`
* agora precisamos confirgurar nosso projeto para que o git saiba que precisa puxar atualizações do repositório raíz da reprograma, ou seja, o *upstream*. 
* `git remote -v` veja que temos apenas o repositório *origin*
* agora vamos adicionar o upstream `git remote add upstream url-do-repositorio-que-voce-forkou`
* `git remote -v` veja agora que temos os dois repositórios: origin e upstream. 
* antes de começar a codar, crie sua branch: `git checkout -b nome-da-sua-branch`
* Fazer alterações e codigos necessários
* `git add . `
* `git commit -m "mensagem-sobre-o-que-foi-feito"`
* antes do push, vamos atualizar nossa branch com a master do UPSTREAM: `git pull upstream master`
* agora sim: `git push origin nome-da-sua-branch`
* entre no repositório do github e faça a *pull request* 



## Orientações para alteração do código:

O que deve ser alterado?

Dentro da pasta **perfil**, criar um arquivo .html com o nome da sua personalidade. Exemplo: minha personalidade é Ada Lovelace, então crie um arquivo ada-lovelace.html e insira na pasta perfil.
Use o layout do arquivo **nome-sobrenome.html** para fazer sua página de perfil. Para alterações de CSS, faça um estilo **interno** 
 Vamos relembrar um pouco sobre as especificidades do CSS (https://www.w3schools.com/CSS/css_specificity.asp)

As imagens da sua página de perfil devem ficar na pasta **img/personalidade**. Na hora de fazer a conexão na sua página, não esqueça do caminho da imagem.

Para o **index.html**, você deve colocar uma imagem quadrada da personalidade na pasta **img/home-perfil**.

Dentro do seu arquivo index.html, mude o src da imagem e o href do link da **sua** personalidade (elas estão organizadas por nome de personalidade e em ordem alfabética).




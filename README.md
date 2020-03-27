# BE THE HERO
> Projeto realizado na semana OmniStack 11 da Rocketseat.

O projeto consistia em fazer uma página com login, apresetação de Casos da ONG(Que somente aquela ONG poderia ver), inclusão de um novo caso da ONG e exclusão de uma caso da ONG.

Usando apenas o javascript, HTML e CSS.

A intenção do curso era nada menos que ensinar a usarmos node.js no back-end, ReactJS no front-end e React Native no mobile.

Poderá ver o projeto aqui:
[Omni Stack 11](https://rocketseat.com.br/week/inscricao/11.0)

O layout Original você pode ver aqui:

[Layout Original]()

## Mas eu fui mais além

Como o projeto era simples, e eu queria ir mais a fundo, eu busquei fazer o que eu considerava práticas mas realistas para o dia a dia de um desenvolvimento de softwares. Colocar em prática técnicas para garantir a segurança da plataforma. E garantir que terceiros não conseguiam ter acesso. E criar também um instalador da plataforma como um todo afim de que qualquer um possa testar a plataforma e conhecer mais sobre o projeto e minhas alterações.

## O que não tinha no projeto original e o que mudamos

Como achei o projeto muito simples, agora irei listar algumas coisa que achei que faltavam na plataforma:

* **Senha**: Apenas de termos um código único de uma ONG achei necessário adcionar uma senha, para evitarmos que qualquer pessoa possa adicionar e remover um caso.

* **Nível de Acesso**: Assim como a senha, criei um nível de acesso, para garatirmos que quem vai acessar o sistema tem a permissão correta para ler, adcionar e remover os casos de uma ONG. Para isso incluismo o e-mail da pessoa que fará o acesso.

* **Mais de uma ONG por acesso**: Pensando na realidade do mundo, fui conversar com amigos que fazem parte de uma ONG para entender melhor como a plataforma poderia ser melhor, assim descobrimos que uma pessoa pode estar atrelada a mais de uma ONG. Então criamos a possibilidade daquele usuário que entrou com a ONG X possa trocar entre as ONGs que participa sem a necessidade de refazer o login.

* **Painel administrativo**: Como inserimos todas as particularidades acima, nasceu a necessidade de incluirmos um painel administrativo para contralar os usuários de uma ONG e seus níveis de permissão.

* **Acesso a páginas sem estar logado**: Uma grande falha que indentificamos foi que o usuário que não estava logado, podia acessar a página de casos sem estar logado, mas não traria resultados pois o servidor iria recusar o acesso, mas mantio na página, então criamos uma redundância que expulsa o visitante sem login para a tela de login. Feito assim em todas as páginas que precisavam estar logado.

* **Tela Inicial**: Essa não é necessáriamente um erro, mas para se tornar uma solução completa, adcionamos uma tela de inicio aonde conta o que a platforma faz, o que você pode fazer com a plataforma, etc.

## Como ficou?

Como comentamos acima fizemos muitias mudanças e elas impactaram no layout do site assim como em sua programação. Para isso precisamos recriar parte do site e adcionar páginas que não existiam no projeto original.

Assim ficou o Layout pós mudança:
[Layout Modificado]()

## Instalação

Afim de facilitar a vida de quem quer conhecer nosso projeto criamos uma instalador para cada sistema operacional.
> Fique tranquilo em questão do que já tem instalado em seu sistema. O instalador verifica o que já está instalado ou não antes de instalar. E vale lembrar que ele é um instalador aberto aonde se quiser poderá ver tudo que será instalado.
> Nos instalador colocamos a opção de Reinstalar e Remover a instalação. Ele salva um histórico nele mesmo para saber se já existia algo instalado antes de sua instalação, sendo assim mantém o estava instalado antes de sua execução.

OS X(MAC) e Linux(Base Red Hat, Base Debian):

```sh
./install.sh
```

Windows:

```sh
use install.bat
```

## Histórico de lançamentos

* 0.1.0
    * Versão Original Omnistack
* 0.2.0
    * Versão Modificada

## Quem sou?

Andrey Didoff - [AndreyDidoff.com.br](http://andreydidoff.com.br)

Um jovem amante da técnologia, que quer ver o mundo um lugar melhor. Amante por Open Source e acredita no mundo sem "Eu te ensino por X" e mais "Opa! Quero te ajudar, me add que eu te ajudao!". Infelizmente a vida de trabalhar e familia, faz eu não conseguir contribuir muito com as pessoas em foruns, mas se quiser posso ajudar você é só acessar meu site e lá tem como me achar!

## O que mais ú fiz?

Sempre estou em busca de projetos novs para aumentar meus conhecimentos e ajudar o máximo quem precisa, Se tem um projeto diferente estou aqui para te ajudar.

Conhecer mais projetos:
[GitHub](https://github.com/AndreyDN)
[Site](http://andreydidoff.com.br)

## Achou um erro nesse meu projeto?

Se você achar um erro, ou achar uma melhoria, me ajude a melhorar, deixe um comentário ou me prcure! Tenho certeza que podemos nos ajudar a crescer mais e mais.
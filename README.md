# Prática Conceitos Básicos do Typescript

Este pacote contém a uma série de funções utilitárias, principalmenete para manipulação de arrays e strings. Nenhuma destas funções estão implementadas, apenas assinadas, anotadas com comentários, que explicam sua função, e com testes de unidade implementados, para garantir a correta implementação dos requisitos.

Você deverá implementar cada uma destas funções, de forma que os testes de unidade sejam executados com sucesso. Para isso, você deverá seguir as instruções abaixo.

## Instalação

Todas as bibliotecas necessárias para esta prática já estão adicionadas ao projeto. Desta forma, para iniciar o projeto, basta executar o comando abaixo, estando na pasta raiz deste repositório:

```sh
npm install
```

## comandos

Este projeto nasce com alguns comandos uteis para o desenvolvedor. Abaixo, uma breve descrição deles:

- `build`: comando responsável por transformar o código typescript em javascript, compreensível para o interpretador de node. A princípio, este comando será necessário apenas para o momento da publicação de nosso pacote.
- `test`: comando utilizado para rodar os testes uma vez apenas. Util também para o momento de publicação deste pacote. 
- `test:watch`: comando utilizado para rodar os testes, de forma que a cada vez que seu código for alterado, ele será executado novamente, avaliando assim, a cada mudança, se sua solução está correta.
- `lint`: comando utilizado para avaliar se seu código está seguindo as boas práticas de desenvolvimento. Sugiro que você execute este comando sempre, antes de entregar sua solução. Ele vai garantir que você está fazendo um bom trabalho em qualidade do código entregue.
- `format`: este comando te ajudará garantir que as regras de formatação de código estão sendo seguidas. Rode ele para que todo seu código seja varrido e corrigido automaticamente.

Para executar qualquer um destes comandos, basta você executar, no terminal, o comando `npm run <nome-do-comando>`. Para executar o comando de build, por exemplo, você precisa executar um `npm run build`

## Estrutura do repositório

Este repositório possui dois diretórios principais: 
- `src`: pasta onde todas as funções deverão estar implementadas
- `test`: pasta onde se localizam os testes de unidade das funções. Falaremos disso no futuro...

## Sobre a dinâmica

Você precisará desenvolver o código para garantir que as funções implementadas funcionem corretamente.

Como foi dito acima, para cada função, foi criado um teste de unidade, que cobre o principal cenário de uso da função. Você deverá implementar todo o código necessário para que o teste seja executado com sucesso. Por exemplo, quando você implementar a função do método `camelCase`, disponível em `src/cammelCase.ts`, você deverá rodar os testes disponíveis em `test/camelCase.test.ts` através do comando:

```bash
npm run test:watch -- test/camelCase.test.ts
```

Este comando habilita o modo de execução contínua dos testes, e executa apenas os testes da função `camelCase`. Considere seu método pronto no momento que todos os testes forem executados com sucesso.

### Criando uma cópia do repositório

Você deverá acessar o repositório disponível no grupo principal de materiais para a nossa turma, no gitlab. No topo à direita, você encontrará um botão com a legenda `fork`. Este botão te permitirá criar uma cópia deste repositório, em seu próprio perfil do gitlab.

![Botão de fork](./.gitlab/docs/fork.png)

Clicando nele, o gitlab permitirá que você copie este repositório para sua conta. Após este processo, você poderá editar o código deste repositório da forma que você quiser, sem comprometer o código original.

![Criando o fork](./.gitlab/docs/criando-fork.png)

Depois disso, basta você clonar o repositório em seu computador e começar trabalhar!

### Fluxo básico do git

Caso você ainda não entenda a dinâmica básica de trabalho com git, não tem problema. Ainda teremos tempo para aprender seu funcionamento. Mas como você precisará entregar as suas atividades em seu repositório, vamos criar um fluxo básico de trabalho.

O primeiro passo para trabalhar com o git, é instala-lo em seu computador. Para isso, sugiro que você acesse o [site oficial do git](https://git-scm.com/downloads) e faça o download da versão adequada para seu sistema operacional. As instruções oficiais para a configuração necessária você encontrará [aqui](https://git-scm.com/book/pt-pt/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git). Caso ainda precise de ajuda, acredito que você não terá dificuldades em encontrar bons materiais na internet ([segue um exemplo](https://www.youtube.com/watch?v=POpFXae0NP0)).

#### Clonando o repositório

Clonar um repositório significa, de forma um pouco grosseira, copiar o conteúdo do gitlab para seu computador. Esta ação permitirá que você trabalhe em seu código, e depois envie as alterações de volta para o gitlab.

![Opções de clone](./.gitlab/docs/opcoes-clone.png)

O gitlab permite que você clone o repositório de diversas formas. Recomendo sempre que você utilize as opções de clone via terminal. Mas se você preferir, é possível também clonar o repositório via interface gráfica com seu editor de texto (nunca utilizei, mas acredito que funciona bem).

Seja qual opção você adotar, será necessário que você faça a configuração de sua chave ssh no gitlab, ou que você configure um token para acessar o repositório via https. O processo para ambas está documentado [aqui](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html). Se você estiver em dúvidas, acredito que via ssh seja a mais cômoda :).

#### Fluxo de trabalho

Você deverá implementar os exercícios um por vez. Cada vez que você encerrar o trabalho, você deverá submeter este novo código ao gitlab. Para isso, basta abrir seu terminal, na pasta deste projeto, e executar os comandos:

```sh
git add .
git commit -m 'mensagem super breve para explicar o que você fez'
git push origin main
```

Ainda aprenderemos detalhes sobre o fluxo do git. De forma geral, as instruções dadas acima são muito simplificadas, em relação ao que você deverá fazer na prática profissional. Mas por hora, elas serão suficientes para que você consiga entregar suas atividades.


## Dicas

Como foi dito acima, todas as funções possuem testes implementados. Esta modalidade de testes será explicada nas próximas aulas, mas já podemos fazer bom uso deles. Para que você implemente seu método da forma mais fácil possível, sugiro que siga o passo-a-passo abaixo:

- baixar o pacote;
- executar o comando de instalação dos pacotes do projeto (`npm install`);
- colocar os testes em execução, com o comando `npm run test:watch <caminho-do-arquivo-de-tetes>`;
  - ex.: para rodar apenas os testes da função `camelCase`, usar o comando `npm run test:watch test/camelCase.test.ts`
- os testes deverão estar quebrados. Não se preocupe, este é o esperado.
- você deverá agora escrever sua função (no mesmo exemplo, alterar o arquivo `src/camelCase.ts`), e implementar o código, de forma que seu teste funcione corretamente.

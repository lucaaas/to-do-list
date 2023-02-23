# TODO List

Esta é uma simples aplicação para a criação de uma lista de afazeres construída
com Svelte, NestJS e Postgres.

Antes de iniciar o desenvolvimento da aplicação, os requisitos foram documentos
em forma de issues utilizando [Histórias de usuário](http://extremeprogramming.org/rules/userstories.html).

Todas as histórias levantadas podem ser encontradas [aqui](https://github.com/lucaaas/to-do-list/issues?q=is%3Aissue+label%3Aenhancement+).
As concluídas podem ser encontradas [aqui](https://github.com/lucaaas/to-do-list/issues?q=is%3Aissue+label%3Aenhancement+is%3Aclosed).
E, finalmente, os _bugs_ conhecidos foram listados [aqui](https://github.com/lucaaas/to-do-list/issues?q=is%3Aissue+label%3Abug).

### Recursos

- Adicionar novos itens à lista;
- Alterar o status de concluído de um item;
- Editar e apagar itens;

### Instalação

#### Frontend

1. Clonar o repositório  
    ```bash
      git clone https://github.com/lucaaas/to-do-list.git
    ```
2. Navegar até o diretório do projeto  
    ```bash
      cd frontend
    ```
3. Instalar as dependências
    ```bash
      npm install
    ```
4. Iniciar o servidor de desenvolvimento
    ```bash
      npm run dev
    ```
5. Abrir o app no servidor  
   `localhost:5173`

### Backend

1. Clonar o repositório
    ```bash
      git clone https://github.com/lucaaas/to-do-list.git
    ```
2. Navegar até o diretório do projeto
    ```bash
      cd backend
    ```
3. Preparar o ambiente
    ```bash
      docker-compose build
    ```
4. Iniciar o servidor
    ```bash
      docker-compose up 
    ```
    O comando acima iniciará o servidor no link `localhost:3000`.


### Ciclo de desenvolvimento

Após o levantamento e priorização dos requisitos, o desenvolvimento seguiu as seguintes etapas:

1. Criação de uma branch a partir da _main_ para o desenvolvimento da issue, no formato _feature/#\<numero_da_issue>_;
2. Desenvolvimento da issue;
3. _Pull request_ para atualização da _main_.

A mensagem de cada commit possui o formato  
    `descrição do que foi feito. #<numero_da_issue>`  

Dessa forma, é possível ver todos os commits referentes a uma determinada issue na própria página da issue.

Para o _pull request_ foi adotada a estratégia _squash and merge_. Assim, na branch principal, existe apenas
um _commit_ por issue desenvolvida, facilitando o processo de desfazer um commit, se necessário.
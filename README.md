# Teste Front-end

## Descrição do Projeto

Este projeto consiste em duas aplicações micro-frontend (`mf_drawer` e `mf_videos`) e um Backend For Frontend (BFF) que interage com a API do YouTube para buscar vídeos. A aplicação `mf_drawer` contém links para navegar entre `Vídeos` e `Favoritos`, enquanto a aplicação `mf_videos` permite a busca, listagem e marcação de vídeos como favoritos.

## Estrutura do Projeto

```sh
├── bff/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── tests/
│       └── server.test.js
├── mf_drawer/
│   ├── Dockerfile
│   ├── package.json
│   ├── app.js
│   └── public/
│       ├── index.html
│       ├── styles.css
│       └── app.js
└── mf_videos/
│   ├── Dockerfile
│   ├── package.json
│   ├── app.js
│   └── public/
│        ├── index.html
│        ├── styles.css
│        └── app.js
├── docker-compose.yml
├── package-lock.json
├── package.json
```

## Instruções para Configurar a Chave de API

1. **Crie um arquivo `.env` no diretório `bff`:**
    ```sh
    cd bff
    touch .env
    ```
    Para salvar e sair do editor:

    Usando nano:
    - Pressione Ctrl + O para salvar o arquivo.
    - Pressione Enter para confirmar.
    - Pressione Ctrl + X para sair do editor.

    Usando vim:
    - Pressione Esc para sair do modo de inserção.
    - Digite :wq e pressione Enter para salvar e sair do editor

2. **Adicione a chave de API ao arquivo `.env`:**
    ```env
    YOUTUBE_API_KEY=your_actual_api_key_here
    ```

3. **Certifique-se de que o arquivo `.env` esteja listado no `.gitignore` para evitar que ele seja versionado:**
    ```plaintext
    .env
    ```

Com essas instruções, você garante que a chave de API não seja exposta publicamente no repositório, mantendo a segurança e a privacidade do projeto.

## Instruções para Compilar e Rodar o Projeto

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js instalado (para executar testes locais)

### Passos para Rodar

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/jpvilarinho/frontend-test.git
    cd frontend-test
    ```

2. **Substitua a chave da API do YouTube:**
   - No arquivo `bff/server.js`, substitua `YOUR_YOUTUBE_API_KEY` pela sua chave de API do YouTube.

3. **Construir e iniciar os containers Docker:**
    ```sh
    docker-compose up --build
    ```

4. **Acessar as aplicações:**
    - `MF_DRAWER`: [http://localhost:3000](http://localhost:3000)
    - `MF_VIDEOS`: [http://localhost:3001](http://localhost:3001)
    - `BFF`: A BFF não é acessada diretamente pelo navegador, mas está disponível na porta 3002 para servir as requisições da API.

### Rodar os Testes

1. **Instalar as dependências de desenvolvimento no diretório `bff`:**
    ```sh
    cd bff
    npm install
    ```

2. **Executar os testes:**
    ```sh
    npm test
    ```

## Detalhes Técnicos

### MF_DRAWER

- Aplicação micro-frontend com links para navegar entre `Vídeos` e `Favoritos`.
- Servida usando o servidor Express.

### MF_VIDEOS

- Aplicação micro-frontend para busca, listagem e marcação de vídeos como favoritos.
- Servida usando o servidor Express.

### BFF

- Backend que interage com a API do YouTube para buscar vídeos.
- Usa o servidor Express.
- Utiliza o pacote `axios` para fazer requisições HTTP.

## Dependências

- Express: ^4.17.1
- Axios: ^0.21.1
- Jest: ^29.7.0 (para testes)

## Observações

- Certifique-se de que a chave de API do YouTube esteja ativa e corretamente configurada.
- O design é responsivo e pode ser ajustado conforme necessário.
- Navegação por rotas foi implementada conforme especificado.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
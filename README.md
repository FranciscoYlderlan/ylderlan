
# Portfólio

Este é um projeto de portfólio desenvolvido utilizando React, Vite e Styled-Components. Além disso, foram utilizadas as bibliotecas React-Toastify, Framer Motion, React Icons e Radix-UI/React-Hover-Card para estilização de componentes. As APIs EmailJS e GitHub API foram consumidas para alimentar automaticamente o portfólio com os projetos públicos do GitHub, nos quais você é o criador.


## Funcionalidades

- Exibição automática dos projetos públicos do GitHub
- Envio de e-mails através do formulário de contato, utilizando EmailJS
- Animações e transições suaves com Framer Motion e CSS
- Ícones personalizados com React Icons
- Cards de projeto interativos com hover utilizando Radix-UI/React-Hover-Card


## Instalação

1. Clone este repositório:

```bash
    git clone https://github.com/franciscoylderlan/ylderlan.git
```
2. Acesse a pasta do projeto:

```bash
    cd ylderlan
```
3. Instale as dependências do projeto:

```bash
    npm install
```

## Configuração

Antes de executar o projeto, é necessário configurar algumas informações.

### Configuração do GitHub

1. Crie um token de acesso pessoal no GitHub para acessar a API. Você pode seguir as instruções do Guia de criação de token de acesso pessoal do GitHub.

2. Copie o token de acesso pessoal criado.

3. Na raiz do projeto, crie um arquivo .env.local e adicione o seguinte conteúdo:

```bash
    REACT_APP_GITHUB_TOKEN=<seu-token-de-acesso-pessoal>
```

Substitua <seu-token-de-acesso-pessoal> pelo token que você copiou no passo anterior.


### Configuração do EmailJS

1. Acesse o EmailJS e crie uma conta.

2. No painel de controle do EmailJS, crie um novo serviço.

3. Anote o Service ID e o Template ID do serviço criado.

4. Na raiz do projeto, no arquivo .env.local, adicione as seguintes variáveis de ambiente:

```bash
    REACT_APP_EMAILJS_SERVICE_ID=<seu-service-id>
    REACT_APP_EMAILJS_TEMPLATE_ID=<seu-template-id>
```

Substitua <seu-service-id> e <seu-template-id> pelos valores correspondentes do serviço e do template que você criou no EmailJS.


## Executando o projeto

Após a instalação e configuração, você pode executar o projeto localmente.

Na pasta do projeto, execute o seguinte comando:

```bash
    npm run dev
```



## Licença

Este projeto está licenciado sob a Licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

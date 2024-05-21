<img src="./.github/preview.png"/>

# plantPeace🌱
O plantPeace é um site de plantas fictícias, nele você encontra 4 páginas: Home, Register, Products e About Us, todas seguindo os designs e requisitos dados no [Notion](https://dramatic-water-ade.notion.site/Desafio-2-Semana-8-956e3babfbc04f9aa29dde186cddaba5). A página Home é a página inicial após o login, a página Register é onde você cadastra uma planta para aparecer como um produto no site nas páginas Home e Products. A página About Us conta um pouco sobre cada desenvolvedor do projeto. Durante a criação do site, foi utilizado o  [Trello](https://trello.com/b/93wJ5xlD/challenge-02-pb) para melhor organização da equipe.

## Requisitos ✔️
### OBRIGATÓRIOS:
- [x] Utilize TypeScript para tipagem;
- [x] Utilize Clerk, uma biblioteca para lidar com a autenticação do usuário. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;
- [x] O ícone do perfil do usuário no componente de Header precisa ser importado do Clerk;
- [x] [React Router](https://reactrouter.com/en/main) para criação das rotas, sendo que é necessário proteger as rotas;
- [x] Crie controles deslizantes para exibição das plantas nas sessões da Home, em formato de Carrossel. Recomendação de biblioteca: [Splide](https://splidejs.com/). [Splide for React docs.](https://splidejs.com/integration/react-splide/) **Sinta-se à vontade para usar a biblioteca de sua preferência;**
- [x] [JSON Sever](https://github.com/typicode/json-server) para simular um database (abaixo contém um exemplo de como deve ficar a estrutura do JSON para as plantas);
- [x] Criar, no mínimo, um método POST e um método GET para preencher o “database” e ler as informações;
- [x] Ao preencher o formulário de registro, as plantas devem ser renderizadas em tempo real nas duas sessões de plantas da página inicial;
- [x] Caso uma planta tenha desconto, ela será renderizada na seção “Plants in Sale”. Você precisa usar a porcentagem do banco de dados JSON Server para calcular o desconto e exibir o preço final;
- [x] Os campos de formulário devem ser todos validados;
- [x] Ao clicar no cartão de uma planta, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- [x] Você precisa criar uma página “About Us” que contenha informações sobre os desenvolvedores. Use sua imaginação para criar esta página, basta usar a mesma paleta de cores;
- [x] A aplicação deve estar responsiva;
- [x] Crie um repositório privado em seu Github e adicione os instrutores como colaboradores do projeto;
- [x] Adicione um README ao seu projeto;
- [x] Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado.

### OPCIONAIS:
- [x] Aplicar efeitos de Hover;
- [x] Criar uma página (’Products’, que está na Header) para renderizar todas as plantas que estão em seu database.

## Tecnologias 💻
* React
* TypeScript
* Tailwind CSS
* Splide
* Clerk

## Instalação ⚙️
Faça o clone do projeto através do terminal de sua IDE de preferência
```bash
git clone https://github.com/Aldovani/challenge-02-pb.git .
```

Após isso instale as dependências necessárias
```bash
npm install
```

Instale também o tailwindcss-filters
```bash
npm i tailwindcss-filters
```

Depois rode a api
```bash
npm run db
```

Caso de erro, dê um mkdir na pasta onde está o erro de path e rode a api novamente
Exemplo:
```bash
mkdir C:\Users\beatr\AppData\Roaming\npm
```

Enquanto a api está rodando, abra outro terminal e rode o comando para abrir o projeto em sua máquina
```bash
npm run dev
```

## Apresentação 🎬
### Sign-In
![SignIn](https://github.com/Biazanchin/plantPeace/assets/165194563/a197ae01-32ac-4507-992c-79b29e92d2b3)

## Clerk
![Clerk](https://github.com/Biazanchin/plantPeace/assets/165194563/3d7836cf-2883-4878-a325-3b07bcfad6dc)

### Home


https://github.com/Biazanchin/plantPeace/assets/165194563/b3369a76-41a7-487b-add3-fe89b8ee9c2d


### Register
![Register](https://github.com/Biazanchin/plantPeace/assets/165194563/5010c30b-3593-40bc-a21d-fec0093a1f4a)

### Products Page
![ProductsPage](https://github.com/Biazanchin/plantPeace/assets/165194563/d620fcb2-f21a-4635-8ed9-ec3df110daee)

### Products


https://github.com/Biazanchin/plantPeace/assets/165194563/36fbeffa-c575-4120-ba9d-247df9a8fafc


### About Us
![AboutUs](https://github.com/Biazanchin/plantPeace/assets/165194563/e9c55640-3bc8-461d-9f6d-40d00d0b5258)

### Error
![Error](https://github.com/Biazanchin/plantPeace/assets/165194563/0bb16270-5c0a-484a-abe3-44d6ccb3c2a4)

## Desenvolvedores 👨‍💻
### [Aldovani Henrique da Costa](https://github.com/Aldovani)
### [Beatriz Zanchin Messias](https://github.com/Biazanchin)
### [Camila Marques de Paula](https://github.com/itsmecamila)
### [Everton Ceciliano De Souza](https://github.com/EvertonCeciliano)
### [Talita Berjas Favore](https://github.com/itsmecamila)

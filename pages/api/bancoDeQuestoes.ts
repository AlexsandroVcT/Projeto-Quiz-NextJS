import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'O que é Next.js?', [
        RespostaModel.errada('Um framework para desenvolvimento de apps mobile'),
        RespostaModel.errada('Um banco de dados relacional'),
        RespostaModel.certa('Um framework para desenvolvimento de aplicações web em React'),
        RespostaModel.errada('Um sistema operacional'),
    ]),
    new QuestaoModel(202, 'Qual a versão atual do Next.js?', [
        RespostaModel.errada('10.0'),
        RespostaModel.errada('11.0'),
        RespostaModel.errada('12.0'),
        RespostaModel.certa('13.0'),
    ]),
    new QuestaoModel(203, 'O que é o getStaticProps?', [
        RespostaModel.certa('Uma função do Next.js que permite a geração de conteúdo estático durante a fase de build'),
        RespostaModel.errada('Um método do React que é executado após a montagem do componente'),
        RespostaModel.errada('Um hook do React para gerenciamento de estados'),
        RespostaModel.errada('Uma função do Next.js para renderização do lado do servidor'),
    ]),
    new QuestaoModel(204, 'Qual é o comando para iniciar um projeto Next.js?', [
        RespostaModel.errada('npm create-react-app'),
        RespostaModel.errada('npm init'),
        RespostaModel.certa('npx create-next-app'),
        RespostaModel.errada('npx init-next-app'),
    ]),
    new QuestaoModel(205, 'O que é o getStaticPaths??', [
        RespostaModel.errada('Um hook do React para gerenciamento de estados'),
        RespostaModel.certa('Uma função do Next.js que permite a geração de páginas estáticas dinâmicas a partir de dados externos'),
        RespostaModel.errada('Uma função do Next.js para renderização do lado do servidor'),
        RespostaModel.errada('Um método do React que é executado após a montagem do componente'),
    ]),
    new QuestaoModel(206, 'Qual é o arquivo onde definimos as rotas no Next.js?', [
        RespostaModel.certa('pages/api/[nome-da-rota].ts'),
        RespostaModel.errada('src/routes.ts'),
        RespostaModel.errada('pages/routes.ts'),
        RespostaModel.errada('next/routes.ts'),
    ]),
    new QuestaoModel(207, 'Qual é a forma mais comum de se estilizar componentes no Next.js?', [
        RespostaModel.errada('Utilizando CSS inline'),
        RespostaModel.errada('Utilizando arquivos CSS globais'),
        RespostaModel.certa('Utilizando módulos CSS'),
        RespostaModel.errada('Não é possível estilizar componentes no Next.js'),
    ]),
    new QuestaoModel(208, 'Qual é o comando para iniciar um servidor de desenvolvimento no Next.js?', [
        RespostaModel.errada('npm start'),
        RespostaModel.errada('npm run server'),
        RespostaModel.errada('npm run dev'),
        RespostaModel.certa('npm run start'),
    ]),
    new QuestaoModel(209, 'O que significa SSR em Next.js?', [
        RespostaModel.errada('Server Side Rendering'),
        RespostaModel.errada('Single-Page Application'),
        RespostaModel.errada('Site Search Results'),
        RespostaModel.certa('Server Side Rendering'),
    ]),
    new QuestaoModel(210, 'Qual a biblioteca utilizada pelo Next.js para gerenciamento de rotas?', [
        RespostaModel.errada('React Router'),
        RespostaModel.errada('Next Navigation'),
        RespostaModel.errada('React Navigation'),
        RespostaModel.certa('Next Router'),
    ]),
    new QuestaoModel(211, 'Qual a extensão utilizada para os arquivos de estilo no Next.js?', [
        RespostaModel.errada('.css'),
        RespostaModel.errada('.scss'),
        RespostaModel.errada('.less'),
        RespostaModel.certa('.module.css'),
    ]),
    new QuestaoModel(212, 'Qual o nome do método utilizado para definir o título da página no Next.js?', [
        RespostaModel.errada('setPageTitle'),
        RespostaModel.errada('setTitle'),
        RespostaModel.errada('setPageName'),
        RespostaModel.certa('useEffect'),
    ]),
    new QuestaoModel(213, 'Qual o nome do hook utilizado para realizar requisições HTTP no Next.js?', [
        RespostaModel.errada('useEffect'),
        RespostaModel.errada('useRef'),
        RespostaModel.errada('useContext'),
        RespostaModel.certa('useEffect'),
    ]),
    new QuestaoModel(214, 'Qual a principal característica do framework Next.js?', [
        RespostaModel.errada('Não possui suporte para SSR'),
        RespostaModel.errada('Não possui integração com o React'),
        RespostaModel.errada('Não permite o uso de CSS Modules'),
        RespostaModel.certa('Possui suporte para SSR'),
    ]),
    new QuestaoModel(215, 'Qual é a versão atual do Next.js?', [
        RespostaModel.errada('10'),
        RespostaModel.errada('11'),
        RespostaModel.errada('12'),
        RespostaModel.certa('13'),
    ]),
    new QuestaoModel(216, 'Qual o comando para criar um novo projeto com o Next.js?', [
        RespostaModel.errada('create-react-app'),
        RespostaModel.errada('yarn new nextjs'),
        RespostaModel.errada('nextjs new'),
        RespostaModel.certa('yarn create next-app'),
    ]),
]

export default questoes
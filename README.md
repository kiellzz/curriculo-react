README & Currículo — Ezequiel Borges
Currículo Interativo em React Native
Este projeto é um currículo interativo desenvolvido em React Native usando Expo e React Native
Paper. Ele exibe informações sobre formação acadêmica, experiências, habilidades e contatos de
Ezequiel Borges.
Resumo Profissional
Estudante de Análise e Desenvolvimento de Sistemas (4º período), em busca do primeiro estágio ou
oportunidade como desenvolvedor para aplicar os conhecimentos adquiridos em faculdade e projetos
acadêmicos.
Proficiência em: JavaScript, TypeScript, Node.js, React, MongoDB
Ferramentas: GitHub, Figma
Competências interpessoais: trabalho em equipe, comunicação e aprendizado rápido.
Experiências
Faculdade Senac Pernambuco — Designer de Interface
Out/2025 - Dez/2025
Criação da interface das telas mobile do Projeto SIOB, focando na experiência do usuário para o
Projeto Integrador do 3º período.
Faculdade Senac Pernambuco & Accenture Brasil — Desenvolvedor
Fev/2025 - Jun/2025
Residência acadêmica: desenvolvimento de plataforma web para auxiliar agricultores no
planejamento de rotação de culturas usando computação quântica (Quantum Annealing).
Implementação de telas em HTML, CSS e JS, promovendo produtividade e sustentabilidade.
Projeto SIOB — Sistema Bombeiros
2025.2
Sistema desenvolvido para modernizar e otimizar o registro de ocorrências do corpo de
bombeiros.
Formação Acadêmica
Faculdade Senac Pernambuco
Bacharelado em Análise e Desenvolvimento de Sistemas
Ago/2024 - Dez/2026
Cursos complementares:
Hooks e Fundamentos do React | SENAC GrowUp 2025.2
HTTP e Performance | SENAC GrowUp 2025.2
•
•
•
1.
2.
3.
•
•
•
•
1
Habilidades Técnicas
Linguagens: JavaScript, TypeScript
Frameworks: React, React Native, Node.js
Banco de Dados: MongoDB
Ferramentas: Git, GitHub, Figma
Idiomas: Inglês avançado
Contato
 ezequielborgesdev@gmail.com
LinkedIn
GitHub
Instruções para Rodar o Projeto
Pré-requisitos
Node.js (versão LTS recomendada)
Expo CLI (opcional, mas recomendado)
npm install -g expo-cli
VS Code ou outro editor de código.
Smartphone com Expo Go ou emulador Android/iOS.
Configuração
Criar projeto Expo:
npx create-expo-app meu-curriculo
cd meu-curriculo
Instalar dependências:
npm install react-native-paper
npx expo install react-native-vector-icons
Estrutura de pastas:
/meu-curriculo
 /assets
 foto.jpeg ← foto do perfil
 /screens
 ProfileScreen.js ← código do currículo
 App.js
Configurar App.js :
•
•
•
•
•
•
•
•
1.
2.
3.
4.
1.
1.
1.
1.
2
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import ProfileScreen from "./screens/ProfileScreen";
export default function App() {
return (
<PaperProvider>
<ProfileScreen />
</PaperProvider>
);
}
Certifique-se que a imagem está em assets/foto.jpeg e o caminho correto em
ProfileScreen.js :
const imageSource = require("../assets/foto.jpeg");
Rodando o projeto
No terminal, dentro da pasta do projeto:
npx expo start
O Metro Bundler abrirá no navegador.
Execute no celular com Expo Go ou em emulador Android/iOS.
Hot Reload aplica alterações automaticamente.

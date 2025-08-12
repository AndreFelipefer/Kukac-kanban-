# 📌 Testes Cypress — Kanban Dusky Five

[![Cypress](https://img.shields.io/badge/Cypress-12.17.3-04C38E?logo=cypress&logoColor=white)](https://www.cypress.io/)  
[![Node.js](https://img.shields.io/badge/Node.js-v16%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)](#)  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  

Este projeto contém uma suíte de testes automatizados com **Cypress** para validar funcionalidades da aplicação Kanban disponível em [https://kanban-dusky-five.vercel.app/](https://kanban-dusky-five.vercel.app/).

---

## 🖼 Preview do Site Testado

<img width="1900" height="861" alt="image" src="https://github.com/user-attachments/assets/4457264e-f1ab-4254-9a62-060d145a94f8" />

*Interface principal da aplicação Kanban testada.*

---

## 📋 Índice

- [Visão Geral](#-visão-geral)  
- [Pré-requisitos](#-pré-requisitos)  
- [Instalação](#-instalação)  
- [Como Executar os Testes](#-como-executar-os-testes)  
- [Cobertura dos Testes](#-cobertura-dos-testes)  
- [Estrutura dos Testes](#-estrutura-dos-testes)

---

## 📖 Visão Geral

A suíte de testes cobre aspectos essenciais da aplicação Kanban, incluindo:

- Acesso à página inicial  
- Alternância entre modos claro e escuro  
- Verificação dos títulos das colunas Kanban  
- Criação e exclusão de colunas  
- Criação e exclusão de tarefas  
- Adição de tags às tarefas  
- Alteração do nome das tarefas  
- Movimentação de tarefas entre colunas via drag-and-drop  
- Testes de responsividade em várias resoluções de tela (mobile, tablet, desktop)

---

## 🛠 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v16+ recomendado)  
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 📦 Instalação

Clone o repositório e instale as dependências com:

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd <PASTA_DO_PROJETO>
npm install
# ou
yarn install


🚀 Como Executar os Testes
Modo interativo (Cypress GUI):
bash
Copiar
Editar
npx cypress open
Modo headless (linha de comando):
bash
Copiar
Editar
npx cypress run
✅ Cobertura dos Testes
Este conjunto de testes automatizados inclui:

Acessar a página Kanban — validação da URL da página inicial.

Modo claro/escuro — alternância de tema.

Títulos das colunas — presença de "To Do", "In Progress" e "Done".

Criar coluna — adiciona nova coluna com nome específico.

Excluir coluna — remove coluna adicionada.

Criar tarefa — adiciona nova tarefa na coluna desejada.

Excluir tarefa — remove a tarefa adicionada.

Inserir tags em tarefa — adiciona múltiplas tags com cores diferentes.

Alterar nome da tarefa — edita nome de tarefa configurada.

Mover tarefa entre colunas — arrastar e soltar tarefa de uma coluna para outra.

Responsividade — testes de exibição e scroll horizontal em diversas resoluções.

📂 Estrutura dos Testes
Todos os testes estão organizados em um único arquivo spec com a seguinte estrutura:

text
Copiar
Editar
describe("Página Kanban", () => {
  beforeEach(() => { ... })   // Configurações antes de cada teste
  it("Deve acessar a página inicial do Kanban", () => { ... })
  it("Alternar entre modo claro e escuro", () => { ... })
  it("Verificar títulos das colunas", () => { ... })
  it("Criar uma nova coluna", () => { ... })
  it("Excluir uma coluna", () => { ... })
  it("Criar uma nova tarefa", () => { ... })
  it("Excluir uma nova tarefa", () => { ... })
  it("Inserir tags em uma tarefa - Tag X", () => { ... }) // Repetido para cada tag
  it("Alterar nome da tarefa", () => { ... })
  it("Mover tarefa entre colunas", () => { ... })
  it("deve verificar responsividade em diferentes resoluções", () => { ... })
  it("deve verificar a responsividade em diferentes tamanhos de tela", () => { ... })
});
📜 Licença
Este projeto está licenciado sob a licença MIT — veja o arquivo LICENSE para mais detalhes.

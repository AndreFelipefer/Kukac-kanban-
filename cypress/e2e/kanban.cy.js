// Testes automatizados para a página Kanban
describe("Página Kanban", () => {
  // URL da aplicação que será testada
  const URL = "https://kanban-dusky-five.vercel.app/";

  // Antes de cada teste: define o tamanho da tela e acessa a página
  beforeEach(() => {
    cy.viewport(1920, 1080); // Define resolução Full HD
    cy.visit(URL, { failOnStatusCode: false }); // Acessa o site mesmo que o status não seja 200
  });

  // Teste para verificar se a página inicial foi carregada corretamente
  it("Deve acessar a página inicial do Kanban", () => {
    cy.url().should("eq", URL);
  });

  // Teste para alternar entre o modo claro e escuro
  it("Alternar entre modo claro e escuro", () => {
    cy.get(".react-switch-bg").should("be.visible"); // Verifica se o botão de troca está visível

    for (let i = 0; i < 2; i++) {
      cy.get(".react-switch-bg").click(); // Alterna o modo
      cy.wait(300); // Aguarda 300ms entre as trocas
    }
  });

  // Teste para verificar se as colunas padrão estão visíveis
  it("Verificar títulos das colunas", () => {
    const colunas = ["To Do", "In Progress", "Done"];
    colunas.forEach((coluna) => {
      cy.contains(coluna).should("be.visible");
    });
  });

  // Teste para criar uma nova coluna
  it("Criar uma nova coluna", () => {
    cy.get(".sc-jqUVSM").click(); // Abre modal de criação
    cy.get(".sc-gsnTZi").type("Nova tarefa"); // Digita o nome da nova coluna
    cy.get(".btn").click(); // Confirma criação

    cy.contains("Nova tarefa").should("be.visible"); // Verifica se foi criada
  });

  // Teste para excluir uma coluna recém-criada
  it("Excluir uma coluna", () => {
    cy.get(".sc-jqUVSM").click();
    cy.get(".sc-gsnTZi").type("Nova tarefa");
    cy.get(".btn").click();
    cy.wait(300);
    cy.contains("Nova tarefa")
      .parents("[class*=sc-]") // Sobe até o container da coluna
      .find("svg") // Localiza o ícone de exclusão
      .eq(14) // Seleciona o índice correto do ícone
      .click(); // Clica para excluir
  });

  // Teste para criar uma nova tarefa
  it("Criar uma nova tarefa", () => {
    cy.contains("Adicionar Tarefa").click(); // Abre modal de criação de tarefa
    cy.get(".sc-gsnTZi").type("Tarefa 2"); // Digita o nome
    cy.get(".btn").click(); // Confirma criação

    cy.contains("Tarefa 2").should("be.visible");
  });

  // Teste para excluir uma tarefa recém-criada
  it("Excluir uma nova tarefa", () => {
    cy.contains("Adicionar Tarefa").click();
    cy.get(".sc-gsnTZi").type("Tarefa 2");
    cy.get(".btn").click();
    cy.xpath("(//*[name()='svg' and contains(@class,'trash')])[5]")
      .invoke("show") // Garante que o botão está visível
      .click(); // Exclui a tarefa
  });

  // Testes para inserir diferentes tags em uma tarefa
  [
    { selector: '#\\32 Color', text: 'Tag de teste' },
    { selector: '#\\31 Color', text: 'Tag de teste1' },
    { selector: '#\\30 Color', text: 'Tag de teste2' }
  ].forEach(({ selector, text }, index) => {
    it(`Inserir tags em uma tarefa - Tag ${index + 1}`, () => {
      cy.get(':nth-child(4) > .content > footer').click(); // Abre modal de tags
      cy.get(selector).click(); // Seleciona cor/tag
      cy.get('section > .custom-input > p').type(text); // Digita nome da tag
      cy.get('.btn').click(); // Salva tag
      cy.get('.sc-hKMtZM').click(); // Fecha modal
    });
  });

  // Teste para alterar o nome de uma tarefa
  it('Alterar nome da tarefa', () => {
    cy.get(':nth-child(4) > .content > header > p').click(); // Abre edição
    cy.get('#Template\\ de\\ e-mail\\ marketingModalTitle > .custom-input > p')
      .type('Tarefa de teste'); // Novo nome
    cy.get('.btn').click(); // Salva
    cy.contains('Tarefa de teste').should('be.visible'); // Verifica alteração
    cy.get('body').click(0, 0); // Clica fora para fechar modal
  });

  // Teste para mover uma tarefa entre colunas
  it("Mover tarefa entre colunas", () => {
    cy.get(".sc-gKXOVf.iRhPWi").eq(3) // Seleciona tarefa
      .drag(".sc-gKXOVf.iRhPWi:eq(4)"); // Move para outra coluna
  });

  // Teste de responsividade em múltiplas resoluções
  it('deve verificar responsividade em diferentes resoluções', () => {
    const viewports = [
      { width: 320, height: 568, name: 'iPhone 5' },
      { width: 375, height: 667, name: 'iPhone 6/7/8' },
      { width: 414, height: 896, name: 'iPhone XR' },
      { width: 768, height: 1024, name: 'iPad' },
      { width: 1024, height: 768, name: 'iPad Landscape' },
      { width: 1280, height: 720, name: 'Desktop HD' },
      { width: 1920, height: 1080, name: 'Desktop FHD' }
    ];

    viewports.forEach((viewport) => {
      cy.viewport(viewport.width, viewport.height);
      cy.wait(1000);

      cy.get('body').should('be.visible');
      cy.contains('To Do').should('be.visible');

      // Verifica se há scroll horizontal
      cy.window().then((win) => {
        const hasHorizontalScroll = win.document.body.scrollWidth > win.innerWidth;
        if (hasHorizontalScroll && viewport.width >= 768) {
          cy.log(`Scroll horizontal detectado em ${viewport.name}`);
        }
      });
    });

    cy.viewport(1280, 720); // Retorna para resolução padrão
  });

  // Teste simples de responsividade alternando tamanhos fixos
  it('deve verificar a responsividade em diferentes tamanhos de tela', () => {
    // Desktop
    cy.viewport(1280, 720);
    cy.wait(1000);

    // Tablet
    cy.viewport(768, 1024);
    cy.wait(1000);

    // Mobile
    cy.viewport(375, 667);
    cy.wait(1000);

    // Verifica se o conteúdo está visível
    cy.get('body').should('be.visible');

    // Volta para desktop
    cy.viewport(1280, 720);
  });
});

describe('Formulário cadastro', () => {
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click()
    cy.getByData('nome-input').type('raquel')
    cy.getByData('email-input').type('quequel@email.com')
    cy.getByData('senha-input').type('45678910')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
   
    })
    })

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal')
  })
  
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('vantagens').contains('Vantagens do nosso banco')
  })
  
  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('cartao').contains('Conta e cartão gratuitos')
  })

  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })

  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sacar').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })

  it('Deve renderizar h3 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('pontos').contains('Programa de pontos')
  })
  it('Deve renderizar p com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('pontos').contains('Programa de pontos')
})
})
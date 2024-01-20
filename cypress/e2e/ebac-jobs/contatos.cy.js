/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(()=>{
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    

    it('Deve levar o usuário até o formulário de inscrição', () => {
        
        cy.get('input').should('have.length', 3)
        cy.screenshot("tela-inscricao")
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('[type="text"]').type('Ariel Chaves Escafura')
        cy.get('[type="email"]').type('chavesariel1903@gmail.com')
        cy.get('[type="tel"]').type('21 964300659')
        cy.get('.adicionar').first().click()
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()


        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot("tela-inscricao-preenchido")
    })
})
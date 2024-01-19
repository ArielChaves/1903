/// <reference types="cypress" />

describe('Lista de contatos', () => {
    beforeEach(()=>{
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    

    it('Deve levar o usuário até o formulário de inscrição', () => {
        
        cy.get('input').should('have.length', 3)
        cy.screenshot("tela-inscricao")
    })

    it('Deve preencher o formulário de contatos', () => {
        cy.get('.adicionar').first().click()
        cy.get('.edit')
        cy.get('.delete')

        cy.screenshot("tela-inscricao-preenchido")
    })
})

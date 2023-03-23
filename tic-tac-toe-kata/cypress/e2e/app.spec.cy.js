describe('In the tic tac toe game with EASY mode', () => {
    it('the player should win', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Start Game').click()
        cy.contains('Scoreboard')
        cy.get('#ai_level').select('easy')
        cy.get('#block_0').click()
        cy.get('#block_4').click()
        cy.get('#block_8').click()
        cy.get('#playerstat1').contains('1')
    })
    it('the player should lose', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Start Game').click()
        cy.contains('Scoreboard')
        cy.get('#ai_level').select('easy')
        cy.get('#block_1').click()
        cy.get('#block_2').click()
        cy.get('#block_5').click()
        cy.get('#block_7').click()
        cy.get('#computerstat1').contains('1')
    })
})
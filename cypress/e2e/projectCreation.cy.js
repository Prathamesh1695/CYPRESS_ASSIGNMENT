
require ('@4tw/cypress-drag-drop')
describe('Verifying project creation functionalty', () => {
  it('Validate project creation functionality and drag n drop action', () => {
    
    const dataTransfer = new DataTransfer();

    cy.visit('https://unergia-saas-staging-solarladder.vercel.app/login')

    cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[1]/input[1]").type('solarladdertest787@yopmail.com')

    cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[2]/input[1]").type("password")

    cy.get('.ant-btn-text').click()
    cy.wait(2000)

    cy.get('.col-9 > .MuiButton-root > .MuiButton-label').click() 

     cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]").type('5')

     cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[2]/form[1]/input[1]").type('Max')

     cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[2]/form[1]/div[2]/input[1]").type('9999999999')

     cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[2]/form[1]/input[3]").type('Mumbai')

     cy.xpath("//body/div[@id='root']/div[2]/div[2]/div[2]/div[1]/div[2]/form[1]/div[6]/button[1]").click() // Add Praject
     cy.wait(2000)

    const draggable = cy.get('[title="Enquiry"] > .sc-jrcTuL > .smooth-dnd-container > :nth-child(1)')
    const dragzone = cy.get('[title="Site Visit"] > .sc-jrcTuL > .smooth-dnd-container > :nth-child(1)')

     cy.get('[title="Enquiry"] > .sc-jrcTuL > .smooth-dnd-container > :nth-child(1)').trigger("dragstart", {dataTransfer})
     cy.get('[title="Site Visit"] > .sc-jrcTuL > .smooth-dnd-container > :nth-child(1)').trigger("drop", {dataTransfer})
     cy.get('[title="Enquiry"] > .sc-jrcTuL > .smooth-dnd-container > :nth-child(1)').trigger("dragend")
     cy.wait(2000)
  })
})
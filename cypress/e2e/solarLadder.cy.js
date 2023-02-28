describe('Verifying Login functionalty', () => {
  it('Validate login functionality', () => {
    
      cy.visit('https://unergia-saas-staging-solarladder.vercel.app/login')

      cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[1]/input[1]").type('solarladdertest787@yopmail.com')

      cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[2]/input[1]").type("password")

      cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[3]/button[1]").click()


  })
})
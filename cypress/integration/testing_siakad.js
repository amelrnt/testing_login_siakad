describe('Testing Fitur Login Siakad polinema', () => {
  it('Halaman dapat di akses', () => {
    cy.visit('http://siakad.polinema.ac.id')
  })

  it('User klik login tanpa input password', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('.btn-success').click()
    cy.contains('Password harus diisi')
  })

  it('User klik login tanpa input username', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('.btn-success').click()
    cy.contains('Username harus diisi')
  })

  it('User login dengan input username dan password salah', () => {
    cy.visit('http://siakad.polinema.ac.id')
    cy.get('#username').type('user123')
    cy.get('#password').type('user123')
    cy.get('#form_login > div.form-actions > button').click() 
    cy.contains('Username / Password Salah')
  })

  it('User login dengan input username benar dan password salah', () => {
    cy.visit('http://siakad.polinema.ac.id')
    cy.get('#username').type('1831710165')
    cy.get('#password').type('wrongpassword')
    cy.get('#form_login > div.form-actions > button').click() 
    cy.contains('Username / Password Salah')
  })

  it('User login dengan input username salah dan password benar', () => {
    cy.visit('http://siakad.polinema.ac.id')
    cy.get('#username').type('user123')
    cy.get('#password').type('mypassword')
    cy.get('#form_login > div.form-actions > button').click() 
    cy.contains('Username / Password Salah')
  })

  it('Password terlihat saat klik checkbox tampilkan password', () => {
    cy.visit("http://siakad.polinema.ac.id/")
    cy.get('#username').type('aaa')
    cy.get('#password').type('aaa')
    cy.get('#uniform-chk_tampilkan').click()
  })

  it('User login dengan input username dan password benar', () => {
    cy.visit('http://siakad.polinema.ac.id')
    cy.get('#username').type('1831710165')
    cy.get('#password').type('amelrnt')
    cy.get('.btn-success').click()
    cy.url().should('eq', 'http://siakad.polinema.ac.id/beranda')
  })
})
describe('basic test', () => {
  const parentSelector = 'mat-toolbar[tid=hackernews-toolbar]';
  it('loads home page', () => {
    cy.visit('/');
    const homeLink = cy.get(parentSelector).find('a[tid=home-page]');
    homeLink.should('exist');
    homeLink.contains('Hacker Best News')
    const bestLink = cy.get(parentSelector).find('a[tid=best-page]');
    bestLink.should('exist');
    bestLink.contains('Explore Articles')
  });

  it('should go to best page', () => {
    cy.visit('/');
    const bestLink = cy.get(parentSelector).find('a[tid=best-page]');
    bestLink.click();
    cy.url().should('include', '/best')
  });

  it('should go to detail page', () => {
    cy.visit('/best?page=1');
    const detaiLink = cy.get('div[tid=content-wrapper]').find('a').first();
    detaiLink.click();
    cy.url().should('include', 'article')
  });
})

var addingTerm = function(browser, term, summary, definition, source) {
  browser.clickLink('a.addTerm');
  browser.fill('term', term);
  browser.fill('summary', summary);
  browser.pressButton('Add');
  browser.clickLink('a.showPage');
};

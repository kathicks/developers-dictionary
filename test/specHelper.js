var addingTerm = function(browser, term, summary, definition, source) {
  browser.clickLink('a#newTerm');
  browser.fill('term', term);
  browser.fill('summary', summary);
};

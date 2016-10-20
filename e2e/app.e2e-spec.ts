import { LocalizeRouterExamplePage } from './app.po';

describe('localize-router-example App', function() {
  let page: LocalizeRouterExamplePage;

  beforeEach(() => {
    page = new LocalizeRouterExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

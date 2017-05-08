import { AngularFunPage } from './app.po';

describe('angular-fun App', () => {
  let page: AngularFunPage;

  beforeEach(() => {
    page = new AngularFunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { MyPortfolioPage } from './app.po';

describe('my-portfolio App', () => {
  let page: MyPortfolioPage;

  beforeEach(() => {
    page = new MyPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

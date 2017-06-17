import { PortfolioPNPage } from './app.po';

describe('portfolio-pn App', function() {
  let page: PortfolioPNPage;

  beforeEach(() => {
    page = new PortfolioPNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

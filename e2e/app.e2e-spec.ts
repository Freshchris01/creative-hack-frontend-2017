import { CreativeHackFrontendPage } from './app.po';

describe('creative-hack-frontend App', () => {
  let page: CreativeHackFrontendPage;

  beforeEach(() => {
    page = new CreativeHackFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

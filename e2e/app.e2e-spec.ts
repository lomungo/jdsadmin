import { JdsAdmin1Page } from './app.po';

describe('jds-admin1 App', () => {
  let page: JdsAdmin1Page;

  beforeEach(() => {
    page = new JdsAdmin1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

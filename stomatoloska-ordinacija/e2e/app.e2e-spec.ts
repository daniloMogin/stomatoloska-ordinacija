import { StomatoloskaOrdinacijaPage } from './app.po';

describe('stomatoloska-ordinacija App', () => {
  let page: StomatoloskaOrdinacijaPage;

  beforeEach(() => {
    page = new StomatoloskaOrdinacijaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

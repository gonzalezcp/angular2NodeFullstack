import { Angular2ObservableExamplesPage } from './app.po';

describe('angular2-observable-examples App', function() {
  let page: Angular2ObservableExamplesPage;

  beforeEach(() => {
    page = new Angular2ObservableExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

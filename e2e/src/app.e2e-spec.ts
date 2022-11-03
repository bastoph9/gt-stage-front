import { browser, element, by } from 'protractor';

describe('Stage BMAIT', () => {
  beforeEach(() => browser.get('/'));

  it('should display "Stage BMAIT"', async () => {
    const title = await element(by.css('app-root h1')).getText();
    expect(title).toEqual('Stage BMAIT');
  });
});

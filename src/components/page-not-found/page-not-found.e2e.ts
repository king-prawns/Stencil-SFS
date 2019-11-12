import { newE2EPage } from '@stencil/core/testing';

describe('page-not-found', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-not-found></page-not-found>');

    const element = await page.find('page-not-found');
    expect(element).toHaveClass('hydrated');
  });
});

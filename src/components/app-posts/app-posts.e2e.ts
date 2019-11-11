import { newE2EPage } from '@stencil/core/testing';

describe('app-posts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-posts></app-posts>');

    const element = await page.find('app-posts');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('app-todos', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-todos></app-todos>');

    const element = await page.find('app-todos');
    expect(element).toHaveClass('hydrated');
  });
});

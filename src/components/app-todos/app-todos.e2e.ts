import { newE2EPage } from '@stencil/core/testing';

describe('app-todos', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-todos></app-todos>');

    const element = await page.find('app-todos');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('app-root >>> app-todos');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-todos"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-todos >>> div');
  //   expect(element).toHaveClass('app-todos');
  // });
});

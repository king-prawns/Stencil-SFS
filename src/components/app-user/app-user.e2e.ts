import { newE2EPage } from '@stencil/core/testing';

describe('app-user', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-user></app-user>');

    const element = await page.find('app-user');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/user/joseph' });

    const userElement = await page.find('app-root >>> app-user');
    const element = userElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-user"', async () => {
  //   const page = await newE2EPage({ url: '/user/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-user >>> div');
  //   expect(element).toHaveClass('app-user');
  // });
});

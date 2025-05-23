import { render, screen } from '@testing-library/react';
import { I18nProvider } from '../lib/i18n';
import HomePage from '../app/(marketing)/page';

describe('Arabic Localization', () => {
  it('loads Arabic content correctly', () => {
    render(
      <I18nProvider locale='ar'>
        <HomePage />
      </I18nProvider>
    );
    
    expect(screen.getByRole('heading', {
      name: /مرحبا بكم في سوزاين/i
    })).toBeInTheDocument();
  });

  it('handles RTL layout direction', () => {
    const { container } = render(
      <I18nProvider locale='ar'>
        <HomePage />
      </I18nProvider>
    );
    
    expect(container.firstChild).toHaveStyle('direction: rtl');
  });
});
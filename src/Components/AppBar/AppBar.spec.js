import React from 'react';
import { render } from '@testing-library/react';

import AppBar from './AppBar';

const defaultProps = { children: '' };

describe('<AppBar />', () => {
  it('should render foorer', () => {
    const { container } = render(<AppBar {...defaultProps} />);
    const footerEl = container.firstChild;

    expect(footerEl.tagName).toBe('FOOTER');
  });

  it('should render children', () => {
    const { container } = render(<AppBar>A nice app bar</AppBar>);
    const footerEl = container.firstChild;

    expect(footerEl).toHaveTextContent('A nice app bar');
  });

  it('should render fixed prop properly', () => {
    const { container, rerender } = render(<AppBar {...defaultProps} fixed />);
    const footerEl = container.firstChild;

    expect(footerEl).toHaveStyleRule('position', 'fixed');

    rerender(<AppBar {...defaultProps} fixed={false} />);

    expect(footerEl).toHaveStyleRule('position', 'absolute');
  });

  it('should custom style', () => {
    const { container } = render(
      <AppBar {...defaultProps} style={{ backgroundColor: 'papayawhip' }} />
    );
    const footerEl = container.firstChild;

    expect(footerEl).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should render custom props', () => {
    const customProps = { title: 'cool-footer' };
    const { container } = render(<AppBar {...defaultProps} {...customProps} />);
    const footerEl = container.firstChild;

    expect(footerEl).toHaveAttribute('title', 'cool-footer');
  });
});
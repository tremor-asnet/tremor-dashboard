// Libs
import { cleanup, render, fireEvent, screen } from '@testing-library/react';

// Components
import CheckBox from './checkbox';

const mockOnClick = jest.fn();

const setup = () => {
  const props = {
    id: 'checkbox'
  };

  return render(<CheckBox data-testid="checkbox" onClick={mockOnClick} {...props} />);
};

describe('CheckBox component render', () => {
  afterEach(cleanup);

  test('should render CheckBox component correctly', () => {
    setup();

    const checkbox = screen.getByTestId('checkbox');

    expect(checkbox).toMatchSnapshot();
  });

  test('check CheckBox has attr checked', async () => {
    render(<CheckBox id='checkbox' data-testid="checkbox" defaultChecked={true}/>);

    const checkbox = screen.getByTestId('checkbox');
    
    expect(checkbox.hasAttribute('checked')).toBeTruthy();
  });

  test('check CheckBox has attr disabled', async () => {
    render(<CheckBox id='checkbox' data-testid="checkbox" disabled />);

    const checkbox = screen.getByTestId('checkbox');
    
    expect(checkbox.hasAttribute('disabled')).toBeTruthy();
  });

  test('should simulate onClick event on CheckBox', async() => {
    setup();

    const checkbox = screen.getByTestId('checkbox');

    expect(checkbox).toBeDefined();

    fireEvent.click(checkbox);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

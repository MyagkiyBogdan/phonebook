import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ContactForm from 'components/ContactForm/ContactForm';

describe('ContactForm', () => {
  test('render ContactForm test', () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    const nameLabel = screen.getByText(/name/i);
    const numberLabel = screen.getByText(/number/i);
    const nameInput = screen.getByTestId('name-input');
    const numberInput = screen.getByTestId('number-input');
    const addContactBtn = screen.getByRole('button');
    expect(nameLabel).toBeInTheDocument();
    expect(numberLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(addContactBtn).toBeInTheDocument();
  });

  test('input event', async () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );
    const nameInput = screen.getByTestId('name-input');
    const numberInput = screen.getByTestId('number-input');

    fireEvent.input(nameInput, {
      target: { value: 'Jhon' },
    });
    fireEvent.input(numberInput, {
      target: { value: '555555555' },
    });

    expect(nameInput).toContainHTML('Jhon');
    expect(numberInput).toContainHTML('555555555');
  });

  test('click event', () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );
    const addContactBtn = screen.getByRole('button');
    const nameInput = screen.getByTestId('name-input');
    const numberInput = screen.getByTestId('number-input');

    fireEvent.input(nameInput, {
      target: { value: 'Jhon' },
    });
    fireEvent.input(numberInput, {
      target: { value: '555555555' },
    });
    expect(nameInput).toContainHTML('Jhon');
    expect(numberInput).toContainHTML('555555555');

    fireEvent.click(addContactBtn);
    expect(nameInput).toContainHTML('');
    expect(numberInput).toContainHTML('');
  });
});

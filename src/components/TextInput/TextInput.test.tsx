import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';
import { render, screen } from '@testing-library/react';

test('TextInput component Test', async () => {
    const user = userEvent.setup();
    render(<TextInput />);

    const inputElement = screen.getByRole('textbox');
    await user.type(inputElement, 'Hello, World!');

    expect(screen.getByText('Text entered: Hello, World!')).toBeInTheDocument();
});

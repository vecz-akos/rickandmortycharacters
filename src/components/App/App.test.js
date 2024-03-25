import { render, screen, waitFor, fireEvent, getByText } from '@testing-library/react';
import App from '.';

test('Renders home without crashing.', () => {
  const { unmount } = render(<App />);
  unmount();
});

it('Renders table header.', async () => {
    const { unmount } = render(<App />);
    await waitFor(() => {
        expect(screen.getByText('Avatar')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Species')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
    });
    unmount();
  });

it('Renders profile without crashing.', async () => {
    const { unmount } = render(<App />); // depend on loading Home correctly
    await waitFor(() => {
        fireEvent.click(screen.getByRole("button", {name: "Rick Sanchez"}));
        fireEvent.click(screen.getByRole("button", {name: "Back to all characters"}));
    });
    unmount();
});

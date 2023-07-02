import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from '../src/CounterApp';

describe('tests of CounterAppp', () => {
    const initialValue = 0;

    test('should match with the snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the initial value of 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText('100')).toBeTruthy();
    });

    test('should increase with the button +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('1')).toBeTruthy();
    });

    test('should decrease with the button -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('-1');
    });

    test('should work the button "Reset"', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        /* fireEvent.click(screen.getByText('Reset')); */
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText(initialValue)).toBeTruthy();
    });
})
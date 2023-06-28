import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title="Hola, Soy Goku" />);

        expect(container).toMatchSnapshot();
    });

    test('should show a title in h1', () => {
        const title = "Hola, Soy Goku";
        const { container, getByText } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    })
});
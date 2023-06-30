import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    /* test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title="Hola, Soy Goku" />);

        expect(container).toMatchSnapshot();
    }); */

    test('should show a title in h1', () => {
        const title = "Hola, Soy Goku";
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title); */

        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('should show the subtitle sent by props', () => {
        const title = "Hola, Soy Goku";
        const subTitle = "Soy un subtitulo";
        const { getAllByText, } = render(<FirstApp title={title} subTitle={subTitle} />);

        expect(getAllByText(subTitle).length).toBe(1);
    })
});
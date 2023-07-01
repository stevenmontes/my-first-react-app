import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {

    const title = 'Hola Soy Goku';
    const subTitle = "Soy un subtitulo";


    test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title={title}></FirstApp>);
        expect(container).toMatchSnapshot();
    });

    test('should show the message "Hola Soy Goku"', () => {
        render(<FirstApp title={title}></FirstApp>);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('should show the message in a <h1>', () => {
        render(<FirstApp title={title}></FirstApp>);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('should show the subtitle sent by props', () => {
        render(<FirstApp title={title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(1);

    })
});
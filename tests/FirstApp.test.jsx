import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    test('should match with the snapshot', () => {
        render(<FirstApp title="Hola, Soy Goku" />);
    });
});
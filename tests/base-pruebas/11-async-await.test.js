import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('should return a URL of the image', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
})
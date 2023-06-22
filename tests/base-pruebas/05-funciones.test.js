import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05 funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Fernando';

        const expectedUser = {
            uid: 'ABC567',
            username: name
        }

        const receivedUser = getUsuarioActivo(name);

        expect(expectedUser).toEqual(receivedUser);

    })
});
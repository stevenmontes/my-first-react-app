import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas de 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroeByOwner debe retornar un array DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]);
    });

    test('getHeroeByOwner debe retornar un array de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]);
    });
})
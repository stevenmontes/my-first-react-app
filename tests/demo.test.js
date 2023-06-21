describe('Pruebas en <DemoComponet>', () => {
    test('Prueba no debe fallar', () => {
        // 1. Arrange
        const message = "Hola mundo";

        // 2. Act
        const message2 = message.trim();

        // 3.Assert
        expect(message).toBe(message2);
    })
})

import { somar } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("deve somar dois números corretamente", () => {
        //AAA
        // Arrange - Preparação
        const a = 2;
        const b = 3;

        // Act - Ação
        const resultado = somar(a, b);

        // Assert - Verificação
        expect(resultado).toBe(5);
    });
});
import { somar } from "../src/calculadora.js";
import { subtrair } from "../src/calculadora.js";

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

     test("deve subtrair dois números corretamente", () => {
        //AAA
        // Arrange - Preparação
        const a = 10;
        const b = 5;

        // Act - Ação
        const resultado = subtrair(a, b);

        // Assert - Verificação
        expect(resultado).toBe(5);
    });

});


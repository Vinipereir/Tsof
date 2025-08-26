import { somar , subtrair, multiplicar, dividir } from "../src/calculadora.js";



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

        test ("deve multiplicar dois números corretamente", () => {
            // Arrange
            const a = 4;
            const b = 5;

            // Act
            const resultado = multiplicar(a, b);

            // Assert
            expect(resultado).toBe(20);
        });

            test ("deve dividir dois números corretamente", () => {
                // Arrange
                const a = 20;
                const b = 4;

                // Act
                const resultado = dividir(a, b);

                // Assert
                expect(resultado).toBe(5);
            });

        test ("deve lancar erro ao dividir por zero", () => {
            // Arrange
            const a = 20;
            const b = 0;

            // Act & Assert
          expect (() => dividir(10, 0)).toThrow("Divisão por zero não é permitida.");
        });
    });


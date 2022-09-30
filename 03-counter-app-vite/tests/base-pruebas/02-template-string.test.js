import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en  02", () => {
  test('getSaludo debe retornar  "Hola mundo"', () => {
    const name = "xabier";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});

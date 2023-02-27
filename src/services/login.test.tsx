import { login } from "./login";
import { api } from "../api";

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert;

    const mockEmail = "evelin@dio.com";

    it('Deve exibir um alert com boas vindas caso o email é valido', async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`Bem Vindo ${mockEmail} ao Dio Bank!`);
    });

    it("Não deve exibir a mensagem de boas vindas sem o email", async () => {
        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith("Bem Vindo");
    })

    it("Deve exibir um erro caso o email seja invalido", async () => {
        await login("email@invalido.com");
        expect(mockAlert).toHaveBeenCalledWith("Email inválido!");
    });
})
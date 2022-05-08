import AuthService from "../services/AuthService";
import GetCardsService from "../services/GetCardsService";

export default class Store {

    setUser(user) {
        this.user = user;
    }

    setCards(cards){
        this.cards = cards;
    }

    async login(login, password){
            const response = await AuthService.login(login, password);
            console.log(response.jwt);
            localStorage.setItem('token', response.jwt);
            this.setUser(response.user)
    }

    async registration(username, email, password){
        try {
            const response = await AuthService.registration(username, email, password);
            console.log(response.jwt);
            localStorage.setItem('token', response.jwt);
            this.setUser(response.user)
        } catch (e){
            console.log(e);
        }
    }

    async getCard(method){
        try {
            const response = await GetCardsService.getCard(method);
            this.setCards(response);
        } catch (e){
            console.log(e);
        }
    }

    async getCardID(method , id){
        try {
            const response = await GetCardsService.getCardID(method, id);
            console.log(response);
            this.setCards(response);
        } catch (e){
            console.log(e);
        }
    }
}
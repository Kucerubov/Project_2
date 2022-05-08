import requestSend from "../http";

const GetCardsService = (function () {
    function GetCardsService() {}
    GetCardsService.getCard = function (method) {
        return new Promise((resolve) => {
            console.log(resolve);
            resolve(requestSend(method, 'cards', null, true ));
        })
    };
    GetCardsService.getCardID = function (method ,id){
        return new Promise((resolve) => {
            console.log('cards/' + id);
            resolve(requestSend(method, 'cards/' + id, null, true ));
        })
    }
    return GetCardsService;
}());

export default GetCardsService;
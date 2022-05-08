
export const API_URl = 'https://radiant-temple-07706.herokuapp.com/';

export default function requestSend(method, url, body, auth = false) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, `${API_URl}${url}`);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        if(auth === true){
            xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
        }
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(body));
    })
}
import axios from "axios";
export const API_URL = "http://localhost:3004"
export const TOKEN_NAME = "EVENTS_TOKEN"

export const doApiMethod = async(_url, _method, _body = {}) => {
    try {
        console.log(_body)
        let resp = await axios({
            url: _url,
            method: _method,
            data: _body,
            headers: {
                "x-api-key": localStorage[TOKEN_NAME]
            }
        })
        return resp;
    }
    catch (err) {
        throw err;
    }
}

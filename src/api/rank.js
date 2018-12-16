import axios from "axios";

export function getRadioList() {
    return axios.get("/getRadioList")
}


export function getRadioDetail(id) {
    return axios.get("/getRadioDetail", {
        params: {
            id
        }
    })
}
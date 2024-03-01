import axios from "axios";

axios.get('https://www.youtube.com/playlist?list=WL')
    .then((response) => {
        console.log(response.status, response.statusText);
        console.log(response.headers);
        console.log(response.config);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("Selesai!");
    });
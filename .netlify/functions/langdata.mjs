import fetch from "node-fetch";

const url = 'https://tessdata.projectnaptha.com/4.0.0/';

export const handler = async (event, context) => {
    const path = event.path;

    console.log(path);
    try {
        const response = await fetch(url + path.split('/')[-1], {
            method: 'GET',
            headers: { 'Content-Type': 'application/octet-stream' },
        });

        const data = await response.text();
        return { statusCode: 200, body: data };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
    }
};
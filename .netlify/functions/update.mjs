import fetch from "node-fetch";

const url = 'https://github.com/pot-app/pot-desktop/releases/download/updater/update.json';

export const handler = async (event, context) => {
    try {
        const response = await fetch(url, {
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
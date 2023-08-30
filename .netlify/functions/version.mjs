import fetch from "node-fetch";

const url = 'https://api.github.com/repos/pot-app/pot-desktop/releases/tags/updater';

export const handler = async (event, context) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
        });
        const res_text = await response.text();
        const res = JSON.parse(res_text);
        console.log(res_text);
        const { body } = res;
        return { statusCode: 200, body: body };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
    }
};
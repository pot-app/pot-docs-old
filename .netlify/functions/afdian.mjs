import fetch from "node-fetch";
import md5 from "md5";
const url = 'https://afdian.net/api/open/query-sponsor';

export const handler = async (event, context) => {
    const user_id = process.env.AFDIAN_USER_ID;
    const token = process.env.AFDIAN_TOKEN;
    const params = JSON.stringify({ page: 1 });
    const ts = new Date().getTime();
    const sign = md5(`${token}params${params}ts${ts}user_id${user_id}`);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: { user_id, params, ts, sign }
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
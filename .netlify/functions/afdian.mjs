import fetch from "node-fetch";
import md5 from "md5";
const url = 'https://afdian.net/api/open/query-sponsor';

export const handler = async (event, context) => {
    try {
        let first_data = await request(1);
        let data = first_data.data.list;
        let total_page = first_data.data.total_page;
        if (total_page > 1) {
            for (let i = 2; i <= total_page; i++) {
                let page_data = await request(i);
                data = data.concat(page_data.data.list);
            }
        }
        let parsedData = data.map(x => {
            let date = new Date(x.last_pay_time * 1000);
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = date.getDate()
            return {
                date: Y + M + D,
                avatar: x.user.avatar,
                name: x.user.name,
                user_id: x.user.user_id,
                money: x.all_sum_amount
            }
        })
        return { statusCode: 200, body: JSON.stringify(parsedData) };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' }),
        };
    }
};

const request = async (page) => {
    const user_id = process.env.AFDIAN_USER_ID;
    const token = process.env.AFDIAN_TOKEN;
    const params = JSON.stringify({ "page": page });
    const ts = Math.floor(new Date().getTime() / 1000);
    const sign = md5(`${token}params${params}ts${ts}user_id${user_id}`);

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id, params, ts, sign })
    });
    const data = await response.text();
    return JSON.parse(data);
}
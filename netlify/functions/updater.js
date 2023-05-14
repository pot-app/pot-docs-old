import fetch from 'node-fetch';

export const handler = async () => {
    const update_json = await fetch('https://github.com/pot-app/pot-desktop/releases/download/updater/update.json', {
        method: 'GET',
        headers: { 'Content-Type': 'application/octet-stream' },
    });

    return {
        statusCode: 200,
        body: JSON.stringify(await update_json.text()),
    }
}
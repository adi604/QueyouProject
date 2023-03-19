export async function sendRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error:', error);
    }
}

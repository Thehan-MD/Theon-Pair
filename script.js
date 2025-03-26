document.getElementById('generate').addEventListener('click', async () => {
    let response = await fetch('/api/getSession');
    let data = await response.json();
    document.getElementById('result').innerText = `Session ID: ${data.session}`;
});

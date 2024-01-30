document.getElementById('factButton').addEventListener('click', async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    document.getElementById('factText').innerText = data.fact;
})
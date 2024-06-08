document.getElementById('orderForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, address, quantity })
        });

        const result = await response.json();
        document.getElementById('orderResponse').innerText = response.ok ?
            `Order placed successfully! Order ID: ${result.id}` :
            `Failed to place order: ${result.error}`;
    } catch (error) {
        document.getElementById('orderResponse').innerText = `Error: ${error.message}`;
    }
});

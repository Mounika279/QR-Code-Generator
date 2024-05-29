document.getElementById('generateBtn').addEventListener('click', function() {
    var inputValue = document.getElementById('inputText').value;
    console.log('Input Value:', inputValue); // For debugging
    if (inputValue.trim() !== '') {
        var qrCodeDiv = document.getElementById('qrcode');
        qrCodeDiv.innerHTML = '';
        qrCodeDiv.style.display = 'block'; // Make sure QR code div is visible
        var qr = new QRCode(qrCodeDiv, {
            text: inputValue,
            width: 200,
            height: 200
        });
    } else {
        alert('Please enter a message or URL.');
    }
});

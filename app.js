function downloadVideo() {
    const url = document.getElementById("tiktokUrl").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    // Reset result and error div
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';

    if (!url) {
        errorDiv.innerHTML = 'Please enter a valid TikTok URL.';
        return;
    }

    // Call the API
    const apiUrl = `https://skizo.tech/api/tiktok?apikey=Paronich&url=${encodeURIComponent(url)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.status === 'success') {
                // Display download link
                resultDiv.innerHTML = `
                    <p><strong>Video URL:</strong></p>
                    <a href="${data.download_url}" target="_blank" download>Click here to download the video</a>
                `;
            } else {
                // Display error message
                errorDiv.innerHTML = 'Error fetching video. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorDiv.innerHTML = 'An error occurred while fetching the video.';
        });
}

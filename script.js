function processParagraph() {
    // Get the AK code (shift value)
    const akCode = parseInt(document.getElementById('akCode').value);

    // Get the paragraph (input string)
    const paragraph = document.getElementById('paragraph').value;

    let result = '';

    // Iterate through each character in the paragraph
    for (let i = 0; i < paragraph.length; i++) {
        // Get the Unicode code point of the current character
        const codePoint = paragraph.codePointAt(i);

        // Shift the code point backward by the AK code
        const shiftedCodePoint = codePoint - akCode;

        // Convert the shifted code point back to a character
        const shiftedChar = String.fromCodePoint(shiftedCodePoint);

        // Append the shifted character to the result
        result += shiftedChar;
    }

    // Replace the container content with the decoded text
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Decoded Text</h1>
        <div class="result">
            <p>${result}</p>
        </div>
        <button onclick="window.location.reload()">Go Back</button>
    `;
}
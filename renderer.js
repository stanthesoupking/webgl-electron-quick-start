// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

main();

function main() {
    const canvas = document.querySelector("#glCanvas");

    const gl = canvas.getContext("webgl");
    
    render(gl);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function render(gl) {
    gl.canvas.width  = window.innerWidth;
    gl.canvas.height = window.innerHeight;

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Wait 20ms before rendering the context again
    await sleep(20);

    // Update the view again
    render(gl);
}
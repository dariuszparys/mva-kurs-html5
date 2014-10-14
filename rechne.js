this.addEventListener("message", function (message) {
    for (var n = 0; n < message.data; n++) {
        for (var i = 0; i < message.data; i++) {
            Math.ceil(n);
            Math.abs(n);
            Math.asin(n);
        }
        postMessage(n);
    }
})

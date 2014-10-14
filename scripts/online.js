(function () {

    document.addEventListener("DOMContentLoaded", function () {
        printMessage("Status = " + navigator.onLine);
        document.body.ononline = checkOnlineConnection;
        document.body.onoffline = checkOnlineConnection;
    });

    function checkOnlineConnection(evt) {
        if (evt.type == "online") {
            printMessage("Browser ist ONLINE");
        } else if (evt.type == "offline") {
            printMessage("O F F L I N E");
        } else {
            printMessage("Undefinierter Event");
        }
    }

    function printMessage(message) {
        var element = document.querySelector("h2");
        element.innerText = message;
    }
})();
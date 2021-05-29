"use strict";
var K3_A1;
(function (K3_A1) {
    let formData = new FormData(document.forms[0]);
    let formDatenButton = document.getElementById("senden");
    formDatenButton.addEventListener("click", absenden);
    async function absenden() {
        let url = "https://dennytestapp.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(K3_A1 || (K3_A1 = {}));
//# sourceMappingURL=script.js.map
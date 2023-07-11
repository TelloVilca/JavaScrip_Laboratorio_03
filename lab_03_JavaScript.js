
function validarDatos() {

    if (confirm("¿Esta seguro que quiere enviar?")) {
        let usuario = document.querySelector("#inputUser").value;
        


        if (usuario.length < 4 || usuario.length > 14 || usuario.length == null) {

            let spanUser = document.querySelector("#span_user");
            spanUser.setAttribute("style","color:red");
            document.querySelector("#inputUser").value = "";
            alert("El Usuario esta mal escrito reviselo.");
            return false;
        }

        //* DECLARACION DE VARIABLES DE "CONTRASEÑAS"
        let contraseña = document.querySelector("#inputPassword").value;
        let repetirContraseña = document.querySelector("#inputRepassword").value;


        //* PREGUNTA SI LAS CONTRASEÑAS SON DIFERENTES ENTONCES REALIZARA LO SIGUIENTE:
        if( contraseña != repetirContraseña ){
            
            //* DECLARACION DE SPAN EN REPETIDOR DE CONTRASEÑA
            let spanRepassword = document.querySelector("#span_repassword");

            //* ATRIBUTO CSS PARA DARLE ESTILO
            spanRepassword.setAttribute("style","color:red");
            alert("Las contraseñas deben ser iguales revisalo.");
            return false;
        }

        return true;
        
    } else {
        return false;
    }






}





















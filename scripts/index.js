// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
    usuarios: [{
            id: 1,
            name: "Steve Jobs",
            email: "steve@jobs.com",
            password: "Steve123",
        },
        {
            id: 2,
            name: "Ervin Howell",
            email: "shanna@melissa.tv",
            password: "Ervin345",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            email: "nathan@yesenia.net",
            password: "Floppy39876",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            email: "julianne.oconner@kory.org",
            password: "MysuperPassword345",
        },
    ],
};

const correo = document.getElementById("email-input");
const pass = document.getElementById("password-input");
const error = document.getElementById('error-container');

// otroParaCorreos: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

const REGEXS = [/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/];

window.onload = () => {
    correo.addEventListener('input', event => {
        let campo = event.target;

        let emailRegex = REGEXS[0];
        if (!emailRegex.test(campo.value)) {
            error.innerHTML = `<small>El correo ingresado es invalido.</small>`;
            error.classList.remove('hidden');
        } else {
            error.innerHTML = '';
            error.classList.add('hidden');
        }

        if (error.innerHTML.length == 0) {} else {}
    });

    pass.addEventListener('input', event => {
        let campo = event.target;

        if (campo.value.length < 5) {
            error.innerHTML = `<small>La contraseña ingresada es muy corta.</small>`;
            error.classList.remove('hidden');
        } else {
            error.innerHTML = '';
            error.classList.add('hidden');
        }

    });

    document.querySelector('.login-btn').onclick = e => {
        e.preventDefault();
        if (validarCampos()) {
            document.querySelector('main').innerHTML = `
          <h1> Bienvenido al sitio </h1>`;
        } else {
            error.innerHTML = `<small>Alguno de los datos ingresados son incorrectos</small>`;
            error.classList.remove('hidden');
        }
    }
}

function buscarUsuario() {
    if (baseDeDatos.usuarios.find(
            user => user.email == correo.value && user.password == pass.value)) {
        error.innerHTML = '';
        error.classList.remove('hidden');
        return true;
    } else {
        error.innerHTML = `<small>El usuario ingresado no existe.</small>`;
        error.classList.add('hidden');
        return false;
    }

}

function validarCampos() {
    const encontrado = buscarUsuario();

    return error.innerHTML.length === 0 && encontrado;
}
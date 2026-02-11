// AJAX: Objeto XMLHttpRequest
(() => {
    const xhr = new XMLHttpRequest(), // Primer paso instanciar una variable de tipo XMLHttpRequest
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        // console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {
            // console.log("exito");
            // console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
            // console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    }); // Segundo paso asignar el/los eventos de la petición

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //Establecer el metodo y el recurso o endpoint

    xhr.send(); // Paso final enviar la petición
})();

// AJAX: API Fetch
(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        /*.then(res => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
        })*/
        .then((res) => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            // console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        }).catch(err => {
            // console.log(err);
            let message = xhr.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        }).finally(
            // console.log("Esto se ejecutara independiente del resultado de la promesa")
        );
})();

// AJAX: API Fetch + Async-Await
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los datos");
            if (!res.ok) throw { status: res.status, statusText: res.statusText };

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
        } catch (err) {
            // console.log("Estoy en el catch", err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            // console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    getData();
})();

// AJAX: Librería Axios
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // console.log(res);

            let json = res.data;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch(err => {
            // console.log(err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            // console.log("Esto se ejecutara independientemente del resultado Axios");
        });
})();

// AJAX: Librería Axios + Async
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch (err) {
            // console.log(err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            // console.log("Este finally siempre se ejecuta");
        }
    }

    getData();
})();
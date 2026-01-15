// (() => {
//     const xhr = new XMLHttpRequest(), // Primer paso instanciar una variable de tipo XMLHttpRequest
//         $xhr = document.getElementById("xhr"),
//         $fragment = document.createDocumentFragment();

//     xhr.addEventListener("readystatechange", e => {
//         if (xhr.readyState !== 4) return;

//         console.log(xhr);

//         if (xhr.status >= 200 && xhr.status < 300) {
//             console.log("exito");
//             console.log(xhr.responseText);
//             let json = JSON.parse(xhr.responseText);
//             console.log(json);

//             json.forEach((el) => {
//                 const $li = document.createElement("li");
//                 $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//                 $fragment.appendChild($li);
//             });

//             $xhr.appendChild($fragment);
//         } else {
//             console.log("error");
//             let message = xhr.statusText || "Ocurrio un error";
//             $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
//         }
//     }); // Segundo paso asignar el/los eventos de la petición

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //Establecer el metodo y el recurso o endpoint

//     xhr.send(); // Paso final enviar la petición
// })();

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
            console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        }).catch(err => {
            console.log(err);
            let message = xhr.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        }).finally(() =>
            console.log("Esto se ejecutara independiente del resultado de la promesa"));
})();
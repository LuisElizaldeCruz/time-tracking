
let res = fetch("./data.json")
    .then((res) => {
        // console.log(res);
        if (res.ok) {
            return res.json();
        }
        else {
            Promise.reject(res);
        }
    })
    .then(json => {
        //  console.log(json);
        const gRegistro = document.querySelector(".registro");
        const lblTiempo = document.querySelectorAll(".lbTiempo");
        const lblLasTime = document.querySelectorAll(".last");
        console.log(lblTiempo);
        gRegistro.addEventListener("click", (e) => {
            const registro = e.target.textContent;
            let contador = 0;
            // console.log(registro);
            if (e.target.matches(".reg")) {//referencia a etiquetas Dayli Weekly Monthly
                json.forEach(el => {
                    for (const key in el.timeframes) {
                        if (key === registro.toLowerCase()) {
                            //  console.log(key);
                            //console.log(el.timeframes[key].current);
                            console.log(`${el.timeframes[key].current}hrs`);
                            lblTiempo[contador].innerHTML = `${el.timeframes[key].current}hrs`;
                            lblLasTime[contador].innerHTML = `last week - ${el.timeframes[key].previous}hrs`;
                            contador++;
                        };
                    };
                });
            }
            else {
                console.log("se equivoco");
            };
        });
    });

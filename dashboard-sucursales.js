// ======================================
// DASHBOARD SUCURSALES - WAREIQ
// ======================================

const contenido = document.querySelector("#contenidoDashboard");

const menuItems = document.querySelectorAll(".menu-item");

// ================================
// DASHBOARD EJECUTIVO
// ================================

function dashboardEjecutivo(){

    contenido.innerHTML = `

        <h1>📊 Dashboard Ejecutivo</h1>

        <p>

            Resumen general de todas las sucursales.

        </p>

        <div class="kpi-grid">

            <div class="kpi-card">

                <h2>4</h2>

                <span>Sucursales Activas</span>

            </div>

            <div class="kpi-card">

                <h2>96%</h2>

                <span>Cumplimiento</span>

            </div>

            <div class="kpi-card">

                <h2>185</h2>

                <span>Empleados</span>

            </div>

            <div class="kpi-card">

                <h2>98%</h2>

                <span>Nivel de Servicio</span>

            </div>

        </div>

        <div class="powerbi-container">

            <div style="display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100%;
                        font-size:28px;">

                📊 Aquí irá el Dashboard Ejecutivo

            </div>

        </div>

    `;

}

// ================================
// SUCURSALES
// ================================

function cargarSucursal(nombre){

    contenido.innerHTML = `

        <h1>${nombre}</h1>

        <p>

            Dashboard específico de esta sucursal.

        </p>

        <div class="powerbi-container">

            <div style="display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100%;
                        font-size:28px;">

                🏢 Aquí irá el Power BI de ${nombre}

            </div>

        </div>

    `;

}

// ================================
// REPORTES
// ================================

function cargarReportes(){

    contenido.innerHTML = `

        <h1>📄 Reportes</h1>

        <p>

            Biblioteca de reportes.

        </p>

        <div class="powerbi-container">

            <div style="display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100%;
                        font-size:28px;">

                📁 Próximamente

            </div>

        </div>

    `;

}

// ================================
// EVENTOS
// ================================

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

        switch(item.dataset.section){

            case "ejecutivo":
                dashboardEjecutivo();
                break;

            case "sucursal1":
                cargarSucursal("Sucursal 1");
                break;

            case "sucursal2":
                cargarSucursal("Sucursal 2");
                break;

            case "sucursal3":
                cargarSucursal("Sucursal 3");
                break;

            case "sucursal4":
                cargarSucursal("Sucursal 4");
                break;

            case "reportes":
                cargarReportes();
                break;

        }

    });

});

dashboardEjecutivo();
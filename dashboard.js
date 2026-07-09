// ======================================
// DASHBOARD WAREIQ - AUDITORÍAS
// ======================================

// Contenedor principal
const contenido = document.querySelector("#contenidoDashboard");

// Menú lateral
const menuItems = document.querySelectorAll(".menu-item");

// ======================================
// POWER BI
// ======================================

const powerBI = `
<iframe
    title="WareIQ Consulting - Delizia"
    src="https://app.powerbi.com/view?r=eyJrIjoiZWQzNWJhYzgtM2M0OS00N2ZjLTk0ZWYtODQ3OTZkMTg2MDc4IiwidCI6Ijg4M2QyNDk1LTQ3OGEtNGZhZC04ZDllLTJhZTIzMDIzYzVmMSIsImMiOjR9"
    allowfullscreen="true">
</iframe>
`;

// ======================================
// DASHBOARD EJECUTIVO
// ======================================

function cargarDashboard(){

    contenido.innerHTML = `

    <h1>📊 Dashboard Ejecutivo</h1>

    <p>
        Indicadores generales de Auditorías de Almacenes y Bodegas.
    </p>

    <div class="kpi-grid">

        <div class="kpi-card">
            <h2>125</h2>
            <span>Auditorías Realizadas</span>
        </div>

        <div class="kpi-card">
            <h2>92%</h2>
            <span>Cumplimiento</span>
        </div>

        <div class="kpi-card">
            <h2>18</h2>
            <span>Observaciones Abiertas</span>
        </div>

        <div class="kpi-card">
            <h2>207</h2>
            <span>Observaciones Cerradas</span>
        </div>

    </div>

    <div class="powerbi-container">

        ${powerBI}

    </div>

    `;

}

// ======================================
// OBSERVACIONES
// ======================================

function cargarObservaciones(){

    contenido.innerHTML = `

    <h1>📋 Observaciones de Auditoría</h1>

    <p>

        Dashboard para seguimiento de observaciones.

    </p>

    <div class="powerbi-container">

        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100%;
            font-size:24px;
            color:#bbb;
        ">

            🚧 Próximamente

        </div>

    </div>

    `;

}

// ======================================
// REPORTES
// ======================================

function cargarReportes(){

    contenido.innerHTML = `

    <h1>📄 Reportes</h1>

    <p>

        Biblioteca de reportes ejecutivos.

    </p>

    <div class="powerbi-container"
         style="
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:24px;
            color:#bbb;
         ">

         📁 Próximamente

    </div>

    `;

}

// ======================================
// EVENTOS DEL MENÚ
// ======================================

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

        switch(item.dataset.section){

            case "dashboard":
                cargarDashboard();
                break;

            case "observaciones":
                cargarObservaciones();
                break;

            case "reportes":
                cargarReportes();
                break;

        }

    });

});

// ======================================
// INICIO
// ======================================

cargarDashboard();

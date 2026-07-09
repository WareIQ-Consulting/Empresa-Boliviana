// =======================================
// DASHBOARDS POWER BI
// =======================================

const dashboardEjecutivo = `

<iframe
    title="WareIQ Consulting - Delizia"
    src="https://app.powerbi.com/view?r=eyJrIjoiZWQzNWJhYzgtM2M0OS00N2ZjLTk0ZWYtODQ3OTZkMTg2MDc4IiwidCI6Ijg4M2QyNDk1LTQ3OGEtNGZhZC04ZDllLTJhZTIzMDIzYzVmMSIsImMiOjR9"
    allowfullscreen="true">
</iframe>

`;

const dashboardObservaciones = `
<div style="display:flex;justify-content:center;align-items:center;height:100%;font-size:22px;color:#888;">
    Próximamente Dashboard de Observaciones
</div>
`;

// ==============================
// CONTENEDOR PRINCIPAL
// ==============================

const contenido = document.querySelector("#contenidoDashboard");


// ==============================
// DASHBOARD EJECUTIVO
// ==============================

function cargarDashboard(){

contenido.innerHTML = `

<h1>Dashboard Ejecutivo</h1>

<p>

Bienvenido al módulo de Auditorías de Almacenes y Bodegas.

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

${dashboardEjecutivo}

</div>

`;

}


function cargarObservaciones(){

contenido.innerHTML = `

<h1>

Observaciones de Auditoría

</h1>

<p>

Seguimiento de todas las observaciones registradas.

</p>

<div class="powerbi-container">

${dashboardObservaciones}

</div>

`;

}

function cargarReportes(){

contenido.innerHTML = `

<h1>

Reportes

</h1>

<p>

Biblioteca de reportes ejecutivos.

</p>

<div class="powerbi-container">

Listado de reportes PDF

</div>

`;

}

const menu = document.querySelectorAll(".menu-item");

menu.forEach(item=>{

item.addEventListener("click",()=>{

menu.forEach(i=>i.classList.remove("active"));

item.classList.add("active");

const section = item.dataset.section;

if(section==="dashboard"){

cargarDashboard();

}

if(section==="observaciones"){

cargarObservaciones();

}

if(section==="reportes"){

cargarReportes();

}

});

});


// Cargar la primera pantalla
cargarDashboard();

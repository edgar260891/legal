var logo;
var logo_legal;
var fondo;

var tabla_central;
var abogados;
var sucursales;

var estados_nombre = ["AGS", "TJN", "LPZ", "TUX", "TPC", "CHH", "CDJ", "MCL", "TOR", "COL", "DGO", "CMD", "TOL", "CEL", "IRA", "LEN", "GDL", "TLT", "MOR", "ZAM", "CUE", "TEP", "MTY",
    "OAX", "PUE", "QRO", "CUN", "CEN", "SLP", "CUL", "LMC", "HER", "VHS", "RSA", "TAM", "TLX", "COA", "VER", "MER", "ZAC",
];

var nombre_abogados = ["EG", "VG", "A1", "A2", "A3", "A4", ];

var nombre_status = ["EN ESTUDIO", "INICIO", "PRUEBAS", "ALEGATOS", "EMPLAZADO", "SENTENCIA", "REMATE", "CONVENIO JUDICIAL", "FINALIZADO", ];

var nombre_status_eng = ["IN STUDY", "START", "EVIDENCES", "ALEGATES", "PLACED", "JUDGMENT", "AUCTION", "COURT AGREEMENT", "FINALIZED", ];

var totales_nom = ["INVESTED", "RECOVERED", ];

var nombre_casos = [];

var temp_vg4 = [];
var temp_vg1 = [];
var temp_vga1 = [];
var temp_vg6 = [];
var temp_vg11 = [];
var temp_vg14 = [];
var temp_vg16 = [];
var temp_vg18 = [];

var top_10_casos_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
var top_10_casos_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var top_10_monto_actual_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
var top_10_monto_actual_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var top_10_monto_actual_casos_nom = ["", "", "", "", "", "", "", "", "", "", ];
var top_10_monto_actual_casos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var top_10_monto_recuperado_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
var top_10_monto_recuperado_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var top_10_monto_recuperado_casos_nom = ["", "", "", "", "", "", "", "", "", "", ];
var top_10_monto_recuperado_casos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var top_10_sucursales_sincasos_nom = ["", "", "", "", "", "", "", "", "", "", ];
var top_10_sucursales_sincasos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

var valor_g1 = "";
var valor_g2 = "1";
var numero_g2 = 24;
var valor_g3 = "1";
var numero_g3 = 24;

var valores_grafica_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var valores_grafica_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var valores_grafica_3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var valores_grafica_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var valores_grafica_5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var valores_grafica_6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var valores_grafica_7 = [];
var valores_grafica_8 = [];
var valores_grafica_9 = [];
var valores_grafica_10 = [];
var valores_grafica_11 = [];
var valores_grafica_12 = [];
var valores_grafica_13 = [];
var valores_grafica_14 = [];
var valores_grafica_15 = [];
var valores_grafica_16 = [];
var valores_grafica_17 = [];
var valores_grafica_18 = [];

var c1 = 'rgb(255,0,0)';
var c2 = 'rgb(237,132,19)';
var c3 = 'rgb(237,227,19)';
var c4 = 'rgb(0,0,255)';


function preload() {
    tabla_central = loadTable("https://docs.google.com/spreadsheets/d/e/2PACX-1vQwRYM7eXXRwyGOp2HL7Qlnkr-oRsrqdF0kAFKMFLuHmuBgsRs3FB4iXf0GX1hHgEOXELO5z5bee9m5/pub?output=csv", 'csv', 'header');
    abogados = loadTable("data/ABOGADOS.csv", 'csv', 'header');
    sucursales = loadTable("data/SUCURSALES.csv", 'csv', 'header');

    ctx = document.getElementById('chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: estados_nombre,
            datasets: [{
                label: 'Cantidad de Juicios por sucursal',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c1,
                data: [],
            }, ],
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }, ],
            },
        },
    });

    ctx2 = document.getElementById('chart2').getContext('2d');
    chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: estados_nombre,
            datasets: [{
                label: 'Pago de derechos de Juicios por sucursal',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c2,
                data: [],
            }, ],
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }, ],
            },
        },
    });

    ctx3 = document.getElementById('chart3').getContext('2d');
    chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: estados_nombre,
            datasets: [{
                label: 'Monto demandado por sucursal',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c3,
                data: [],
            }]
        },
        options: {},
    });

    ctx4 = document.getElementById('chart4').getContext('2d');
    chart4 = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: estados_nombre,
            datasets: [{
                label: 'Monto actual por sucursal',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c4,
                data: [],
            }]
        },
        options: {},
    });

    ctx5 = document.getElementById('chart5').getContext('2d');
    chart5 = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: estados_nombre,
            datasets: [{
                label: 'Viaticos por sucursal',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c1,
                data: [],
            }]
        },
        options: {},
    });

    ctx6 = document.getElementById('chart6').getContext('2d');
    chart6 = new Chart(ctx6, {
        type: 'line',
        data: {
            labels: estados_nombre,
            datasets: [{
                label: 'Monto recuperado por sucursal',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c2,
                data: [],
            }]
        },
        options: {},
    });

    ctx7 = document.getElementById('chart7').getContext('2d');
    chart7 = new Chart(ctx7, {
        type: 'horizontalBar',
        data: {
            labels: nombre_abogados,
            datasets: [{
                label: 'Cantidad de juicios por abogado',
                backgroundColor: [c3, c3, ],
                data: [],
            }, ],
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }, ],
            },
        },
    });

    ctx8 = document.getElementById('chart8').getContext('2d');
    chart8 = new Chart(ctx8, {
        type: 'horizontalBar',
        data: {
            labels: nombre_abogados,
            datasets: [{
                label: 'Horas por abogado',
                backgroundColor: c4,
                data: [],
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }, ],
            },
        },
    });

    ctx9 = document.getElementById('chart9').getContext('2d');
    chart9 = new Chart(ctx9, {
        type: 'horizontalBar',
        data: {
            labels: nombre_abogados,
            datasets: [{
                label: 'Viaticos por abogado',
                backgroundColor: c1,
                data: [],
            }, ],
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }, ],
            },
        },
    });

    ctx10 = document.getElementById('chart10').getContext('2d');
    chart10 = new Chart(ctx10, {
        type: 'bar',
        data: {
            labels: nombre_casos,
            datasets: [{
                label: 'Monto demandado por caso',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c2,
                data: [],
            }, ],
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }, ],
            },
        },
    });

    ctx11 = document.getElementById('chart11').getContext('2d');
    chart11 = new Chart(ctx11, {
        type: 'bar',
        data: {
            labels: nombre_casos,
            datasets: [{
                label: 'Saldo actual por caso',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c3,
                data: [],
            }]
        },
        options: {},
    });

    ctx12 = document.getElementById('chart12').getContext('2d');
    chart12 = new Chart(ctx12, {
        type: 'bar',
        data: {
            labels: nombre_casos,
            datasets: [{
                label: 'Viaticos por caso',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c4,
                data: [],
            }]
        },
        options: {},
    });

    ctx13 = document.getElementById('chart13').getContext('2d');
    chart13 = new Chart(ctx13, {
        type: 'bar',
        data: {
            labels: nombre_casos,
            datasets: [{
                label: 'Horas por caso',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c1,
                data: [],
            }]
        },
        options: {},
    });

    ctx14 = document.getElementById('chart14').getContext('2d');
    chart14 = new Chart(ctx14, {
        type: 'bar',
        data: {
            labels: nombre_casos,
            datasets: [{
                label: 'Monto recuperado por caso',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c2,
                data: [],
            }]
        },
        options: {},
    });

    ctx15 = document.getElementById('chart15').getContext('2d');
    chart15 = new Chart(ctx15, {
        type: 'line',
        data: {
            labels: nombre_casos,
            datasets: [{
                label: 'Ultima actualización por caso',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: c3,
                data: [],
            }]
        },
        options: {},
    });

    ctx16 = document.getElementById('chart16').getContext('2d');
    chart16 = new Chart(ctx16, {
        type: 'horizontalBar',
        data: {
            labels: nombre_status,
            datasets: [{
                label: 'Numero de casos por status',
                data: [0, 0, 0, 0, 0, 0, 0, 0, ],
                backgroundColor: c4,
            }],
        },
        options: {},
    });

    ctx17 = document.getElementById('chart17').getContext('2d');
    chart17 = new Chart(ctx17, {
        type: 'doughnut',
        data: {
            labels: ["Total invertido", "Total de recuperación esperado", ],
            datasets: [{
                data: [10, 10, ],
                backgroundColor: [c1, c2, ],
            }, ],
        },
        options: {},
    });

    ctx18 = document.getElementById('chart18').getContext('2d');
    chart18 = new Chart(ctx18, {
        type: 'doughnut',
        data: {
            labels: ["Total invertido", "Total recuperado", ],
            datasets: [{
                data: [10, 10, ],
                backgroundColor: [c3, c4, ],
            }, ],
        },
        options: {},
    });

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    logo = loadImage("data/logo.png");
    logo_legal = loadImage("data/legal.png");
    fondo = loadImage("data/fondo.jpg");

    sel1 = createSelect();
    sel1.position((2 * windowWidth) / 100, (17 * windowHeight) / 100);
    sel1.size((12 * windowWidth) / 100, (5 * windowHeight) / 100);
    sel1.option("All types of judgments");
    sel1.option("CM-Commercial");
    sel1.option("L-Labor");
    sel1.option("P-Criminal");
    sel1.changed(sel_tipos_juicios);

    boton = createButton('Buscar');
    boton.position((41 * windowWidth) / 100, (17 * windowHeight) / 100);
    boton.size((12 * windowWidth) / 100, (5 * windowHeight) / 100);
    boton.mousePressed(buscar);

    boton2 = createButton('Crear reporte (ENG)');
    boton2.position((54 * windowWidth) / 100, (17 * windowHeight) / 100);
    boton2.size((12 * windowWidth) / 100, (5 * windowHeight) / 100);
    boton2.mousePressed(crear_reporte_1);

    boton3 = createButton('Crear reporte (ESP)');
    boton3.position((67 * windowWidth) / 100, (17 * windowHeight) / 100);
    boton3.size((12 * windowWidth) / 100, (5 * windowHeight) / 100);
    boton3.mousePressed(crear_reporte_2);

    for (var pg7 = 0; pg7 < abogados.getRowCount(); pg7++) {
        valores_grafica_7[pg7] = 0;
    }

    for (var pg10 = 0; pg10 < tabla_central.getRowCount(); pg10++) {
        nombre_casos[pg10] = str(pg10);
    }

}


function draw() {
    background(255, 255, 255);
    fill(223, 223, 223);
    noStroke();
    rect(0, 0, windowWidth, windowHeight / 8);
    textSize((3) * (windowWidth) / 100);
    fill(0);
    text("TBC-DS-LEGAL", (40 * windowWidth) / 100, (8.5 * windowHeight) / 100);
    image(logo, 0, 0, windowWidth / 12, windowHeight / 8);
    image(logo_legal, (90 * windowWidth) / 100, 0, windowWidth / 12, windowHeight / 8);
}

function sel_tipos_juicios() {
    if (sel1.value() == "All types of judgments") {
        valor_g1 = "";
        valor_g2 = "1";
        numero_g2 = 24;
        valor_g3 = "1";
        numero_g3 = 24;
        sel2.remove();
        sel3.remove();
    } else {
        var temp_vg1 = split(sel1.value(), '-');
        valor_g1 = temp_vg1[0];
        sel2 = createSelect();
        sel2.position((15 * windowWidth) / 100, (17 * windowHeight) / 100);
        sel2.size((12 * windowWidth) / 100, (5 * windowHeight) / 100);
        sel2.option("All Lawers");
        for (var a = 0; a < abogados.getRowCount(); a++) {
            var temp1 = split(sel1.value(), '-');
            if (abogados.getString(a, 0) == temp1[0]) {
                sel2.option(abogados.getString(a, 1) + "-" + abogados.getString(a, 2));
            }
        }
        sel2.changed(sel_abogados);
    }
}

function sel_abogados() {
    if (sel2.value() == "All Lawers") {
        valor_g2 = "1";
        numero_g2 = 24;
        valor_g3 = "1";
        numero_g3 = 24;
        console.log(numero_g2);
        sel3.remove();
    } else {
        var temp_vg2 = split(sel2.value(), '-');
        valor_g2 = temp_vg2[0];
        numero_g2 = 15;
        sel3 = createSelect();
        sel3.position((28 * windowWidth) / 100, (17 * windowHeight) / 100);
        sel3.size((12 * windowWidth) / 100, (5 * windowHeight) / 100);
        sel3.option("All cases");
        for (var b = 0; b < tabla_central.getRowCount(); b++) {
            var temp2 = split(sel2.value(), '-');
            if (tabla_central.getString(b, 15) == temp2[0]) {
                sel3.option(tabla_central.getString(b, 25) + "-" + tabla_central.getString(b, 2));
            }
        }
        sel3.changed(sel_caso);
    }
}

function sel_caso() {
    if (sel3.value() == "All cases") {
        valor_g3 = "1";
        numero_g3 = 24;
    } else {
        valor_temp = split(sel3.value(), '-');
        valor_g3 = valor_temp[1];
        numero_g3 = 2;
    }
}

function buscar() {
    valores_grafica_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    valores_grafica_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    valores_grafica_3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    valores_grafica_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    valores_grafica_5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    valores_grafica_6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    for (var eg7 = 0; eg7 < abogados.getRowCount(); eg7++) {
        valores_grafica_7[eg7] = 0;
        valores_grafica_8[eg7] = 0;
        valores_grafica_9[eg7] = 0;
    }
    for (var eg10 = 0; eg10 < tabla_central.getRowCount(); eg10++) {
        valores_grafica_10[eg10] = 0;
        valores_grafica_11[eg10] = 0;
        valores_grafica_12[eg10] = 0;
        valores_grafica_13[eg10] = 0;
        valores_grafica_14[eg10] = 0;
        valores_grafica_15[eg10] = 0;
    }
    valores_grafica_16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    valores_grafica_17 = [0, 0, ];
    valores_grafica_18 = [0, 0, ];

    if (valor_g1 == "") {
        for (var a = 0; a < tabla_central.getRowCount(); a++) {
            for (var b = 0; b < sucursales.getRowCount(); b++) {
                if (tabla_central.getString(a, 0) == sucursales.getString(b, 0) && tabla_central.getString(a, numero_g2) == valor_g2 && tabla_central.getString(a, numero_g3) == valor_g3) {
                    valores_grafica_1[b] = valores_grafica_1[b] + 1;

                    var temp_vg2 = split(tabla_central.getString(a, 14), '$');
                    valores_grafica_2[b] = valores_grafica_2[b] + int(temp_vg2[1]);

                    var temp_vg3 = split(tabla_central.getString(a, 4), '$');
                    valores_grafica_3[b] = valores_grafica_3[b] + int(temp_vg3[1]);

                    var temp_vg4 = split(tabla_central.getString(a, 10), '$');
                    valores_grafica_4[b] = valores_grafica_4[b] + int(temp_vg4[1]);
                    //console.log(int(temp_vg4[1]));

                    var temp_vg5 = split(tabla_central.getString(a, 13), '$');
                    valores_grafica_5[b] = valores_grafica_5[b] + int(temp_vg5[1]);
                    console.log(int(temp_vg5[1]));

                    var temp_vg6 = split(tabla_central.getString(a, 17), '$');
                    valores_grafica_6[b] = valores_grafica_6[b] + float(temp_vg6[1]);
                }
            }

            for (var e = 0; e < abogados.getRowCount(); e++) {
                if (tabla_central.getString(a, 15) == abogados.getString(e, 1) && tabla_central.getString(a, numero_g2) == valor_g2 && tabla_central.getString(a, numero_g3) == valor_g3) {
                    valores_grafica_7[e] = valores_grafica_7[e] + 1;
                    valores_grafica_8[e] = valores_grafica_8[e] + tabla_central.getNum(a, 16);
                    var temp_vg9 = split(tabla_central.getString(a, 13), '$');
                    valores_grafica_9[e] = valores_grafica_9[e] + int(temp_vg9[1]);
                }
            }

            if (tabla_central.getString(a, numero_g2) == valor_g2 && tabla_central.getString(a, numero_g3) == valor_g3) {
                var temp_vg10 = split(tabla_central.getString(a, 4), '$');
                valores_grafica_10[a] = temp_vg10[1];

                var temp_vg11 = split(tabla_central.getString(a, 10), '$');
                valores_grafica_11[a] = temp_vg11[1];

                var temp_vg12 = split(tabla_central.getString(a, 13), '$');
                valores_grafica_12[a] = temp_vg12[1];

                valores_grafica_13[a] = tabla_central.getNum(a, 16);

                var temp_vg14 = split(tabla_central.getString(a, 17), '$');
                valores_grafica_14[a] = temp_vg14[1];

                var temp_vg15 = split(tabla_central.getString(a, 3), '/');
                valores_grafica_15[0] = 2010;
                valores_grafica_15[a] = int(temp_vg15[2]);
            }

            for (var g = 0; g < nombre_status.length; g++) {
                if (tabla_central.getString(a, 11) == nombre_status[g] && tabla_central.getString(a, numero_g2) == valor_g2 && tabla_central.getString(a, numero_g3) == valor_g3) {
                    valores_grafica_16[g] = valores_grafica_16[g] + 1;
                }
            }

            if (tabla_central.getString(a, numero_g2) == valor_g2 && tabla_central.getString(a, numero_g3) == valor_g3) {
                var temp_vg171 = split(tabla_central.getString(a, 13), '$');
                var temp_vg172 = split(tabla_central.getString(a, 14), '$');
                var temp_vg173 = split(tabla_central.getString(a, 10), '$');
                valores_grafica_17[0] = valores_grafica_17[0] + int(temp_vg171[1]) + int(temp_vg172[1]);
                valores_grafica_17[1] = valores_grafica_17[1] + int(temp_vg173[1]);

                valores_grafica_18[0] = valores_grafica_17[0];
                var temp_vg18 = split(tabla_central.getString(a, 17), '$');
                valores_grafica_18[1] = valores_grafica_18[1] + int(temp_vg18[1]);
            }

        }
    } else if (valor_g1 == "CM") {
        for (var c = 0; c < tabla_central.getRowCount(); c++) {
            for (var d = 0; d < sucursales.getRowCount(); d++) {
                if (tabla_central.getString(c, 0) == sucursales.getString(d, 0) && tabla_central.getString(c, numero_g2) == valor_g2 && tabla_central.getString(c, numero_g3) == valor_g3) {
                    valores_grafica_1[d] = valores_grafica_1[d] + 1;

                    var temp2_vg2 = split(tabla_central.getString(c, 14), '$');
                    valores_grafica_2[d] = valores_grafica_2[d] + int(temp2_vg2[1]);

                    var temp2_vg3 = split(tabla_central.getString(c, 4), '$');
                    valores_grafica_3[d] = valores_grafica_3[d] + int(temp2_vg3[1]);

                    var temp2_vg4 = split(tabla_central.getString(c, 10), '$');
                    valores_grafica_4[d] = valores_grafica_4[d] + int(temp2_vg4[1]);

                    var temp2_vg5 = split(tabla_central.getString(c, 13), '$');
                    valores_grafica_5[d] = valores_grafica_5[d] + int(temp2_vg5[1]);

                    var temp2_vg6 = split(tabla_central.getString(c, 17), '$');
                    valores_grafica_6[d] = valores_grafica_6[d] + int(temp2_vg6[1]);
                }
            }

            for (var f = 0; f < abogados.getRowCount(); f++) {
                if (tabla_central.getString(c, 15) == abogados.getString(f, 1) && tabla_central.getString(c, numero_g2) == valor_g2 && tabla_central.getString(c, numero_g3) == valor_g3) {
                    valores_grafica_7[f] = valores_grafica_7[f] + 1;
                    valores_grafica_8[f] = valores_grafica_8[f] + tabla_central.getNum(c, 16);
                    var temp2_vg9 = split(tabla_central.getString(c, 13), '$');
                    valores_grafica_9[f] = valores_grafica_9[f] + int(temp2_vg9[1]);
                }
            }

            if (tabla_central.getString(c, numero_g2) == valor_g2 && tabla_central.getString(c, numero_g3) == valor_g3) {
                var temp2_vg10 = split(tabla_central.getString(c, 4), '$');
                valores_grafica_10[c] = temp2_vg10[1];

                var temp2_vg11 = split(tabla_central.getString(c, 10), '$');
                valores_grafica_11[c] = temp2_vg11[1];

                var temp2_vg12 = split(tabla_central.getString(c, 13), '$');
                valores_grafica_12[c] = temp2_vg12[1];

                valores_grafica_13[c] = tabla_central.getNum(c, 16);

                var temp2_vg14 = split(tabla_central.getString(c, 17), '$');
                valores_grafica_14[c] = temp2_vg14[1];

                var temp2_vg15 = split(tabla_central.getString(c, 3), '/');
                valores_grafica_15[0] = 2010;
                valores_grafica_15[c] = int(temp2_vg15[2]);
            }

            for (var h = 0; h < nombre_status.length; h++) {
                if (tabla_central.getString(c, 11) == nombre_status[h] && tabla_central.getString(c, numero_g2) == valor_g2 && tabla_central.getString(c, numero_g3) == valor_g3) {
                    valores_grafica_16[h] = valores_grafica_16[h] + 1;
                }
            }

            if (tabla_central.getString(c, numero_g2) == valor_g2 && tabla_central.getString(c, numero_g3) == valor_g3) {
                var temp2_vg171 = split(tabla_central.getString(c, 13), '$');
                var temp2_vg172 = split(tabla_central.getString(c, 14), '$');
                var temp2_vg173 = split(tabla_central.getString(c, 10), '$');
                valores_grafica_17[0] = valores_grafica_17[0] + int(temp2_vg171[1]) + int(temp2_vg172[1]);
                valores_grafica_17[1] = valores_grafica_17[1] + int(temp2_vg173[1]);

                valores_grafica_18[0] = valores_grafica_17[0];
                var temp2_vg18 = split(tabla_central.getString(c, 17), '$');
                valores_grafica_18[1] = valores_grafica_18[1] + int(temp2_vg18[1]);
            }

        }
    } else if (valor_g1 == "L") {} else if (valor_g1 == "P") {}

    grafica_1(chart, valores_grafica_1);
    grafica_2(chart2, valores_grafica_2);
    grafica_3(chart3, valores_grafica_3);
    grafica_4(chart4, valores_grafica_4);
    grafica_5(chart5, valores_grafica_5);
    grafica_6(chart6, valores_grafica_6);
    grafica_7(chart7, valores_grafica_7);
    grafica_8(chart8, valores_grafica_8);
    grafica_9(chart9, valores_grafica_9);
    grafica_10(chart10, valores_grafica_10, nombre_casos);
    grafica_11(chart11, valores_grafica_11, nombre_casos);
    grafica_12(chart12, valores_grafica_12, nombre_casos);
    grafica_13(chart13, valores_grafica_13, nombre_casos);
    grafica_14(chart14, valores_grafica_14, nombre_casos);
    grafica_15(chart15, valores_grafica_15, nombre_casos);
    grafica_16(chart16, valores_grafica_16);
    grafica_17(chart17, valores_grafica_17);
    grafica_18(chart18, valores_grafica_18);

}

function grafica_1(chart, valores_g1) {
    chart.data = {
        labels: estados_nombre,
        datasets: [{
            label: 'Cantidad de Juicios por sucursal',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c1,
            data: valores_g1,
        }, ],
    };
    chart.update();
}

function grafica_2(chart, valores_g2) {
    chart.data = {
        labels: estados_nombre,
        datasets: [{
            label: 'Pago de derechos de Juicios por sucursal',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c2,
            data: valores_g2,
        }, ],
    };
    chart.update();
}

function grafica_3(chart, valores_g3) {
    chart.data = {
        labels: estados_nombre,
        datasets: [{
            label: 'Monto demandado por sucursal',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c3,
            data: valores_g3,
        }, ],
    };
    chart.update();
}

function grafica_4(chart, valores_g4) {
    chart.data = {
        labels: estados_nombre,
        datasets: [{
            label: 'Monto actual por sucursal',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c4,
            data: valores_g4,
        }, ],
    };
    chart.update();
}

function grafica_5(chart, valores_g5) {
    chart.data = {
        labels: estados_nombre,
        datasets: [{
            label: 'Viaticos por sucursal',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c1,
            data: valores_g5,
        }, ],
    };
    chart.update();
}

function grafica_6(chart, valores_g6) {
    chart.data = {
        labels: estados_nombre,
        datasets: [{
            label: 'Monto recuperado por sucursal',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c2,
            data: valores_g6,
        }, ],
    };
    chart.update();
}

function grafica_7(chart, valores_g7) {
    chart.data = {
        labels: nombre_abogados,
        datasets: [{
            label: 'Cantidad de juicios por abogado',
            backgroundColor: c3,
            data: valores_g7,
        }, ],
    };
    chart.update();

}

function grafica_8(chart, valores_g8) {
    chart.data = {
        labels: nombre_abogados,
        datasets: [{
            label: 'Horas por abogado',
            backgroundColor: c4,
            data: valores_g8,
        }, ],
    };
    chart.update();
}

function grafica_9(chart, valores_g9) {
    chart.data = {
        labels: nombre_abogados,
        datasets: [{
            label: 'Viaticos por abogado',
            backgroundColor: c1,
            data: valores_g9,
        }, ],
    };
    chart.update();
}

function grafica_10(chart, valores_g10, nombres) {
    chart.data = {
        labels: nombres,
        datasets: [{
            label: 'Monto demandado por caso',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c2,
            data: valores_g10,
        }, ],
    };
    chart.update();
}

function grafica_11(chart, valores_g11, nombres) {
    chart.data = {
        labels: nombres,
        datasets: [{
            label: 'Saldo actual por caso',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c3,
            data: valores_g11,
        }, ],
    };
    chart.update();
}

function grafica_12(chart, valores_g12, nombres) {
    chart.data = {
        labels: nombres,
        datasets: [{
            label: 'Viaticos por caso',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c4,
            data: valores_g12,
        }, ],
    };
    chart.update();
}

function grafica_13(chart, valores_g13, nombres) {
    chart.data = {
        labels: nombres,
        datasets: [{
            label: 'Horas por caso',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c1,
            data: valores_g13,
        }, ],
    };
    chart.update();
}

function grafica_14(chart, valores_g14, nombres) {
    chart.data = {
        labels: nombres,
        datasets: [{
            label: 'Monto recuperado por caso',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: c2,
            data: valores_g14,
        }, ],
    };
    chart.update();
}

function grafica_15(chart, valores_g15, nombres) {
    chart.data = {
        labels: nombres,
        datasets: [{
            label: 'Ultima actualización por caso',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: c3,
            data: valores_g15,
        }, ],
    };
    chart.update();
}

function grafica_16(chart, valores_g16) {
    chart.data = {
        labels: nombre_status,
        datasets: [{
            label: 'Numero de casos por status',
            data: valores_g16,
            backgroundColor: c4,
        }, ],
    };
    chart.update();
}

function grafica_17(chart, valores_g17) {
    chart.data = {
        labels: ["Total invertido", "Total de recuperación esperado", ],
        datasets: [{
            data: valores_g17,
            backgroundColor: [c1, c2, ],
        }, ],
    };
    chart.update();
}

function grafica_18(chart, valores_g18) {
    chart.data = {
        labels: ["Total invertido", "Total recuperado", ],
        datasets: [{
            data: valores_g18,
            backgroundColor: [c3, c4, ],
        }, ],
    };
    chart.update();
}

function crear_reporte_1(f1) {
    var doc = new jsPDF();
    logo.loadPixels();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    var img = logo.canvas.toDataURL();
    var g1 = chart.toBase64Image();
    var g2 = chart4.toBase64Image();
    var g3 = chart6.toBase64Image();
    var g4 = chart14.toBase64Image();
    var g5 = chart16.toBase64Image();
    var g6 = chart18.toBase64Image();
    var g7 = chart.toBase64Image();
    var g8 = chart11.toBase64Image();
    var g_horas = chart8.toBase64Image();
    var g_viaticos = chart9.toBase64Image();


    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Report TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("This report is generated by TBC-DS-LEGAL system with the next filters:", 8, 40);
    doc.text("• Litigation: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Lawyer: All Lawers", 11, 56);
        doc.text("• Lawsuits: All lawsuits", 11, 62);
    } else {
        //doc.text("• Lawyer: "+sel2.value(),11,56);
        doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas", 11, 56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Lawsuits: All lawsuits", 11, 62);
        } else {
            doc.text("• Lawsuits: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("1.", 8, 75);
    doc.text("Cases by branch", 12, 75);

    doc.addImage(g1, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos1 = 90;
    for (var t = 0; t < 10; t++) {
        doc.rect(130, pos1, 35, 5);
        doc.rect(165, pos1, 35, 5);
        pos1 = pos1 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 branches with more cases", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos2 = 94;
    for (var vg1 = 0; vg1 < valores_grafica_1.length; vg1++) {
        temp_vg1[vg1] = valores_grafica_1[vg1];
    }
    for (var i = 0; i < 10; i++) {
        var max_temp_vg1 = max(temp_vg1);
        for (var j = 0; j < temp_vg1.length; j++) {
            if (temp_vg1[j] == max_temp_vg1) {
                top_10_casos_sucursales_num[i] = temp_vg1[j];
                top_10_casos_sucursales_nom[i] = estados_nombre[j];
                temp_vg1[j] = 0;
                j = temp_vg1.length;
            }
        }
        doc.text(top_10_casos_sucursales_nom[i], 147.5, pos2, null, null, "center");
        doc.text(str(top_10_casos_sucursales_num[i]), 182.5, pos2, null, null, "center");
        pos2 = pos2 + 5;
    }

    top_10_casos_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_casos_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    temp_vg1 = [];

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("1.2. Cases by branch", 8, 175);

    doc.addImage(g7, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos20 = 190;
    for (var ta = 0; ta < 10; ta++) {
        doc.rect(130, pos20, 35, 5);
        doc.rect(165, pos20, 35, 5);
        pos20 = pos20 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 branches with less cases", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos21 = 194;
    for (var vga1 = 0; vga1 < valores_grafica_1.length; vga1++) {
        temp_vga1[vga1] = valores_grafica_1[vga1];
    }
    for (var ia = 0; ia < 10; ia++) {
        var min_temp_vga1 = min(temp_vga1);
        for (var ja = 0; ja < temp_vga1.length; ja++) {
            if (temp_vga1[ja] == min_temp_vga1) {
                top_10_sucursales_sincasos_num[ia] = temp_vga1[ja];
                top_10_sucursales_sincasos_nom[ia] = estados_nombre[ja];
                temp_vga1[ja] = max(temp_vga1);
                ja = temp_vga1.length;
            }
        }
        doc.text(top_10_sucursales_sincasos_nom[ia], 147.5, pos21, null, null, "center");
        doc.text(str(top_10_sucursales_sincasos_num[ia]), 182.5, pos21, null, null, "center");
        pos21 = pos21 + 5;
    }

    top_sucursales_sincasos_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_sucursales_sincasos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    temp_vga1 = [];

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Report TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("This report is generated by TBC-DS-LEGAL system with the next filters:", 8, 40);
    doc.text("• Litigation: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Lawyer: All Lawers", 11, 56);
        doc.text("• Lawsuits: All lawsuits", 11, 62);
    } else {
        //doc.text("• Lawyer: "+sel2.value(),11,56);
        doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas", 11, 56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Lawsuits: All lawsuits", 11, 62);
        } else {
            doc.text("• Lawsuits: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("2. Actual amount by branch (USD)", 8, 75);

    doc.addImage(g2, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos3 = 90;
    for (var k = 0; k < 10; k++) {
        doc.rect(130, pos3, 35, 5);
        doc.rect(165, pos3, 35, 5);
        pos3 = pos3 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 actual amount by branch", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos4 = 94;
    for (var vg4 = 0; vg4 < valores_grafica_4.length; vg4++) {
        temp_vg4[vg4] = valores_grafica_4[vg4];
    }
    for (var l = 0; l < 10; l++) {
        var max_temp = max(temp_vg4);
        for (var n = 0; n < temp_vg4.length; n++) {
            if (temp_vg4[n] == max_temp) {
                top_10_monto_actual_sucursales_num[l] = temp_vg4[n];
                top_10_monto_actual_sucursales_nom[l] = estados_nombre[n];
                temp_vg4[n] = 0;
                n = temp_vg4.length;
            }
        }
        doc.text(top_10_monto_actual_sucursales_nom[l], 147.5, pos4, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_actual_sucursales_num[l] / 19.70), 2), 182.5, pos4, null, null, "center");
        pos4 = pos4 + 5;
    }
    temp_vg4 = [];
    var max_sucursal_nom = top_10_monto_actual_sucursales_nom[0];
    var max_sucursal_num = top_10_monto_actual_sucursales_num[0];
    top_10_monto_actual_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_actual_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("3. Actual amount by case (USD)", 8, 175);

    doc.addImage(g8, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos31 = 190;
    for (var ka = 0; ka < 10; ka++) {
        doc.rect(130, pos31, 35, 5);
        doc.rect(165, pos31, 35, 5);
        pos31 = pos31 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 cases with most actual amount", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos81 = 194;
    for (var vg11 = 0; vg11 < valores_grafica_11.length; vg11++) {
        temp_vg11[vg11] = valores_grafica_11[vg11];
    }
    for (var lda = 0; lda < 10; lda++) {
        var max_temp_vg11 = max(temp_vg11);
        for (var nda = 0; nda < temp_vg11.length; nda++) {
            if (temp_vg11[nda] == max_temp_vg11) {
                top_10_monto_actual_casos_num[lda] = temp_vg11[nda];
                top_10_monto_actual_casos_nom[lda] = tabla_central.getString(nda, 1);
                temp_vg11[nda] = 0;
                nda = temp_vg11.length;
            }
        }
        doc.text(top_10_monto_actual_casos_nom[lda], 147.5, pos81, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_actual_casos_num[lda] / 19.70), 2), 182.5, pos81, null, null, "center");
        pos81 = pos81 + 5;
    }
    temp_vg11 = [];
    var max_caso_nom = top_10_monto_actual_casos_nom[0];
    var max_caso_num = top_10_monto_actual_casos_num[0];
    top_10_monto_actual_casos_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_actual_casos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Report TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("This report is generated by TBC-DS-LEGAL system with the next filters:", 8, 40);
    doc.text("• Litigation: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Lawyer: All Lawers", 11, 56);
        doc.text("• Lawsuits: All lawsuits", 11, 62);
    } else {
        //doc.text("• Lawyer: "+sel2.value(),11,56);
        doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas", 11, 56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Lawsuits: All lawsuits", 11, 62);
        } else {
            doc.text("• Lawsuits: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("4.", 8, 75);
    doc.text("Amount recovery by branch (USD)", 12, 75);

    doc.addImage(g3, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos5 = 90;
    for (var v = 0; v < 10; v++) {
        doc.rect(130, pos5, 35, 5);
        doc.rect(165, pos5, 35, 5);
        pos5 = pos5 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 amount recovery by branch", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos6 = 94;
    for (var vg6 = 0; vg6 < valores_grafica_4.length; vg6++) {
        temp_vg6[vg6] = valores_grafica_6[vg6];
    }
    for (var b = 0; b < 10; b++) {
        var max_temp_vg6 = max(temp_vg6);
        for (var a = 0; a < temp_vg6.length; a++) {
            if (temp_vg6[a] == max_temp_vg6) {
                top_10_monto_recuperado_sucursales_num[b] = temp_vg6[a];
                top_10_monto_recuperado_sucursales_nom[b] = estados_nombre[a];
                temp_vg6[a] = 0;
                a = temp_vg6.length;
            }
        }
        doc.text(top_10_monto_recuperado_sucursales_nom[b], 147.5, pos6, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_recuperado_sucursales_num[b] / 19.70), 2), 182.5, pos6, null, null, "center");
        pos6 = pos6 + 5;
    }
    temp_vg6 = [];
    top_10_monto_recuperado_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_recuperado_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("5. Amount recovery by case (USD)", 8, 170);

    doc.addImage(g4, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos7 = 190;
    for (var s = 0; s < 10; s++) {
        doc.rect(130, pos7, 35, 5);
        doc.rect(165, pos7, 35, 5);
        pos7 = pos7 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 actual amount recovery by case", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos8 = 194;
    for (var vg14 = 0; vg14 < valores_grafica_14.length; vg14++) {
        temp_vg14[vg14] = valores_grafica_14[vg14];
    }
    for (var ld = 0; ld < 10; ld++) {
        var max_temp_vg14 = max(temp_vg14);
        for (var nd = 0; nd < temp_vg14.length; nd++) {
            if (temp_vg14[nd] == max_temp_vg14) {
                top_10_monto_recuperado_casos_num[ld] = temp_vg14[nd];
                top_10_monto_recuperado_casos_nom[ld] = tabla_central.getString(nd, 1);
                temp_vg14[nd] = 0;
                nd = temp_vg14.length;
            }
        }
        doc.text(top_10_monto_recuperado_casos_nom[ld], 147.5, pos8, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_recuperado_casos_num[ld] / 19.70), 2), 182.5, pos8, null, null, "center");
        pos8 = pos8 + 5;
    }
    temp_vg14 = [];
    top_10_monto_recuperado_casos_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_recuperado_casos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Report TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("This report is generated by TBC-DS-LEGAL system with the next filters:", 8, 40);
    doc.text("• Litigation: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Lawyer: All Lawers", 11, 56);
        doc.text("• Lawsuits: All lawsuits", 11, 62);
    } else {
        //doc.text("• Lawyer: "+sel2.value(),11,56);
        doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas", 11, 56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Lawsuits: All lawsuits", 11, 62);
        } else {
            doc.text("• Lawsuits: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("6.", 8, 75);
    doc.text("Number of cases by status", 12, 75);

    doc.addImage(g5, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos10 = 90;

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Number of cases by status", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var sd = 0; sd < 9; sd++) {
        doc.rect(130, pos10, 35, 5);
        doc.rect(165, pos10, 35, 5);
        doc.text(nombre_status_eng[sd], 147.5, pos10 + 4, null, null, "center");
        doc.text(str(valores_grafica_16[sd]), 182.5, pos10 + 4, null, null, "center");
        pos10 = pos10 + 5;
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("7. Total investment vs. total recovered (USD)", 8, 170);

    doc.addImage(g6, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos11 = 190;

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Total investment vs. total recovered", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var st = 0; st < 2; st++) {
        doc.rect(130, pos11, 35, 5);
        doc.rect(165, pos11, 35, 5);
        doc.text(totales_nom[st], 147.5, pos11 + 4, null, null, "center");
        doc.text("$ " + nfc(str(valores_grafica_18[st] / 19.70), 2), 182.5, pos11 + 4, null, null, "center");
        pos11 = pos11 + 5;
    }

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Report TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("This report is generated by TBC-DS-LEGAL system with the next filters:", 8, 40);
    doc.text("• Litigation: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Lawyer: All Lawers", 11, 56);
        doc.text("• Lawsuits: All lawsuits", 11, 62);
    } else {
        //doc.text("• Lawyer: "+sel2.value(),11,56);
        doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas", 11, 56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Lawsuits: All lawsuits", 11, 62);
        } else {
            doc.text("• Lawsuits: " + sel3.value(), 11, 62);
        }
    }

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(8, 70, 192, 10, 'FD');
    var posr = 80;

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Resume", 104, 76.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var sta = 0; sta < 4; sta++) {
        doc.rect(8, posr, 96, 10);
        doc.rect(104, posr, 96, 10);

        posr = posr + 10;
    }

    doc.text("Number of cases", 56, 86.5, null, null, "center");
    var total_casos = valores_grafica_11.length - 1;
    doc.text(str(total_casos), 152, 86.5, null, null, "center");

    doc.text("Total amount", 56, 96.5, null, null, "center");
    doc.text("$ " + nfc(str(valores_grafica_17[1] / 19.70), 2), 152.96, 96.5, null, null, "center");

    doc.text("Branch with highest amount", 56, 106.5, null, null, "center");
    doc.text(max_sucursal_nom, 152, 106.5, null, null, "center");

    doc.text("Case with highest amount", 56, 116.5, null, null, "center");
    doc.text(max_caso_nom, 152, 116.5, null, null, "center");

    doc.save("Reporte_" + day() + "/" + month() + "/" + year() + "_" + hour() + ":" + minute() + ":" + second() + ".pdf");

}

function crear_reporte_2() {
    var doc = new jsPDF();
    logo.loadPixels();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    var img = logo.canvas.toDataURL();
    var g1 = chart.toBase64Image();
    var g2 = chart4.toBase64Image();
    var g3 = chart6.toBase64Image();
    var g4 = chart14.toBase64Image();
    var g5 = chart16.toBase64Image();
    var g6 = chart18.toBase64Image();
    var g7 = chart.toBase64Image();
    var g8 = chart11.toBase64Image();
    var g_horas = chart8.toBase64Image();
    var g_viaticos = chart9.toBase64Image();

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Reporte TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Este reporte es generado por el sistema TBC-DS-LEGAL con los siguientes filtros:", 8, 40);
    doc.text("• Categoria: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Abogado: Todos los abogados", 11, 56);
        doc.text("• Casos: Todos los casos", 11, 62);
    } else {
        doc.text("• Abogado: " + sel2.value(), 11, 56);
        //doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas",11,56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Abogado: Todos los abogados", 11, 62);
        } else {
            doc.text("• Abogado: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("1.", 8, 75);
    doc.text("Casos por sucursal", 12, 75);

    doc.addImage(g1, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos1 = 90;
    for (var t = 0; t < 10; t++) {
        doc.rect(130, pos1, 35, 5);
        doc.rect(165, pos1, 35, 5);
        pos1 = pos1 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 sucursales con mas casos", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos2 = 94;
    for (var vg1 = 0; vg1 < valores_grafica_1.length; vg1++) {
        temp_vg1[vg1] = valores_grafica_1[vg1];
    }
    for (var i = 0; i < 10; i++) {
        var max_temp_vg1 = max(temp_vg1);
        for (var j = 0; j < temp_vg1.length; j++) {
            if (temp_vg1[j] == max_temp_vg1) {
                top_10_casos_sucursales_num[i] = temp_vg1[j];
                top_10_casos_sucursales_nom[i] = estados_nombre[j];
                temp_vg1[j] = 0;
                j = temp_vg1.length;
            }
        }
        doc.text(top_10_casos_sucursales_nom[i], 147.5, pos2, null, null, "center");
        doc.text(str(top_10_casos_sucursales_num[i]), 182.5, pos2, null, null, "center");
        pos2 = pos2 + 5;
    }

    top_10_casos_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_casos_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    temp_vg1 = [];

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("1.2. Casos por sucursal", 8, 175);

    doc.addImage(g7, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos20 = 190;
    for (var ta = 0; ta < 10; ta++) {
        doc.rect(130, pos20, 35, 5);
        doc.rect(165, pos20, 35, 5);
        pos20 = pos20 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 sucursales con menos casos", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos21 = 194;
    for (var vga1 = 0; vga1 < valores_grafica_1.length; vga1++) {
        temp_vga1[vga1] = valores_grafica_1[vga1];
    }
    for (var ia = 0; ia < 10; ia++) {
        var min_temp_vga1 = min(temp_vga1);
        for (var ja = 0; ja < temp_vga1.length; ja++) {
            if (temp_vga1[ja] == min_temp_vga1) {
                top_10_sucursales_sincasos_num[ia] = temp_vga1[ja];
                top_10_sucursales_sincasos_nom[ia] = estados_nombre[ja];
                temp_vga1[ja] = max(temp_vga1);
                ja = temp_vga1.length;
            }
        }
        doc.text(top_10_sucursales_sincasos_nom[ia], 147.5, pos21, null, null, "center");
        doc.text(str(top_10_sucursales_sincasos_num[ia]), 182.5, pos21, null, null, "center");
        pos21 = pos21 + 5;
    }

    top_sucursales_sincasos_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_sucursales_sincasos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
    temp_vga1 = [];

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Reporte TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Este reporte es generado por el sistema TBC-DS-LEGAL con los siguientes filtros:", 8, 40);
    doc.text("• Categoria: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Abogado: Todos los abogados", 11, 56);
        doc.text("• Casos: Todos los casos", 11, 62);
    } else {
        doc.text("•   Abogado: " + sel2.value(), 11, 56);
        //doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas",11,56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Casos: Todos los casos", 11, 62);
        } else {
            doc.text("• Casos: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("2. Monto actual por sucursal (MXN)", 8, 75);

    doc.addImage(g2, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos3 = 90;
    for (var k = 0; k < 10; k++) {
        doc.rect(130, pos3, 35, 5);
        doc.rect(165, pos3, 35, 5);
        pos3 = pos3 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 monto actual por sucursal", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos4 = 94;
    for (var vg4 = 0; vg4 < valores_grafica_4.length; vg4++) {
        temp_vg4[vg4] = valores_grafica_4[vg4];
    }
    for (var l = 0; l < 10; l++) {
        var max_temp = max(temp_vg4);
        for (var n = 0; n < temp_vg4.length; n++) {
            if (temp_vg4[n] == max_temp) {
                top_10_monto_actual_sucursales_num[l] = temp_vg4[n];
                top_10_monto_actual_sucursales_nom[l] = estados_nombre[n];
                temp_vg4[n] = 0;
                n = temp_vg4.length;
            }
        }
        doc.text(top_10_monto_actual_sucursales_nom[l], 147.5, pos4, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_actual_sucursales_num[l]), 2), 182.5, pos4, null, null, "center");
        pos4 = pos4 + 5;
    }
    temp_vg4 = [];
    var max_sucursal_nom = top_10_monto_actual_sucursales_nom[0];
    var max_sucursal_num = top_10_monto_actual_sucursales_num[0];
    top_10_monto_actual_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_actual_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("3. Monto actual por caso (MXN)", 8, 175);

    doc.addImage(g8, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos31 = 190;
    for (var ka = 0; ka < 10; ka++) {
        doc.rect(130, pos31, 35, 5);
        doc.rect(165, pos31, 35, 5);
        pos31 = pos31 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 casos con monto actual", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos81 = 194;
    for (var vg11 = 0; vg11 < valores_grafica_11.length; vg11++) {
        temp_vg11[vg11] = valores_grafica_11[vg11];
    }
    for (var lda = 0; lda < 10; lda++) {
        var max_temp_vg11 = max(temp_vg11);
        for (var nda = 0; nda < temp_vg11.length; nda++) {
            if (temp_vg11[nda] == max_temp_vg11) {
                top_10_monto_actual_casos_num[lda] = temp_vg11[nda];
                top_10_monto_actual_casos_nom[lda] = tabla_central.getString(nda, 1);
                temp_vg11[nda] = 0;
                nda = temp_vg11.length;
            }
        }
        doc.text(top_10_monto_actual_casos_nom[lda], 147.5, pos81, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_actual_casos_num[lda]), 2), 182.5, pos81, null, null, "center");
        pos81 = pos81 + 5;
    }
    temp_vg11 = [];
    var max_caso_nom = top_10_monto_actual_casos_nom[0];
    var max_caso_num = top_10_monto_actual_casos_num[0];
    top_10_monto_actual_casos_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_actual_casos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Reporte TBC-DS-LEGAL", 80, 17.5);

    doc.setFontSize(12);
    doc.setFontStyle("italic");
    doc.text(day() + "/" + month() + "/" + year(), 180, 17.5);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Este reporte es generado por el sistema TBC-DS-LEGAL con los siguientes filtros:", 8, 40);
    doc.text("• Categoria: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Abogado: Todos los abogados", 11, 56);
        doc.text("• Casos: Todos los casos", 11, 62);
    } else {
        doc.text("•   Abogado: " + sel2.value(), 11, 56);
        //doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas",11,56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Casos: Todos los casos", 11, 62);
        } else {
            doc.text("• Casos: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("4.", 8, 75);
    doc.text("Monto recuperado por sucursal (MXN)", 12, 75);

    doc.addImage(g3, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos5 = 90;
    for (var v = 0; v < 10; v++) {
        doc.rect(130, pos5, 35, 5);
        doc.rect(165, pos5, 35, 5);
        pos5 = pos5 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 monto recuperado por sucursal", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos6 = 94;
    for (var vg6 = 0; vg6 < valores_grafica_4.length; vg6++) {
        temp_vg6[vg6] = valores_grafica_6[vg6];
    }
    for (var b = 0; b < 10; b++) {
        var max_temp_vg6 = max(temp_vg6);
        for (var a = 0; a < temp_vg6.length; a++) {
            if (temp_vg6[a] == max_temp_vg6) {
                top_10_monto_recuperado_sucursales_num[b] = temp_vg6[a];
                top_10_monto_recuperado_sucursales_nom[b] = estados_nombre[a];
                temp_vg6[a] = 0;
                a = temp_vg6.length;
            }
        }
        doc.text(top_10_monto_recuperado_sucursales_nom[b], 147.5, pos6, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_recuperado_sucursales_num[b]), 2), 182.5, pos6, null, null, "center");
        pos6 = pos6 + 5;
    }
    temp_vg6 = [];
    top_10_monto_recuperado_sucursales_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_recuperado_sucursales_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("5. Monto recuperado por caso (MXN)", 8, 170);

    doc.addImage(g4, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos7 = 190;
    for (var s = 0; s < 10; s++) {
        doc.rect(130, pos7, 35, 5);
        doc.rect(165, pos7, 35, 5);
        pos7 = pos7 + 5;
    }

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Top 10 monto recuperado por caso", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    var pos8 = 194;
    for (var vg14 = 0; vg14 < valores_grafica_14.length; vg14++) {
        temp_vg14[vg14] = valores_grafica_14[vg14];
    }
    for (var ld = 0; ld < 10; ld++) {
        var max_temp_vg14 = max(temp_vg14);
        for (var nd = 0; nd < temp_vg14.length; nd++) {
            if (temp_vg14[nd] == max_temp_vg14) {
                top_10_monto_recuperado_casos_num[ld] = temp_vg14[nd];
                top_10_monto_recuperado_casos_nom[ld] = tabla_central.getString(nd, 1);
                temp_vg14[nd] = 0;
                nd = temp_vg14.length;
            }
        }
        doc.text(top_10_monto_recuperado_casos_nom[ld], 147.5, pos8, null, null, "center");
        doc.text("$ " + nfc(str(top_10_monto_recuperado_casos_num[ld]), 2), 182.5, pos8, null, null, "center");
        pos8 = pos8 + 5;
    }
    temp_vg14 = [];
    top_10_monto_recuperado_casos_nom = ["", "", "", "", "", "", "", "", "", "", ];
    top_10_monto_recuperado_casos_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];


    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Este reporte es generado por el sistema TBC-DS-LEGAL con los siguientes filtros:", 8, 40);
    doc.text("• Categoria: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Abogado: Todos los abogados", 11, 56);
        doc.text("• Casos: Todos los casos", 11, 62);
    } else {
        doc.text("•   Abogado: " + sel2.value(), 11, 56);
        //doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas",11,56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Casos: Todos los casos", 11, 62);
        } else {
            doc.text("• Casos: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("6.", 8, 75);
    doc.text("Horas por abogado", 12, 75);
    doc.setFontStyle("normal");

    doc.addImage(g_horas, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos20 = 90;

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Horas por abogado", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    var nom2 = ["Elvira", "Vanesa", "", "", "", "", "", "", "", ""];

    for (var sd = 0; sd < 9; sd++) {
        doc.rect(130, pos20, 35, 5);
        doc.rect(165, pos20, 35, 5);
        doc.text(nom2[sd], 147.5, pos20 + 4, null, null, "center");
        doc.text(str(valores_grafica_8[sd], 2), 182.5, pos20 + 4, null, null, "center");
        pos20 = pos20 + 5;
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("7. Viaticos por abogado (MXN)", 8, 170);

    doc.addImage(g_viaticos, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos21 = 190;

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Viaticos por abogado (MXN)", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var st = 0; st < 2; st++) {
        doc.rect(130, pos21, 35, 5);
        doc.rect(165, pos21, 35, 5);
        doc.text(nom2[st], 147.5, pos21 + 4, null, null, "center");
        doc.text("$ " + nfc(str(valores_grafica_9[st]), 2), 182.5, pos21 + 4, null, null, "center");
        pos21 = pos21 + 5;
    }


    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Este reporte es generado por el sistema TBC-DS-LEGAL con los siguientes filtros:", 8, 40);
    doc.text("• Categoria: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Abogado: Todos los abogados", 11, 56);
        doc.text("• Casos: Todos los casos", 11, 62);
    } else {
        doc.text("•   Abogado: " + sel2.value(), 11, 56);
        //doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas",11,56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Casos: Todos los casos", 11, 62);
        } else {
            doc.text("• Casos: " + sel3.value(), 11, 62);
        }
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("8.", 8, 75);
    doc.text("Numero de casos por status", 12, 75);

    doc.addImage(g5, "PNG", 8, 85, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 85, 70, 5, 'FD');
    var pos10 = 90;

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Numero de casos por status", 165, 88.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var sd = 0; sd < 9; sd++) {
        doc.rect(130, pos10, 35, 5);
        doc.rect(165, pos10, 35, 5);
        doc.text(nombre_status[sd], 147.5, pos10 + 4, null, null, "center");
        doc.text(str(valores_grafica_16[sd]), 182.5, pos10 + 4, null, null, "center");
        pos10 = pos10 + 5;
    }

    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("9. Total invertido vs. total recuperado (MXN)", 8, 170);

    doc.addImage(g6, "PNG", 8, 185, 112, 60);

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(130, 185, 70, 5, 'FD');
    var pos11 = 190;

    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Total invertido vs. total recuperado", 165, 188.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var st = 0; st < 2; st++) {
        doc.rect(130, pos11, 35, 5);
        doc.rect(165, pos11, 35, 5);
        doc.text(totales_nom[st], 147.5, pos11 + 4, null, null, "center");
        doc.text("$ " + nfc(str(valores_grafica_18[st]), 2), 182.5, pos11 + 4, null, null, "center");
        pos11 = pos11 + 5;
    }

    doc.addPage();

    doc.setDrawColor(0);
    doc.setFillColor(233, 233, 233);
    doc.rect(0, 5, 500, 20, 'F');

    doc.addImage(img, "PNG", 0, 8, 20, 15);

    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Este reporte es generado por el sistema TBC-DS-LEGAL con los siguientes filtros:", 8, 40);
    doc.text("• Categoria: " + sel1.value(), 11, 50);
    if (sel1.value() == "All types of judgments") {
        doc.text("• Abogado: Todos los abogados", 11, 56);
        doc.text("• Casos: Todos los casos", 11, 62);
    } else {
        doc.text("•   Abogado: " + sel2.value(), 11, 56);
        //doc.text("• Lawyer: Vanesa Garcia Dorantes, Maria Elvira Garcia Barcenas",11,56);
        if (sel2.value() == "All Lawers") {
            doc.text("• Casos: Todos los casos", 11, 62);
        } else {
            doc.text("• Casos: " + sel3.value(), 11, 62);
        }
    }

    doc.setDrawColor(0);
    doc.setFillColor(203, 203, 203);
    doc.rect(8, 70, 192, 10, 'FD');
    var posr = 80;

    doc.setFontSize(16);
    doc.setFontStyle("bold");
    doc.text("Resumen", 104, 76.5, null, null, "center");
    doc.setFontStyle("normal");

    for (var sta = 0; sta < 5; sta++) {
        doc.rect(8, posr, 96, 10);
        doc.rect(104, posr, 96, 10);

        posr = posr + 10;
    }

    doc.text("Numero de casos", 56, 86.5, null, null, "center");
    var total_casos = valores_grafica_11.length - 1;
    doc.text(str(total_casos), 152, 86.5, null, null, "center");

    doc.text("Cantidad total", 56, 96.5, null, null, "center");
    doc.text("$ " + nfc(str(valores_grafica_17[1]), 2), 152.96, 96.5, null, null, "center");

    doc.text("Sucursal con mayor monto", 56, 106.5, null, null, "center");
    doc.text(max_sucursal_nom, 152, 106.5, null, null, "center");

    doc.text("Caso con mayor monto", 56, 116.5, null, null, "center");
    doc.text(max_caso_nom, 152, 116.5, null, null, "center");

    doc.text("Recuperado en mes actual", 56, 126.5, null, null, "center");
    doc.text("$0.00", 152, 126.5, null, null, "center");

    doc.save("Reporte_" + day() + "/" + month() + "/" + year() + "_" + hour() + ":" + minute() + ":" + second() + ".pdf");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
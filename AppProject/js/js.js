$(document).ready(function () {
  
    var objeto = [];

    $('#formulario').on('submit', function (e) {
        e.preventDefault();
        var CuotaConInteres = (($('#txtPrecio').val() / $('#txtCuotas').val()) * 1.024);
        var ape = {
            NumeroTarjeta: $('#txtNumero').val(),
            Propietario: $('#txtPropietario').val(),
            FechaVencimiento: $('#txtFecha').val(),
            NumSeguridad: $('#txtSeguridad').val(),
            Precio: $('#txtPrecio').val(),
            Cuotas: $('#txtCuotas').val(),
            CuotaInteres: CuotaConInteres
        };
        objeto.push(ape);
        console.log(objeto);  
    })


    $('.btnImprimir').on('click', function () {
        
        $("#Table").empty();
        $("#Table").append('<thead>' +
            '<tr>' +
            '<th scope="col">Tarjeta</th>' +
            '<th scope="col">Propietario</th>' +
            '<th scope="col">Fecha Vencimiento</th>' +
            '<th scope="col">Número Seguridad</th>' +
            '<th scope="col">Precio Total</th>' +
            '<th scope="col">Cuotas</th>' +
            '<th scope="col">Cuotas Interes</th>' +
            '</tr>' +
            '</thead>');
        for (i = 0; i < objeto.length; i++) {
            $("#Table").append('<tbody>' +
                '<tr>' +
                '<td align="center" style="dislay: none;">' + objeto[i].NumeroTarjeta + '</td>' +
                '<td align="center" style="dislay: none;">' + objeto[i].Propietario + '</td>' +
                '<td align="center" style="dislay: none;">' + objeto[i].FechaVencimiento + '</td>' +
                '<td align="center" style="dislay: none;">' + objeto[i].NumSeguridad + '</td>' +
                '<td align="center" style="dislay: none;">' + objeto[i].Precio + '</td>' +
                '<td align="center" style="dislay: none;">' + objeto[i].Cuotas + '</td>' +
                '<td align="center" style="dislay: none;">' + objeto[i].CuotaInteres + '</td>' +
                '</tbody>'
            );
        }

    })
})
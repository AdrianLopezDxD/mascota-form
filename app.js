
$(function(){


    $('#btnGuardar').on('click', function(){
        const nombre = $('#txtNombres').val();
        const email = $('#txtEmail').val();
        const telefono = $('#txtTelefono').val();
        const direccion = $('#txtDireccion').val();
        const nombremascota = $('#txtNombreMascota').val();
        const tipomascota = $('#txtTipoMascota').val();
        const raza = $('#txtRaza').val();
        const edad = $('#txtEdad').val();
    console.log('nombre ' +nombre+ ', email ' +email+ ', telefono ' +telefono+ ', direccion '+direccion+ 'nombre de mascota ' +nombremascota+ ', tipo ' +tipomascota+ ', raza ' +raza+ ', edad '+edad);
    alert('nombre ' +nombre+ ', email ' +email+ ', telefono ' +telefono+ ', direccion '+direccion+ 'nombre de mascota ' +nombremascota+ ', tipo ' +tipomascota+ ', raza ' +raza+ ', edad '+edad);
    });
});

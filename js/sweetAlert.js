
//Funciona como los objetos de Js

Swal.fire({
    // Titulo de la ventana
    title: 'Bienvenido',

    // Texto a mostrar
    text: 'Este es el titulo de mi sitio web',
    
    // html: '<p class="titulo"> Hola!! </p>',

    // Icono para la caja de dialogo
    icon: 'info',
        // icon: 'error'
        // icon: 'warning'
        // icon: 'question'
        // icon: 'info',
        // icon: 'success',

    // Texto del boton de dialogo
    confirmButtonText: 'Aceptar',

    // Pie de página
    footer: '<span class="pieDePagina"> Esta es información importarte!! </span>',

    // Ancho del cuadro de dialogo. Trabajarlo en porcentajes para no tener problemas con el diseño responsive
    // width: '90%',

    // Padding, margen interno del alert
    padding: '1rem',

    // background, color de fondo del alert
    background: 'white',

    // Establecer como debe crecer la alerta
    //grow: 'row',
        // grow: 'column'
        // grow: 'fullscreen'

    // Oscurecer o no el fondo al lanzar el alert
    backdrop: true,
        //backdrop: false

    // Timer: tiempo que debe permanecer en pantalla el alert, en milisegundos
    // timer: '5000',

    // Timerprogressbar: muestra una barra de progreso
    // timerProgressBar: true
        //timerProgressBar: false

    // toast: ajusta la ventana al contenido
    toast: false,
        // toast: true

    //toast debe estar en false para que las siguiente opciones funcionen

    allowOutsideClick: true,    //Cierra el popup al dar clic fuera de la ventana
    allowEscapeKey: true,       //Ciera el popup al presionar la tecla scape
    allowEnterKey: true,        //Cierra el popup al presionar la tecla enter
    //stopKeydownPropagation:
});
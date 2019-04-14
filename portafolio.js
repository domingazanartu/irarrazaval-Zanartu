// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg", // en esta parte cambio la descrpcion de la foto
    title: "Diseño Gráfico", // aca se cambia el nombre
    about: "Creación de un nuevo producto para la empresa Maggi.", // aca se cambia la descrpcion 
}, {
    figure: "media/foto-02.jpg",
    title: "Diseño Gráfico",
    about: "Rediseño de la imagen e identidad de marca de las cervezas +56.",
}, {
    figure: "media/foto-03.jpg",
    title: "Diseño Gastronómico",
    about: "La minería: Rediseño del plato de comida papas a la huancaína y con ello la creación de una nueva experiencia.",
}, {
    figure: "media/foto-04.jpg",
    title: "Diseño Industrial",
    about: "La Guacha: Sostenedor de agua de microfibra para los temporeros durante sus jornadas de trabajo.",
}, {
    figure: "media/foto-05.jpg",
    title: "Diseño Textil",
    about: "Froggy: Polera salvadidas de uso diario exclusivas para niños.",
}, {
    figure: "media/foto-06.jpg",
    title: "Diseño Textil",
    about: "Maha: Mat para practicar yoga en el aire, construido a partir de poleras recicladas.",
}, {
    figure: "media/foto-07.jpg",
    title: "Diseño Gráfico",
    about: "Kirk: Diseño de un logo para una nueva aplicación de discoteques.",
},{
    figure: "media/foto-08.jpg",
    title: "Diseño Gráfico",
    about: "Tarjeta de presentación en corte láser.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
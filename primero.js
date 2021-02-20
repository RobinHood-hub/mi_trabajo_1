let datos = [{
    id: 145,
    nombre: 'Robinson',
    curso: 'web',
    duracion: '40 horas',
    valor: 100000
},
{
    id: 162,
    nombre: 'david',
    curso: 'lengua señas',
    duracion: '26 horas',
    valor:12000
},
{
    id: 203,
    nombre: 'jhon',
    curso: 'psicologia',
    duracion: '80 horas',
    valor: 300000
}];


for(let i=0; i<datos.length; i++) {
    setTimeout(() =>{
        console.log(datos[i]);
    }, (2000*(i+1)) );
}
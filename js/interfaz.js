class Interfaz {
  constructor() {
    //Inicializa la app al instanciar 
    this.init()
    //Leer el resultado
    this.listado = document.getElementById('resultado-eventos');

  }

  //Metodo para cuando inicialize la app
  init() {
    //llamar a imprimir categorias de la Rest API
    this.imprimirCategorias()
  }

  //Imprimir categorias
  imprimirCategorias(){
    const listadoCategorias = eventBrite.obtenerCategorias()
      .then(categorias => {
        const cats = categorias.categorias.categories;

        //seleccionar el select de categorias
        const selectCategoria = document.getElementById('listado-categorias')

        //Recorremos el arreglo e imprimos los <options></options>
        cats.forEach(cat => {
          const option = document.createElement('option')
          option.value = cat.id
          option.appendChild(document.createTextNode(cat.name_localized))
          selectCategoria.appendChild(option)
        });
      })
  }

  limpiarMensaje(){
    const alert = document.querySelector('.alert')
    if(alert){
      alert.remove()
    }
  }
  //metodo para imprimir mensajes tomara 2 parametros
  mostrarMensaje(mensaje, clase){
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(mensaje))
    div.classList = clase
    const buscadorDiv = document.getElementById('resultado-eventos')
    buscadorDiv.appendChild(div)
    setTimeout(() => { 
      this.limpiarMensaje() 
    }, 3000);
  }

 // Lee la respuesta de la API e imprime los resultados
 mostrarEventos(eventos) {
  // leer los eventos y agregarlos a una variable
  const listaEventos = eventos.events;

  // recorrer los eventos y crear su template
  listaEventos.forEach(evento => {
       this.listado.innerHTML += `
            <div class="col-md-4 mb-4">
                 <div class="card">
                      <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}"> 
                      <div class="card-body">
                           <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>

                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>

                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>  
                           </div>
                      </div>

                 </div>
            </div>
       `;
  })
}

}
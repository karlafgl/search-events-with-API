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
        console.log(cats)
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
}
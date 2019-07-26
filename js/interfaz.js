class Interfaz {
  constructor() {
    //Inicializa la app al instanciar 
    this.init()
    //Leer el resultado
    this.listado = document.getElementById('resultado-eventos');

  }

  //Metodo para cuando inicialize la app
  init() {

  }

  //Imprimir categorias
  imprimirCategorias(){
    const listadoCategorias = eventBrite.obtenerCategorias()
  }
}
class EventBrite {
  constructor(){
    // https://www.eventbriteapi.com/v3/users/me/events/?token=IZIWYWGUG333UK2AT625
    this.token_auth = 'IZIWYWGUG333UK2AT625';
    this.ordenar = 'date';
  }
  //Obtener categorias desde el init 
  async obtenerCategorias(){
    //Consultar las categorias a la REST API
     const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)

     //Esperar la respuesta de las categorias y devolver un json 
     const categorias = await respuestaCategorias.json()

     //Devolvemos el resultado
     return{
       categorias
     }
  }

  async obtenerEventos(evento, categoria){
    const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`)
    
    const eventos = await respuestaEvento.json()
    console.log(eventos)
    return {
      eventos
    }
  }

}
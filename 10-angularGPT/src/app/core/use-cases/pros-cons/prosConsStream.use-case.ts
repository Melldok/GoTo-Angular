
import { environment } from "../../../../environments/environment";


// Función generadora de un stream de datos. Se utiliza para obtener los datos de la API de forma asíncrona

export async function* prosConsStreamUseCase(prompt : string, abortSignal : AbortSignal) {

  try {

    const resp = await fetch(`${environment.backendApi}/pros-cons-discusser-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt }),
      signal: abortSignal
    });

    if ( !resp.ok ) throw new Error('No se pudo realizar la corrección');

   const reader = resp.body?.getReader();
   if(!reader){
    console.log('No se pudo generar el reader');
    throw new Error('No se pudo generar el reader');
   }

   // Text decoder es un objeto de javascript que permite decodificar datos binarios a texto
   const decoder = new TextDecoder();
   let text = '';

    while(true){
      const { value, done  } = await reader.read();
      if(done){
        break;
      }
      const decodedChunk = decoder.decode(value, { stream : true});
      text += decodedChunk;
      // Mientras los valores de text sean parciales, se retornan con yield
      yield text;
    }
    // Cuando se termina de leer el stream, se retorna el texto completo
    return text


  } catch (error) {
    return null
  }

}

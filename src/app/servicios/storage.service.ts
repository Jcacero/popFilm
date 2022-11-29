import { Injectable } from '@angular/core';
import {getDownloadURL, getStorage, ref,UploadResult, uploadString} from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private respuesta: UploadResult
  private storage = getStorage()

  constructor() { }

  async subirImagen(nombre:string,imagen:any){
    try{
      let referenciaImagen = ref(this.storage,'peliculas/'+nombre)/* guardo la referencia de la imagen en el storage */
      this.respuesta = await uploadString(referenciaImagen,imagen,'data_url') /* se actualiza la imagen del storage */
      .then(resp=>{
        return resp
      })
      return this.respuesta
    }
    catch(error){
      console.log(error)
      return this.respuesta
    }
  }


  obtenerUrlImagen(respuesta:UploadResult){
    return getDownloadURL(respuesta.ref)
  }
}

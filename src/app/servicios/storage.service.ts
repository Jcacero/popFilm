import { Injectable } from '@angular/core';
import {getDownloadURL, getStorage, ref,UploadResult, uploadString} from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private respuesta: UploadResult
  private storage = getStorage()

  constructor() { }


  /* funcion para subir IMG en la BD */
  async subirImagen(nombre:string,imagen:any,carpeta:string){ //recibe nombre de img, la imagen, y el nombre de la carpeta donde se guardará 
    try{
      let referenciaImagen = ref(this.storage,carpeta+'/'+nombre)/* guardo la referencia de la imagen en el storage */
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


  //obtine url de la imagen y la retorna
  obtenerUrlImagen(respuesta:UploadResult){
    return getDownloadURL(respuesta.ref)
  }
}

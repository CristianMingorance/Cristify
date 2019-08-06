import {
  Injectable
} from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  catalogoGrupos = [{
      titulo: "Bella Ciao",
      imagen: environment.img_prefix + "assets/img/grupo1.jpg",
      grupo: "Modena City Ramblers",
      video: environment.img_prefix + "assets/img/bella_ciao.mp4",
    },
    {
      titulo: "Humo",
      imagen: environment.img_prefix + "assets/img/grupo2.jpg",
      grupo: "Jarabe de Palo",
      video: environment.img_prefix + "assets/img/humo.mp4" 
    },
    {
      titulo: "Friday i'm in Love",
      imagen: environment.img_prefix + "assets/img/grupo3.jpg",
      grupo: "The Cure",
      video: environment.img_prefix + "assets/img/the_cure.mp4" 
    } ,{
      titulo: "Chan Chan",
      imagen: environment.img_prefix + "assets/img/grupo4.jpg",
      grupo: "Buena Vista Social Club",
      video: environment.img_prefix + "assets/img/chan_chan.mp4"
    },
    {
      titulo: "Guantanamera",
      imagen: environment.img_prefix + "assets/img/grupo5.jpg",
      grupo: "Compay Segundo",
      video: environment.img_prefix + "assets/img/guantanamera.mp4"
    },
    {
      titulo: "Pastillas de Freno",
      imagen: environment.img_prefix + "assets/img/grupo6.jpg",
      grupo: "Estopa",
      video: environment.img_prefix + "assets/img/pastillas_de_freno.mp4"
    },
   ]



  constructor() {}

}

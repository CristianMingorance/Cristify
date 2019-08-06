import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../service/data.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(public _data: DataService) {}

  vidControl = false; // Es true cuando pulsas el boton videoclip
  catalogo = {grupo : "",
  video : "",
  titulo : ""}

  

  addCatalogo(catalogo) {


    console.log(catalogo)
    this.vidControl = true

    this.catalogo = catalogo;

    return;
  }

  back() {

    this.vidControl = false;

    this.catalogo = {grupo : "",
    video : "",
    titulo : ""};

    return;
  }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-observer',
    templateUrl: './observer.component.html',

})
export class ObserverComponent implements OnInit {
  title = 'search component';
  subject: Subject<string> = new Subject<string>();
  observable: Observable<string> = this.subject.asObservable();
  escritaPorObservador: string;
  escritaPorObservador2: string;
  escritaPorObservador3: string;
  escritaPorEvento: string;
  inputBananina: string;
  inputMagico: string;
  inputOnKeyPress: string;


  constructor() {}
  ngOnInit() {
    //this.observable.subscribe( inputString => console.log('estoy subscripto al observable y entro esto:' + inputString ));
  }

  pushNextToSubject(inputString: string){
    // le manda a todos los registrados el string, cosa que no se puede con observable
    this.subject.next(inputString);
  }

  escribirEscritaPorEvento(inputString: string){
      this.escritaPorEvento = inputString;
  }

  subscribirObserver1() {
    // la funcion que le mando para registrar es un observer
    this.subject.subscribe( inputString => this.escritaPorObservador = inputString);
  }

  subscribirObserver2() {
    // la funcion que le mando para registrar es un observer
    this.subject.subscribe( inputString => this.escritaPorObservador2 = inputString);
  }

  subscribirObserver3() {
    // la funcion que le mando para registrar es un observer
    this.subject.subscribe( inputString => this.escritaPorObservador3 = inputString);
  }


  // este lo llama ub boton
  escribirinputBananina(inputString: string){
    this.inputBananina = inputString;
  }
  escribirInputMagico(inputString: string){
    this.inputMagico = inputString;
  }


  onKey(event: any) {
    console.log(event.target.value);
    this.inputOnKeyPress = event.target.value;
  }

}

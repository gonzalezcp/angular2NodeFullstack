import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
    subject: Subject<string> = new Subject<string>();
    salida: string;
    constructor() {}
    observable: Observable<string>;
    ngOnInit() {
        
    }

    subscribeSubject() {
        console.log('subscribeSubject');
        this.subject.subscribe(value => console.log('Received new subject value: ' + value));
    }
    subscribeObservable() {
        console.log('subscribeObservable');
        this.observable = this.subject.asObservable().subscribe(value => console.log('Received new observable value: ' + value));
    }

    // push el termino de busqueda en el strem Observable
    search(term: string): void {
        this.subject.next(term);
    }

}
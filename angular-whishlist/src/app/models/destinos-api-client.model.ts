import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
    destinos: DestinoViaje[];
    current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);
    constructor () {
        this.destinos = [];
    }
    add(d: DestinoViaje){
        this.destinos.push(d);
    }
    getAll(): DestinoViaje[] {
        return this.destinos;
    }
    getById(id: String): DestinoViaje {
        return this.destinos.filter(function (d) { return d.nombre == id; })[0];
    }
    elegir(d: DestinoViaje) {
        this.destinos.forEach(x => x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }
    subscribeOnChange(fn) {
        this.current.subscribe(fn);
    }
}
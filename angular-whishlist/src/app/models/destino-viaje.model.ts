export class DestinoViaje {

    public servicios: string[];
    private selected: boolean;
    constructor(public nombre: string, public u: string) {
        this.servicios = ['pileta', 'desayuno'];
     }

    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
}
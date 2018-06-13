import { Component, EventEmitter, Output } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectedScreen = new EventEmitter<string>();

    onSelect(screen: string){
        this.selectedScreen.emit(screen);
    }

}
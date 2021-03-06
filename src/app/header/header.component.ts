import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: []
})
export class HeaderComponent {
    @Output() featuredSelected = new EventEmitter<string>();
    onSelected(feature:string){
        this.featuredSelected.emit(feature);
    }

}
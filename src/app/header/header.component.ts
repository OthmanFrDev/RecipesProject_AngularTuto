import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: []
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}
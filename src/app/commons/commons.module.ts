import {NgModule} from "@angular/core";
import {CustomSpinner} from "./spinner/customSpinner";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [CustomSpinner],
    imports: [CommonModule],
    providers: [],
    exports: [CustomSpinner]
})

export class CommonsModule { }

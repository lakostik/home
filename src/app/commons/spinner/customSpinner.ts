import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'customSpinner',
  templateUrl: 'customSpinner.html',
  styleUrls: ['customSpinner.css']
})

export class CustomSpinner implements OnInit, OnChanges {

  @Input() status: any = 1;
  public round: number = 0;
  // status = 0;

  constructor() {

  }

  ngOnInit(){
    console.log(this.status);

  }

  ngOnChanges(status: SimpleChanges) {

    console.log(this.status);
  }

}

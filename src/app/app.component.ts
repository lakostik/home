import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HomeProject';
  statusSpinner = 0;

  ngOnInit() {
    console.log('init start page');

    setInterval(() => {
      if(this.statusSpinner == 0) {
        this.statusSpinner++
      }else if(this.statusSpinner == 1 ){
        this.statusSpinner++
      }else if(this.statusSpinner == 2 ){
        this.statusSpinner++
      }else if(this.statusSpinner == 3 ){
        this.statusSpinner = 0
      }
    }, (3500))
  }
}

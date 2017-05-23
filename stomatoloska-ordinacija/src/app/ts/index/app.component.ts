import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './../../templates/index/app.component.html',
  styleUrls: ['./../../css/style.css']
})
export class AppComponent {
  title = 'ROOT';

   toTop() {
//        let currentPos: number = document.body.scrollTop
//      let incrementer: number = 0;
    console.log(`toTop ${document.body.scrollTop}`)


//     for (let i: number = 0, lenI: number = currentPos; i < lenI; i++) {

//     incrementer++;
//     console.log(Math.pow(1.05, incrementer))
//          
    document.body.scrollTop = 0
//     }
//     console.log(`KRAJ`)


    // document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    // document.documentElement.scrollTop = 0; // For IE and Firefox  
  }
}

import { Component } from '@angular/core';

@Component({
  templateUrl: './../../templates/main-page/main-page.view.html',
  styleUrls: ['./../../css/style.css']
})
export class MainPageComponent {
  title = 'MainPage Component';

  personObj = [];
    result = null;
    submitted = false;

    person = {
        name: '',
        email: '',
    };

    onSubmit() {
      console.log(`onSubmit...`);
      
    };
    active = true;
}

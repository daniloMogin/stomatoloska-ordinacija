import { Component } from '@angular/core';

@Component({
  templateUrl: './../../templates/contact/contact.view.html',
  styleUrls: ['./../../css/style.css']
})
export class ContactComponent {
  title = 'Kontakt';

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

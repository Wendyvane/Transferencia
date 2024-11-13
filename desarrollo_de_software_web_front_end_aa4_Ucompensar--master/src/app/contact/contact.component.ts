import { Component } from '@angular/core';

import contacs from 'src/assets/json/contact.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contacts: any = contacs;

}

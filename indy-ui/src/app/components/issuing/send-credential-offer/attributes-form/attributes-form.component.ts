import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from 'app/helpers/form-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attributes-form',
  templateUrl: './attributes-form.component.html',
  styleUrls: ['./attributes-form.component.scss']
})
export class AttributesFormComponent implements OnInit {

  @Input() question: FormBase<any>;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

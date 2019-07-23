import { Component, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatChipInputEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['./create-schema.component.scss']
})
export class CreateSchemaComponent implements OnInit {
  attributes = [];
  createSchema: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private indyAPI: ApiService
  ) { }

  ngOnInit() {
    this.createSchema = this._formBuilder.group({
      name: ['', Validators.required],
      version: ['', Validators.required]
    })
  }

  addSchema() {
    const name = this.createSchema.get('name').value;
    const version = this.createSchema.get('version').value;
    const attributes = this.attributes;
    this.indyAPI.createSchema(name, version, attributes).subscribe(
      res => {
        if (res['success']) {
          this.createSchema.reset();
          this.attributes = [];
          this.openSnackBar('Schema successfully send')
        }
      },
      err => { console.log(err) }
    );

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our person
    if ((value || '').trim()) {
      const name = value.trim();
      this.attributes.push(name);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  remove(attr): void {
    const index = this.attributes.indexOf(attr);

    if (index >= 0) {
      this.attributes.splice(index, 1);
    }
  }

}

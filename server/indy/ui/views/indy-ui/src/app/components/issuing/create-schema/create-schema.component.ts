import { Component, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatChipInputEvent, MatDialog } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { SchemaMetaData, AttributesMetaDataComponent } from './attributes-meta-data/attributes-meta-data.component';

@Component({
  selector: 'app-create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['./create-schema.component.scss']
})
export class CreateSchemaComponent implements OnInit {
  dialogRef;
  attributes: Array<SchemaMetaData> = [];
  addOnBlur: boolean = true;
  createSchema: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
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
    const attributes_with_key = [];
    this.attributes.forEach((attribute) => {
      attributes_with_key.push(
        JSON.stringify(attribute)
      );
    });
    console.log(attributes_with_key);
    this.indyAPI.createSchema(name, version, attributes_with_key).subscribe(
      res => {
        if (res['success']) {
          this.createSchema.reset({
            name: '',
            version: ''
          });
          this.attributes = [];
          this.openSnackBar('Schema successfully send')
        }
      },
      err => { console.log(err) }
    );
  }

  openMetaDataDialog(name): void {
    this.dialogRef = this.dialog.open(AttributesMetaDataComponent, {
      width: '60%',
      data: {
        title: 'MetaData',
        name: name,
        order: 0,
        metadata: {
          type: '',
          options: []
        }
      }
    });
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
    if ((value || '').trim()) {
      const name = value.trim();
      this.openMetaDataDialog(name);
      this.dialogRef.afterClosed().subscribe((result: SchemaMetaData) => {
        this.attributes.push(result);
      });
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';

export interface SchemaMetaData {
  name: string;
  order: number;
  metadata: {
    type: string,
    options: Array<{ key: string, value: string }>
  };
}

@Component({
  selector: 'app-attributes-meta-data',
  templateUrl: './attributes-meta-data.component.html',
  styleUrls: ['./attributes-meta-data.component.scss']
})
export class AttributesMetaDataComponent {
  selectedType: string;
  types = ['textbox', 'list'];
  constructor(
    public dialogRef: MatDialogRef<AttributesMetaDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchemaMetaData) {
  }

  onSave(): void {
    const result: SchemaMetaData = {
      name: this.data.name,
      order: this.data.order,
      metadata: this.data.metadata
    };
    this.dialogRef.close(result);
  }
  onNoClick() {
    this.dialogRef.close(null);
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      const name = value.trim();
      this.data.metadata.options.push({ key: name, value: name });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  remove(attr): void {
    const index = this.data.metadata.options.indexOf(attr);

    if (index >= 0) {
      this.data.metadata.options.splice(index, 1);
    }
  }
}

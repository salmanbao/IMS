import { Injectable } from '@angular/core';
import { FormBase } from 'app/helpers/form-base';
import { Dropdown } from 'app/helpers/dropdown';
import { Textbox } from 'app/helpers/textbox';

@Injectable()
export class FormService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    getForm(attributes) {

        let form: FormBase<any>[] = [];
        // = [

        // new Dropdown({
        //     key: 'brave',
        //     label: 'Bravery Rating',
        //     options: [
        //         { key: 'solid', value: 'Solid' },
        //         { key: 'great', value: 'Great' },
        //         { key: 'good', value: 'Good' },
        //         { key: 'unproven', value: 'Unproven' }
        //     ],
        //     order: 3
        // }),
        let i = 0;
        for (const attr of attributes) {
            switch (attr.metadata.type) {
                case 'list':
                    form.push(
                        new Dropdown({
                            key: attr.name,
                            label: attr.name,
                            options: attr.metadata.options,
                            order: attr.metadata.order
                        }));
                    break;
                case 'textbox':
                    form.push(
                        new Textbox({
                            key: attr.name,
                            value: '',
                            required: true,
                            order: attr.metadata.order
                        }));
                    break;

                default:
                    break;
            }

        }

        // new Textbox({
        //     key: 'emailAddress',
        //     label: 'Email',
        //     type: 'email',
        //     order: 2
        // })
        // ];
        return form.sort();
    }
}

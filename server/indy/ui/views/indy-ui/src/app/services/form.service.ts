import { Injectable } from '@angular/core';
import { FormBase } from 'app/helpers/form-base';
import { Dropdown } from 'app/helpers/dropdown';
import { Textbox } from 'app/helpers/textbox';

@Injectable()
export class FormService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    getForm(attributes) {

        let form: FormBase<any>[] = []; //
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
            form.push(new Textbox({
                key: attr,
                value: '',
                required: true,
                order: i++
            }));
        }


        // new Textbox({
        //     key: 'emailAddress',
        //     label: 'Email',
        //     type: 'email',
        //     order: 2
        // })
        // ];

        return form.sort((a, b) => a.order - b.order);
    }
}

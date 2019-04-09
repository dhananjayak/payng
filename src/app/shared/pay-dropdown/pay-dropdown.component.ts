import { Component, Input } from '@angular/core';
import { Option } from 'src/app/shared/models/option.model';

@Component({
    selector: 'pay-dropdown',
    templateUrl: 'pay-dropdown.component.html'
})
export class PayDropDown
{
    @Input() selectLabel: string;
    @Input() label: string;
    @Input() items: any[]

    select(item: any): void {
        this.selectLabel = item;
    }
}
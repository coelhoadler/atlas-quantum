import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fmtBtcPipe'})
export class FmtBtcPipe implements PipeTransform {
    transform(value: number, percentage: number) {
        percentage = percentage / 100;
        const v = (value * percentage) + Math.round(value);
        return v.toFixed(8);
    }
}

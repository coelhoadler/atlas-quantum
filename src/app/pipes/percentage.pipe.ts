import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fmtPercentagePipe'})
export class FmtPercentagePipe implements PipeTransform {
    transform(value: string) {
        return `${parseInt(value, 10) / 100}%`;
    }
}

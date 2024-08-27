import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'locale'
})
export class LocalePipe implements PipeTransform {
    transform(status: string): string {
        switch (status.toLowerCase()) {
            case 'endangered':
                return 'Đáng báo động';
            case 'vulnerable':
                return 'Nguy hiểm';
            case 'near threatened':
                return 'Cần quan tâm';
            case 'least concern':
                return 'Còn ít';
            default:
                return 'Ok';
        }
    }

}

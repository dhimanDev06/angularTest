import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbycheck',
  pure: false
})
export class FilterbycheckPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let selected:any = value.filter((a:any)=>a.checked);
    let notSelected:any = value.filter((a:any)=>!a.checked);
    return [...selected,...notSelected];
  }

}

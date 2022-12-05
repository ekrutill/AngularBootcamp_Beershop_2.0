import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
// export class SearchFilterPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     if(!value)return null;
//     if(!args)return value;

//     args = args.toLowerCase();

//     return value.filter(function(data: any){
//         return JSON.stringify(data).toLowerCase().includes(args);
//     });
// }
// }
//  ---------------------- another solution to query and check value:

export class SearchFilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[], query: string, checkValue: string, key: string = ''): T[] {

    if (!Array.isArray(value) || !query || ! checkValue) {
      return value;
    }

    if (!key) {
      return value.filter(
        item => Object.values(item).join(' ').toLowerCase().includes(query.toLowerCase())
      );
    }

    if(query) {
      return value.filter(item => item[key].toString().toLowerCase().includes(query.toLowerCase()));
    }
    if(checkValue) {
      return value.filter(item => item[key].toString().toLowerCase().includes(checkValue.toLowerCase()));
    }
    else {
      return value;
    }

  }

}



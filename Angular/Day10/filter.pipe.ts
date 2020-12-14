import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, search:string) {
         if(value.length==0){
             return value;
         }
         let Emparr:any[]=[];
        for(let i=0;i<value.length;i++){
            let name:string=value[i].name;
            let status:string='';
            
            if(name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())>-1){
                Emparr.push(value[i]);
            }else if(value[i].status.toLowerCase().startsWith(search.toLocaleLowerCase())){
                Emparr.push(value[i]);
            }else if(value[i].country.cname.toLowerCase().indexOf(search.toLowerCase())>-1){
                Emparr.push(value[i]);
            }              

        }       
        return Emparr;

    }

}
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicDiv';
  lists
ngOnInit(){
      this.lists=[]
  this.lists.push({"declare":""})
    }

    addbutton()
    {
      this.lists.push({"declare":""})
    }
    deletebutton(i: number) {
      this.lists.splice(i, 1);
      console.log(this.lists)
    }
   
    listChange(position: any, values: any)
    {
      debugger;
      this.lists[position].declare=values;

      console.log(this.lists)
    }
}

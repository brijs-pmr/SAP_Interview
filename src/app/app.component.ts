import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'sap-fe-interviews';
  data:any;
  sortlist:any;
  Asending:boolean = true;
  IsDesc:boolean = false;
  book : any[] = [];
  gridflag = true;
  Ascending = true;
  bookname : string;
  
  
  constructor(private httpClient: HttpClient){

  }
  

  ngOnInit(){

    this.httpClient.get("assets/books.json").subscribe(data =>{
      debugger;
      console.log(data);
      this.data = data;
      this.sortlist = data;
    })

  }

  
  
  grid(flag:boolean){
    this.gridflag = flag;
  }
  titlesorting(property){
    this.IsDesc = !this.IsDesc;

    let newData = this.IsDesc ? 1: -1;
    this.sortlist.sort(function(a,b){
      if(a[property]<b[property]){
        return -1 * newData;
      }
      else if(a[property]>b[property]){
        return 1*newData;
      }
      else {
        return 0;
      }
    });
  }
  votesorting(){
    debugger;
      if(this.Ascending){
        let newarr = this.sortlist.sort((a,b)=>a.votes - b.votes);
        this.data = newarr;
      }else{
        let newarr = this.sortlist.sort((a,b)=>b.votes - a.votes);
        this.data = newarr;
      }
      this.Ascending = !this.Ascending
  }
  Search(){
    if(this.bookname == ""){
      this.ngOnInit
    }else{
      this.data = this.data.filter(res =>{
        return res.data.title.toLocaleLowerCase().match(this.bookname.toLocaleLowerCase());
      })
    }
  }
}

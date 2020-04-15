import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  name = 'Kevin R';
c = 1;
a = 0;
b =0;
d = 0;
e = 0;
count = 0;
output = [];
output2 = [];
temp = "";
cek: boolean = true;
  klikButton( a,  b){
    this.c = 1;
    for(var i = 0; i< this.b ; i++){
      this.c = this.c*this.a;
    }

if(this.a > this.b){
  this.d = this.a;
  this.e = this.b;
}
else{
  this.d = this.b;
  this.e = this.a;
}

    if((this.c % 2) == 0) {
      for(var j = this.d; j <= this.c; j++){
        this.temp = "";
        for(var k = 0; k < j; k++){
          this.temp += "*";
        }
        this.output.push(this.temp);
      this.count++;
      }
    }
    else if((this.c %2)!= 0){
      for(var j = 0; j<this.d;j++){
        this.temp = "";
  for(var k = this.d; k >=1; k--){
    this.temp += "*";
  }
   for(var l = this.e; l >=1; l--){
    this.temp += "o";
  }

      }
        this.output2.push(this.temp);
      this.count++;
      
    }
}

hapusButton(){
 for(var i = 0;i<this.count;i++){
this.output.pop();
 }
  this.count = 0;
}
}

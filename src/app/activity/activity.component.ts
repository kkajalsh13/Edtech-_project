import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  score_part= false
  score = 0
  id= -1
  ans:any = []
  correct_ans:any = [2,0,1,3]
  company:any= ["Bentley","Google","Bugatti","Facebook"]
  colors:any= ["rgb(140, 145, 237)","rgb(230, 163, 109)","rgb(237, 141, 215)","rgb(60, 239, 75)"]
  Alpha:any = ["A","B","C","D"]
  Values: any = [[55.08, 21.69, 20.71, 17.83, 8.71, 36.77, 31.55, 5.25, 5.81, 20.04], [21.04, 2.36, -1.62, -6.30, 1.20, 0, 0, 0.58, 0.34, 3.94], [6.58, 4.48, 1.50, 7.01, 3.32, 0, 22.15, 1.55, 0.53, 8.31], [15.32, 7.69, 4.67, 8.39, 2.25, 0, 8.15, 0.67, 1.40, 12.13]]

  reset(){
    window.location.reload()
  }
  submit(){
    this.score_part=true
    for(let i =0; i<this.correct_ans.length; i++){
      if(this.ans[i]==this.correct_ans[i]){
        this.score+= 1
      }
    }
  }
  select1(event:any){
    this.id = event.target.id
    let kk = Number(this.id)
  } 

  select2(event:any){
    let ks = event.target.id;
    let x = this.Alpha.indexOf(ks)
    if(Number(this.id) >= 0){
       if(this.ans.includes(Number(this.id))){
          let y = this.ans.indexOf(Number(this.id))
          this.ans[y] = null;
         (document.getElementById(String(this.Alpha[y])) as HTMLElement).style.backgroundColor = "rgb(162, 178, 224)";
         (document.getElementById(String(this.Alpha[y])) as HTMLElement).innerHTML = "Company " + this.Alpha[y];
        }
         this.ans[x] = Number(this.id);
         (document.getElementById(String(ks)) as HTMLElement).style.backgroundColor = this.colors[this.id];
         (document.getElementById(String(ks)) as HTMLElement).innerHTML = this.company[this.id];
    }     

  }

}


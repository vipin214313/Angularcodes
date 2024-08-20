import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { GenderPipe } from './gender.pipe';
import { DatePipe } from '@angular/common';
import { HelloPipe } from './hellow.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GenderPipe,DatePipe,HelloPipe,RouterModule,CommonModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipeDemo';
  //DatePipe 
  x= new Date(2024,1,3,1,1,1);

students =[
  {stuId:1,name:"raghav",gender:0},
{stuId:2,name:"Jinisha",gender:1},
{stuId:3,name:"Madhav",gender:0}
]

  persons = [
    {
      id: 1,
      name: 'Hardik Savani',
      gender: 0,
      website: 'itsolutionstuff.com'
    },
    {
      id: 2,
      name: 'Kajal Patel',
      gender: 1,
      website: 'nicesnippets.com'
    },
    {
      id: 3,
      name: 'Harsukh Makawana',
      gender: 0,
      website: 'laracode.com'
    }
  ]
}

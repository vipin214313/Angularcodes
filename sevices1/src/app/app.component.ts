import { Component,OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoService } from './demo.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  posts:any;
constructor (private service:DemoService){}
  ngOnInit(): any {
  this.service.getpost().subscribe(response=>{
    this.posts=response;
  });
  }
  title = 'sevices1';
}

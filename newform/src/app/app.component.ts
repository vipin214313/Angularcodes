import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,NgForm,NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newform';

  RegisterStudent(studentForm: NgForm):void{
    console.log(studentForm.value);
  }
}

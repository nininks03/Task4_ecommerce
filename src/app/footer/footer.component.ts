import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,ContactUsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // constructor(private renderer: Renderer2) {
  //   this.renderer.removeClass(document.body, 'login-page');
  // }

  ngOnInit(): void {}
}

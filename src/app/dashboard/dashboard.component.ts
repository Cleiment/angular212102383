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
  nama = 'Cleimentinus Venti';
  nim = '212102383';

  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.removeClass(document.body, 'dark-mode');

    document.getElementById('dashboard-script')?.remove();

    let scriptEl = document.createElement('script');
    scriptEl.id = 'dashboard-script';
    scriptEl.src = 'assets/dist/js/pages/dashboard.js';
    this.renderer.appendChild(document.body, scriptEl);
  }

  ngOnInit(): void {}
}

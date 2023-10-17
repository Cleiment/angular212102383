import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
})
export class Dashboard2Component implements OnInit {
  nama = 'Cleimentinus Venti';
  nim = '212102383';

  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'dark-mode');

    document.getElementById('dashboard-script')?.remove();

    let scriptEl = document.createElement('script');
    scriptEl.id = 'dashboard-script';
    scriptEl.src = 'assets/dist/js/pages/dashboard2.js';
    this.renderer.appendChild(document.body, scriptEl);
  }

  ngOnInit(): void {}
}

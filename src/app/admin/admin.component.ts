import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'sidebar-open');

    let scriptEl = document.createElement('script');
    scriptEl.src = 'assets/dist/js/pages/dashboard2.js';
    this.renderer.appendChild(document.body, scriptEl);
  }

  ngOnInit(): void {}
}

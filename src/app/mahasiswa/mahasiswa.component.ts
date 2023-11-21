import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css',
})
export class MahasiswaComponent implements OnInit, AfterViewInit {
  data: any;
  tableMahasiswa: any;

  nama = 'Cleimentinus Venti';
  nim = '212102383';

  constructor(private http: HttpClient, private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.removeClass(document.body, 'dark-mode');

    document.getElementById('dashboard-script')?.remove();
  }

  ngAfterViewInit(): void {
    this.tableMahasiswa = $('#table-mahasiswa').DataTable({
      columnDefs: [
        {
          className: 'dtr-control',
          orderable: false,
          targets: 0,
        },
      ],
      order: [1, 'asc'],
      responsive: {
        details: {
          type: 'column',
          target: 'tr',
        },
      },
    });

    this.bind_mahasiswa();
  }

  ngOnInit(): void {}

  bind_mahasiswa(): void {
    this.http
      .get('https://stmikpontianak.net/011100862/tampilMahasiswa.php')
      .subscribe((data: any) => {
        data.forEach((e: any) => {
          const tempatTanggalLahir: string =
            e.TempatLahir + ', ' + e.TanggalLahir;

          const row = [
            '',
            e.NIM,
            e.Nama,
            e.JenisKelamin,
            tempatTanggalLahir,
            e.JP,
            e.Alamat,
            e.StatusNikah,
            e.TahunMasuk,
          ];

          this.tableMahasiswa.row.add(row);
        });

        this.tableMahasiswa.draw(false);
      });
  }
}

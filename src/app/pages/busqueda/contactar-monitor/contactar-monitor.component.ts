import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MonitoriasService } from 'src/app/services/monitorias.service';

@Component({
  selector: 'app-contactar-monitor',
  templateUrl: './contactar-monitor.component.html',
  styleUrls: ['./contactar-monitor.component.css']
})
export class ContactarMonitorComponent implements OnInit {

  qrUrl: SafeHtml;

  constructor(
    private monitoriasService: MonitoriasService,
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.monitoriasService.getContactoMonitor(this.dialogConfig.data).subscribe(
      (qr: any) => {
        this.qrUrl = this.sanitizer.bypassSecurityTrustHtml(qr);
      }
    )
  }


}

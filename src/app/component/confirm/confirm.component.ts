import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private dailogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
  }

  onYes() {
    this.dailogRef.close(true)
  }
  onNo() {
    this.dailogRef.close(false)
  }

}

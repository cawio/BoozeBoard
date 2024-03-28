import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

@Component({
    selector: 'app-toast-dialog',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule],
    templateUrl: './toast-dialog.component.html',
    styleUrl: './toast-dialog.component.scss',
})
export class ToastDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ToastDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ToastDialogData
    ) {}
}

export type ToastDialogData = {
    title: string;
    message: string;
    buttonText: string;
};

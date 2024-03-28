import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, inject } from '@angular/core';
import {
    MatDialog,
    MatDialogConfig,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

import { CardComponent } from 'src/app/features/board/card/card.component';
import {
    ToastDialogComponent,
    ToastDialogData,
} from 'src/app/features/board/toast-dialog/toast-dialog.component';
import { BoozeTile } from 'src/app/models/BoozeTile';
import { BoozeStore } from 'src/app/stores/booze.store';

@Component({
    selector: 'app-game-grid',
    standalone: true,
    imports: [MatGridListModule, CardComponent, MatDialogModule],
    templateUrl: './game-grid.component.html',
    styleUrl: './game-grid.component.scss',
    // a spin animation on click of a tile
    animations: [
        trigger('spin', [
            state('true', style({ transform: 'rotateY(180deg)' })),
            state('false', style({ transform: 'rotateY(0deg)' })),
            transition('false => true', animate('500ms ease-in')),
            transition('true => false', animate('500ms ease-out')),
        ]),
    ],
})
export class GameGridComponent {
    private readonly booze = inject(BoozeStore);
    tiles = this.booze.entities;
    dimensions = this.booze.dimenstions;
    isSpinning = false;

    constructor(public dialog: MatDialog) {}

    onTileClick(tile: BoozeTile): void {
        if (tile.isSpun) {
            return;
        }

        tile.isSpun = !tile.isSpun;

        if (tile.drink) {
            const dialogConfig: MatDialogConfig<ToastDialogData> = {
                width: '300px',
                height: '300px',
                position: { top: '100px', left: '100px' },
                data: {
                    title: 'You Lose!',
                    message: 'You have to drink!',
                    buttonText: 'OK',
                },
            };

            const dialogRef = this.dialog.open(
                ToastDialogComponent,
                dialogConfig
            );

            dialogRef.afterClosed().subscribe(() => {
                this.booze.reset();
            });
        }
    }
}

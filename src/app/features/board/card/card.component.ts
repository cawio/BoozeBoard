import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { BoozeTile } from 'src/app/models/BoozeTile';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    @Input() tile: BoozeTile | undefined;
}

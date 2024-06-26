import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppStore } from 'src/app/stores/app.store';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    private readonly appStore = inject(AppStore);
    title = 'BoozeBoard';
    darkThemeEnabled = this.appStore.darkThemeEnabled;

    constructor() {}

    onToggleThemeButtonClick() {
        this.appStore.toggleTheme();
    }
}

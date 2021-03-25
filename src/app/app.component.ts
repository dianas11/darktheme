import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from './theme.service';

import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpro1';
  isDarkMode: boolean;
  showFiller = false;

  constructor(private ThemeService: ThemeService, public dialog: MatDialog) {
   this.ThemeService.initialTheme();
   this.isDarkMode = this.ThemeService.isDarkMode();
  }


  toggleDarkMode() {
    //console.log(3);
    this.isDarkMode = this.ThemeService.isDarkMode();
    // if (this.isDarkMode) {
    //   this.ThemeService.update('light-mode');
    // } else {
    //   this.ThemeService.update('dark-mode');
    // }

    this.isDarkMode ? this.ThemeService.update('light-mode') : this.ThemeService.update('dark-mode');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog closed`);
    });
  }


}


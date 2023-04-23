import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateCheckerService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    // check for updates every 6 hours
    interval(6 * 60 * 60 * 1000)
      .pipe(
        tap(() => {
          swUpdate.checkForUpdate().then(() => console.log('checked for updates'));
        })
      )
      .subscribe();

    // show snackbar when update is available
    swUpdate.available.subscribe(() => {
      const snackbarRef = this.snackbar.open('New version available', 'Activate');
      snackbarRef.onAction().subscribe(() => {
        swUpdate.activateUpdate().then(() => document.location.reload());
      });
    });
  }
}


import { Component, signal } from '@angular/core';
import { WithOutput } from './with-output';
import { WithHostListener } from './with-host-listener';

@Component({
  selector: 'app-root',
  imports: [WithOutput, WithHostListener],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public show = signal<boolean>(false);

  public toggle(): void {
    this.show.set(!this.show());
  }

  public doSomething(): void {}
}

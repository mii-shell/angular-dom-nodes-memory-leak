import { Component, output } from '@angular/core';

@Component({
  selector: 'app-with-output',
  template: `
    <div>With output</div>
  `,
})
export class WithOutput {
  public myOutput = output<void>();

  public onClick(): void {
    this.myOutput.emit()
  }
}

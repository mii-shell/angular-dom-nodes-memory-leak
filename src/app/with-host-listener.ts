import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-with-host-listener',
  template: `
    <div>With HostListener</div>
  `,
})
export class WithHostListener {
	@HostListener('click', ['$event'])
	public onClick(event: MouseEvent): void {}
}

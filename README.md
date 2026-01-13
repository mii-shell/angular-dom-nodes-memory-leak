# Minimal reproduction of memory leak in Angular with SSR

### How to reproduce
* Either start the app with `npm start` or run a production build `npm run build --production` and start the built app with e.g. VS Code's live server (the latter is to avoid having debug references in the heap)
* Open the app
* Open Dev Tools
* Click the toggle button multiple times
* Take a snapshot of the heap
* You now see multiple detached instances of both components wich are still held in memory even though not used anymore

### Validation
* Remove `@HostListener` from `WithHostListener` component
  ```ts
  // Change this
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {}

  // to this
  public onClick(event: MouseEvent): void {}

  ```
* Remove `WithOutput` component's output listener from `App` component
  ```html
  <!-- change this -->
  <app-with-output (myOutput)="doSomething()"></app-with-output>

  <!-- to this -->
  <app-with-output></app-with-output>
  ```
* Now run the app (in your preferred mode) again
* Click the toggle button multiple times
* Take a heap snapshot
* Now you can see that the DOM Nodes are cleaned up correctly

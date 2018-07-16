import { Component } from '@angular/core';

@Component({
  selector: 'app-foo',
//   template: '<h1>Some Peculiar Foo App</h1>',
  template: `
       <h1>{{title}}</h1>
       <h2>Some Peculiar Foo App</h2>
       `,
//   styles: ['h1 { font-weight: 800; color: red; }']
styles: [`
        h1, h2{color:green;}
        p{font-size:13px; font-family:Verdana;}
        :host {
            font-family: Verdana;
            color: #559;
        }
   `]

})
export class FooComponent {
  title = 'Peculiar Foo';
}

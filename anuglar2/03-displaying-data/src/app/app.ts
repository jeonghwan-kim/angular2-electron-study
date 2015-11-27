
// 1. Import symbols
import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
  selector: 'my-app',

  // We can use "template" or "templateUrl"
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ng-for="#hero of heroes">
        {{ hero.id }}:
        {{ hero.name }}
      </li>
    </ul>
    <p *ng-if="heroes.length > 3">There are many heroes.</p>
    `,

    // 2. Register NgFor as a directive accessible to the template
    directives: [CORE_DIRECTIVES]
})

// We don't create new instance.
// It is related my-app sel
export class AppComponent {
  // title = 'Tour of Heroes';
  // myHero = 'Windstorm';

  // We can also use constructor function.
  title: string;
  myHero: Hero;
  // heroes: [string];
  heroes: [Hero]

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }
}

bootstrap(AppComponent);

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes= [
      { id: 12, name: 'Rogue' },
      { id: 13, name: 'Gambit' },
      { id: 14, name: 'Spot' },
      { id: 15, name: 'Rorshaque' },
      { id: 16, name: 'Sentinel' },
      { id: 17, name: 'Galactus' },
      { id: 18, name: 'Spiral' },
      { id: 19, name: 'Spawn' },
      { id: 20, name: 'Quicksilver' },
      { id: 21, name: 'Psylocke' },
    ]
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

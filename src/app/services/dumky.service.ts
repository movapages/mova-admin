import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {dumkyList, dumkaListInterface} from "../shared/data/DumkyList";

@Injectable({
  providedIn: 'root'
})
export class DumkyService {
  public dumkyBS = new BehaviorSubject<dumkaListInterface[]>(dumkyList);
  public oneDumkaBS = new BehaviorSubject<dumkaListInterface | null>(null);
  constructor() { }
}

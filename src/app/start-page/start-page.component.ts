import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {DumkyService} from "../services/dumky.service";
import {dumkaListInterface} from "../shared/data/DumkyList";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent implements OnInit {

  public dumkyList: Observable<dumkaListInterface[] | null> | undefined;
  public oneDumka: Observable<dumkaListInterface | null> | undefined;
  constructor(private dumkyService: DumkyService) {}

  ngOnInit() {
    this.dumkyList = this.dumkyService.dumkyBS.asObservable();
    this.oneDumka = this.dumkyService.oneDumkaBS.asObservable();
  }

  showDumka(e: (Event | undefined), item: dumkaListInterface): void {
    e?.preventDefault();
    this.dumkyService.oneDumkaBS.next(this.dumkyService.dumkyBS.getValue().filter(el => el.id === item.id)[0]);
  }

}

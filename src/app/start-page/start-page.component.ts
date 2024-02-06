import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {DumkyService} from "../services/dumky.service";
import {dumkaListInterface} from "../shared/data/DumkyList";
import {ModalComponent} from "../shared/modal/modal.component";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ModalComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent implements OnInit {

  public dumkyList: Observable<dumkaListInterface[] | null> | undefined;
  public oneDumka: Observable<dumkaListInterface | null> | undefined;

  public currentModal = -1;

  constructor(private dumkyService: DumkyService) {}

  ngOnInit() {
    this.dumkyList = this.dumkyService.dumkyBS.asObservable();
    this.oneDumka = this.dumkyService.oneDumkaBS.asObservable();
  }

  changeCurrentModal(item: dumkaListInterface): void {
    this.currentModal = (this.currentModal === item.id) ? -1 : item.id;
    this.dumkyService.controlDumkaBS.next(item);
  }

  showDumka(e: (Event | undefined), item: dumkaListInterface): void {
    e?.preventDefault();
    this.dumkyService.oneDumkaBS.next(this.dumkyService.dumkyBS.getValue().filter(el => el.id === item.id)[0]);
  }

  closeModal(): void {
    this.currentModal = -1;
  }

}

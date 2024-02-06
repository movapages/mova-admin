import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AsyncPipe, CommonModule} from "@angular/common";
import {dumkaListInterface} from "../data/DumkyList";
import {DumkyService} from "../../services/dumky.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  public controlDumky: Observable<dumkaListInterface | null> | undefined;
  @Output() closeModal = new EventEmitter<null>();
  constructor(private dumkyService: DumkyService) {}

  ngOnInit() {
    this.controlDumky = this.dumkyService.controlDumkaBS.asObservable();
  }

  closeThisModal(): void {
    this.closeModal.emit(null);
  }

  publishDumku(item: dumkaListInterface): void {
    item.d_status = true;
    const filteredDumky = this.dumkyService.dumkyBS.getValue()
      .filter(el => el.id !== item.id);
    filteredDumky.push(item);
    this.dumkyService.dumkyBS.next(filteredDumky);
  }

}

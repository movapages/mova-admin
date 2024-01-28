import {AfterViewInit, Component, OnInit} from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {Router} from "@angular/router";
import {DumkyService} from "../services/dumky.service";
import {
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from "@angular/forms";
import {dumkaListInterface} from "../shared/data/DumkyList";

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [
    CKEditorModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-story.component.html',
  styleUrl: './add-story.component.css'
})
export class AddStoryComponent implements OnInit, AfterViewInit {
  public Editor = ClassicEditor;
  public formDataPreview: any;

  public addDumkaForm = new FormGroup({
    d_title: new FormControl('Про що писав Степан Руданський', Validators.required),
    d_short: new FormControl('Дуже сумно визнавати, що більшість молодих людей не звертає увагу на ', Validators.required),
    d_dumka: new FormControl('Степан Руданський (6.01.1834, Хомутинці на Поділлі — 3.05.1873, Ялта) — видатний український поет, автор знаменитих «Співомовок» — однієї з найважливіших і найулюбленіших книжок чи не кожної української родини. ', Validators.required)
  });
  constructor(private router: Router, private dumkyService: DumkyService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.addDumkaForm!.valueChanges
      .subscribe(formVals => {
        this.formDataPreview = formVals;
      })
  }

  public formReset(): void {
    this.addDumkaForm.reset();
  }

  public formSave(): void {
    this.dumkyService.dumkyBS.next([...this.dumkyService.dumkyBS.getValue(), {
      id: this.dumkyService?.dumkyBS.getValue().length + 1,
      d_ts:(new Date()).toISOString(),
      d_title: this.addDumkaForm.value.d_title!,
      d_short: this.addDumkaForm.value.d_short!,
      d_dumka: this.addDumkaForm.value.d_dumka!
    }]);
    this.router.navigateByUrl('/');
  }

}

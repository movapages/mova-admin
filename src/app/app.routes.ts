import { Routes } from '@angular/router';
import {importProvidersFrom} from "@angular/core";
import {StartPageComponent} from "./start-page/start-page.component";
import {AddStoryComponent} from "./add-story/add-story.component";
import {DumkyService} from "./services/dumky.service";

export const routes: Routes = [
  {path: 'start',
  providers: [DumkyService],
    component: StartPageComponent},
  {path: 'add-story', component: AddStoryComponent},
  {path: '**', component: StartPageComponent}
];

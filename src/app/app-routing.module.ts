import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDayDetailsComponent } from './pages/work-day-details/work-day-details.component';

const routes: Routes = [{ path: '', component: WorkDayDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

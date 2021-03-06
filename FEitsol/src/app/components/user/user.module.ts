import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ListJobComponent } from './list-job/list-job.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserComponent } from './user.component';

const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'job/:id',
        component: JobDetailComponent,
        pathMatch: 'full'
      },
      {
        path: 'job',
        component: ListJobComponent,
        pathMatch: 'full'
      },
      {
        path: 'recruitment',
        component: RecruitmentComponent,
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: PersonalInfoComponent,
        pathMatch: 'full'
      },
    ],
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }

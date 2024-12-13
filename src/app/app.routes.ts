import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: ResumeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact', component: ContactComponent},
];

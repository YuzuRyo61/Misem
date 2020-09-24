import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'instance', loadChildren: () => import('./pages/instance/instance.module').then(m => m.InstanceModule)},
  {path: 'drive', loadChildren: () => import('./pages/drive/drive.module').then(m => m.DriveModule)},
  {path: 'queue', loadChildren: () => import('./pages/queue/queue.module').then(m => m.QueueModule)},
  {path: 'fediverse', loadChildren: () => import('./pages/fediverse/fediverse.module').then(m => m.FediverseModule)},
  {path: 'relay', loadChildren: () => import('./pages/relay/relay.module').then(m => m.RelayModule)},
  {path: 'announcement', loadChildren: () => import('./pages/announcement/announcement.module').then(m => m.AnnouncementModule)},
  {path: 'emoji', loadChildren: () => import('./pages/emoji/emoji.module').then(m => m.EmojiModule)},
  {path: 'audit', loadChildren: () => import('./pages/audit/audit.module').then(m => m.AuditModule)},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  {path: '**', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule)},
];

const configuration: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 72]
}

@NgModule({
  imports: [RouterModule.forRoot(routes, configuration)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

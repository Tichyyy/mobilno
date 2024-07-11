import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //gde cemo biti redirectovani
  {
    path: '',
    redirectTo: 'standings',
    pathMatch: 'full',
  },
  {
    path: 'standings',
    loadChildren: () =>
      import('./pages/standings/standings.module').then(
        (m) => m.StandingsPageModule
      ),
  },
  {
    path: 'players/:id',
    loadChildren: () =>
      import('./pages/players/players.module').then((m) => m.PlayersPageModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

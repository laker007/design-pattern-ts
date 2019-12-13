import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'strategy', loadChildren: () => import('./pages/strategy/strategy.module').then(m => m.StrategyModule) },
  { path: 'observer', loadChildren: () => import('./pages/observer/observer.module').then(m => m.ObserverModule) },
  { path: 'decorator', loadChildren: () => import('./pages/decorator/decorator.module').then(m => m.DecoratorModule) },
  { path: 'factory', loadChildren: () => import('./pages/factory/factory.module').then(m => m.FactoryModule) },
  { path: 'singleton', loadChildren: () => import('./pages/singleton/singleton.module').then(m => m.SingletonModule) },
  { path: 'command', loadChildren: () => import('./pages/command/command.module').then(m => m.CommandModule) },
  { path: 'adapter', loadChildren: () => import('./pages/adapter/adapter.module').then(m => m.AdapterModule) },
  { path: 'template', loadChildren: () => import('./pages/template/template.module').then(m => m.TemplateModule) },
  { path: 'state', loadChildren: () => import('./pages/state/state.module').then(m => m.StateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

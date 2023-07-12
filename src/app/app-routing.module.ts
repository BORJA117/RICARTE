import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./ADMIN/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./TRABAJADORES/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./VISITANTES/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'qr-admin',
    loadChildren: () => import('./Opciones QR ADMIN/qr-admin.module').then( m => m.QRADMINPageModule)
  },
  {
    path: 'opciones-admin',
    loadChildren: () => import('./opciones-admin/opciones-admin.module').then( m => m.OPCIONESADMINPageModule)
  },
  {
    path: 'cuestionario-emp',
    loadChildren: () => import('./cuestionario-emp/cuestionario-emp.module').then( m => m.CuestionarioEMPPageModule)
  },
  {
    path: 'imagen-qr',
    loadChildren: () => import('./imagen-qr/imagen-qr.module').then( m => m.ImagenQRPageModule)
  },
  {
    path: 'cuestionario-qr-admin',
    loadChildren: () => import('./cuestionario-qr-admin/cuestionario-qr-admin.module').then( m => m.CuestionarioQrAdminPageModule)
  },
  {
    path: 'compartir-qr-admin',
    loadChildren: () => import('./compartir-qr-admin/compartir-qr-admin.module').then( m => m.CompartirQRADMINPageModule)
  },
  {
    path: 'sensor-temperatura',
    loadChildren: () => import('./sensor-temperatura/sensor-temperatura.module').then( m => m.SENSORTEMPERATURAPageModule)
  },
  {
    path: 'historial-accesos',
    loadChildren: () => import('./historial-accesos/historial-accesos.module').then( m => m.HISTORIALACCESOSPageModule)
  },
  {
    path: 'opciones-emp',
    loadChildren: () => import('./opciones-emp/opciones-emp.module').then( m => m.OPCIONESEMPPageModule)
  },
  {
    path: 'qr-emp',
    loadChildren: () => import('./qr-emp/qr-emp.module').then( m => m.QREMPPageModule)
  },
  {
    path: 'qr-visitantes',
    loadChildren: () => import('./qr-visitantes/qr-visitantes.module').then( m => m.QRVISITANTESPageModule)
  },
  {
    path: 'cuestionario-visitantes',
    loadChildren: () => import('./cuestionario-visitantes/cuestionario-visitantes.module').then( m => m.CUESTIONARIOVISITANTESPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

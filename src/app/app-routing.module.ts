import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscricaoComponent } from "./paginas/inscricao/inscricao.component";
import { InscricaoProfessorComponent } from "./paginas/inscricao-professor/inscricao-professor.component";
import { tokenLoginGuard } from "./guards/token-login.guard";
import { LandingPageComponent } from "./paginas/landing-page/landing-page.component";
import { ladingPageGuard } from "./guards/lading-page.guard";
import { inscricaoProfessorGuard } from "./guards/inscricao-professor.guard";
import { ConsultaNotaComponent } from "./paginas/consulta-nota/consulta-nota.component";
import { ConsultaNotasProfessorComponent } from "./paginas/consulta-notas-professor/consulta-notas-professor.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    canActivate: [ladingPageGuard],
  },
  {
    path: "inscricao",
    component: InscricaoComponent,
    canActivate: [tokenLoginGuard],
  },
  {
    path: "inscricaoProfessor",
    component: InscricaoProfessorComponent,
    canActivate: [tokenLoginGuard],
  },
  {
    path: "consultarEstudante",
    component: ConsultaNotaComponent,
    canActivate: [tokenLoginGuard],
  },
  {
    path: "consultarProfessor",
    component: ConsultaNotasProfessorComponent,
    canActivate: [tokenLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

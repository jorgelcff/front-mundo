import { CanActivateFn, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Etapas } from '../enums/etapas.enum';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs';
import { Token } from '../models/token';

export const inscricaoProfessorGuard: CanActivateFn = (route, state) => {
  if (environment.production) {
    console.log(`Ambiente de Produção - Versão ${environment.version}`);
  } else {
    console.log(`Ambiente de Desenvolvimento - Versão ${environment.version}`);
  }
  const routerNavegation = inject(Router);
  routerNavegation.navigate(['']);
  return true;
};

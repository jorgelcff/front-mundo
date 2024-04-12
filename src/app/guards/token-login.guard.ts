import { CanActivateFn, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Etapas } from '../enums/etapas.enum';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs';
import { Token } from '../models/token';

export const tokenLoginGuard: CanActivateFn = (route, state) => {

  if (environment.production) {
    console.log(`Ambiente de Produção - Versão ${environment.version}`);
  } else {
    console.log(`Ambiente de Desenvolvimento - Versão ${environment.version}`);
  }
  const routerNavegation = inject(Router);
  if (environment.etapa === Etapas.resultadoPreliminar ||
    environment.etapa === Etapas.recurso ||
    environment.etapa === Etapas.resultadoFinal ||
    environment.etapa === Etapas.remajenamento) {
    const tokenService = inject(TokenService);
    return tokenService.ObterTokenLogin().pipe(map((response: Token) => {
      if (response.Token) {
        localStorage.setItem("TokenLogin", JSON.stringify(response));
        return true;
      } else {
        routerNavegation.navigate(['']);
        return false;
      }
    }));
  } else {
    routerNavegation.navigate(['']);
    return false;
  }

};

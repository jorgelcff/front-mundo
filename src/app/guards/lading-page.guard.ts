import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FormularioService } from '../services/formulario.service';

export const ladingPageGuard: CanActivateFn = (route, state) => {
  const formularioService = inject(FormularioService);
  formularioService.Cancelar();
  return true;
};

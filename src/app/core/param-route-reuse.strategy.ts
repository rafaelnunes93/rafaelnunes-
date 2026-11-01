import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router';

// As páginas de detalhe leem o slug uma única vez, no construtor. Por isso, quando o parâmetro da rota
// muda (de um post para outro, por exemplo), o componente precisa ser recriado em vez de reaproveitado.
@Injectable()
export class ParamRouteReuseStrategy extends BaseRouteReuseStrategy {
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if (future.routeConfig !== curr.routeConfig) return false;
    const keys = Object.keys(future.params);
    return keys.length === Object.keys(curr.params).length && keys.every((k) => future.params[k] === curr.params[k]);
  }
}

import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Environment } from './environment.model';

export const COSCORE_ENVIRONMENT = new InjectionToken<Environment>('COSCORE_ENVIRONMENT');

@Injectable({ providedIn: 'root' })
export class EnvironmentService {

  constructor(@Inject(COSCORE_ENVIRONMENT) private readonly environment: Environment) {
  }

  isProduction(): boolean {
    return this.environment.production;
  }

}

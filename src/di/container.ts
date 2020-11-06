import constants, {IConstants} from '@/di/constants';
import TYPES from '@/di/TYPES';
import {Container, interfaces} from 'inversify';
import Keycloak, {KeycloakError, KeycloakInitOptions, KeycloakInstance, KeycloakPromise} from 'keycloak-js';

class CustomContainer extends Container {
  get keycloak(){
    return this.get<KeycloakInstance>(TYPES.Keycloak)
  }
  get constants(){
    return this.get<IConstants>(TYPES.constants)
  }
}

const container = new CustomContainer()
container.bind<Keycloak.KeycloakInstance>(TYPES.Keycloak).toDynamicValue((context: interfaces.Context) => {
  const config= context.container.get<IConstants>(TYPES.constants).keycloak
  const result = Keycloak(context.container.get<IConstants>(TYPES.constants).keycloak)

  if (process.env.NODE_ENV === 'test') {
    result.updateToken = (minValidity: number) => {
      return new Promise((res) => res()) as KeycloakPromise<boolean, boolean>;
    }
    result.init = (initOptions: KeycloakInitOptions) => {
      return new Promise((res) => res()) as KeycloakPromise<boolean, KeycloakError>;
    }
    /* eslint-disable @typescript-eslint/camelcase */
    result.token = JSON.stringify({
        content: {
          exp: 1587393647,
          groups: ['/Sova.Administrators', '/Lync-Ext-Users'],
          preferred_username: 'shalikin_sv',
        }
      }
    ).replace(/\r?\n|\r/g, '')
  }
  return result
}).inSingletonScope()

container.bind<IConstants>(TYPES.constants).toDynamicValue((context: interfaces.Context) => {
  const result = constants[process.env.NODE_ENV]
  return result
}).inSingletonScope()

export default container;

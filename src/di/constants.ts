export interface IConstants{
  api:{
    baseUrl: string,
  },
  keycloak: {
    realm: string,
    url: string,
    clientId:string,
  },
}
const constants : { [keys: string]: IConstants }= {
  development: {
    api: {
      baseUrl: 'http://localhost:3000/api/'
    },
    keycloak: {
      realm: "open.ru",
      url: "https://urz.open.ru:8030/auth/",
      clientId: "sova-prod",
    },
  },
  test: {
    api: {
      baseUrl: 'http://localhost:3000/api/'
      // path: 'http://10.66.2.80:3000/api/'
    },
    keycloak: {
      url: "http://urz.open.ru:8082/auth/",
      realm: "open.ru",
      clientId: 'sova-prod',
    },
  },
  //for production
  production: {
    api: {
      baseUrl: 'https://urz.open.ru/api/'
    },
    keycloak: {
      url: "https://urz.open.ru:8443/auth/",
      realm: "open.ru",
      clientId: 'sova-prod',
    }
  },
  //for staging
  staging: {
    api: {
      baseUrl: 'https://urz.open.ru:444/api/'
    },
    keycloak: {
      url: "https://urz.open.ru:8050/auth/",
      realm: "open.ru",
      clientId: 'sova-prod',
    }
  },
}
export default constants

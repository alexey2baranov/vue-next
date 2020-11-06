import container from '@/di/container';
import {merge} from 'lodash';

interface IApiInit extends Omit<RequestInit, 'body'> {
  body?: BodyInit | object;
}

export default async function api(url: string, initOptions?: IApiInit) {
  // слил опции по умолчанию и переданные опции и получил итоговый массив опций
  await container.keycloak.updateToken(30);
  const options: RequestInit= {
    // credentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: (process.env.NODE_ENV === 'test' ? 'Test ' : 'Bearer ') + container.keycloak.token
    },
  };
  merge(options, initOptions);

  // привел тело в JSON
  if (initOptions?.body) {
    options.body= JSON.stringify(initOptions.body)
  }
  let fullUrl;
  // назначил путь до сервера
  fullUrl = container.constants.api.baseUrl + url;

  // выполнил запрос
  let response = await fetch(fullUrl, options);

  let data;

  if (response.headers.get('Content-Disposition')) {
    data = await response.blob();
    return data;
  } else {
    // привел ответ в TEXT
    data = await response.text();
  }


  // проверил не вернулся ли ответ с неправильным статусом
  if (!response.ok) {
    console.log(url);
    throw new Error(data);
  }

  // привел данные в JSON
  try {
    data = JSON.parse(data);
  }
    // в случае если не получилось вывел полученный текст
  catch (err) {
    console.log(url);
    throw new Error(data);
  }

  // проверил не вернулся ли ответ с ошибкой
  if (data.error) {
    console.log(url);
    console.log(data.error);
    throw new Error(data.error.message);
  }

  // вернул ответ от сервера
  return data;
}

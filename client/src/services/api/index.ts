import axios, { Method } from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000',
});

axiosClient.defaults.withCredentials = true;

class API {
  async CALL({
    method,
    url,
    data = null,
  }: {
    method: Method;
    url: string;
    data?: any;
  }) {
    try {
      const response = await axiosClient({
        url,
        method,
        data,
      });

      return response;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
      }

      console.error('# client-error-axios: ', error);
      return error.response;
    }
  }

  GET(url: string) {
    return this.CALL({
      method: 'GET',
      url,
    });
  }

  POST({ url, ...params }: { url: string; [key: string]: any }) {
    return this.CALL({
      method: 'POST',
      url,
      ...params,
    });
  }

  PUT({ url, ...params }: { url: string; [key: string]: any }) {
    return this.CALL({
      method: 'PUT',
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }: { url: string; [key: string]: any }) {
    return this.CALL({
      method: 'DELETE',
      url,
      ...params,
    });
  }

  PATCH({ url, ...params }: { url: string; [key: string]: any }) {
    return this.CALL({
      method: 'PATCH',
      url,
      ...params,
    });
  }
}

export default new API();

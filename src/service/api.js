import http from './http';

export default class API {
  constructor(api) {
    this.api = api;
    this.http = http;
  }

  list = async ($username) => {
    try {
      const response = await http.get(`${this.api}/${$username}/repos`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  show = async ($username) => {
    try {
      const response = await http.get(`${this.api}/${$username}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  create = async ($data) => {
    try {
      const response = await http.post(this.api, $data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  update = async ($data) => {
    try {
      const response = await http.put(`${this.api}/${$data.id}`, $data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  remove = async ($id) => {
    try {
      const response = await http.delete(`${this.api}/${$id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

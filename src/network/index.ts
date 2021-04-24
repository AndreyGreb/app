import axios, { AxiosInstance, AxiosResponse } from "axios";

class Network {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
    });
  }

  public async getRequest(path: string): Promise<AxiosResponse> {
    try {
      const { data } = await this.instance.get(path);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error(e.message);
    }
  }

}

const network = new Network("https://jsonplaceholder.typicode.com/");
export default network;
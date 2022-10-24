// import axios from "axios";

export class HttpClient {
  // Get with axios
  //   async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     return { data, status };
  //   }

  // Get with fetch
  async get(url: string) {
    const resp = await fetch(url);
    const data = resp.json();

    return { data, status: resp.status };
  }
}

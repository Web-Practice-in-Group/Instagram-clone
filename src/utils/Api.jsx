class Api {
  constructor(url) {
    this.url = url;
    this.headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
  }

  getAsync(id = "") {
    return fetch(this.url + id, {
      method: "GET",
      headers: this.headers,
    });
  }

  async getSync(id = "") {
    try {
      const data = await (
        await fetch(this.url + id, {
          method: "GET",
          headers: this.headers,
        })
      ).json();
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default Api;
import ModelTask from "./model-movie";

const Method = {
  GET: `GET`,
  PUT: `PUT`,
};

const Response = {
  CODE_START: 200,
  CODE_END: 300,
};

const checkStatus = (response) => {
  if (response.status >= Response.CODE_START && response.status < Response.CODE_END) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (response) => {
  return response.json();
};


class API {
  constructor({endPoint, authorization}) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  _load({url, method = Method.GET, body = null, headers = new Headers()}) {
    headers.append(`Authorization`, this._authorization);

    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }

  getMovies() {
    return this._load({url: `movies`})
      .then(toJSON)
      .then(ModelTask.parseMovies)
      .catch((err) => {
        throw err;
      });
  }

  updateMovie({id, data}) {
    return this._load({
      url: `movies/${id}`,
      method: Method.PUT,
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': `application/json`})
    })
      .then(toJSON)
      .then(ModelTask.parseMovie);
  }
}

export default API;

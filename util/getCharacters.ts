import { apiEndpoint } from "./consts";
import { ICharacters, IApiInformation } from "./interfaces";

interface IGoodResponse {
  results: ICharacters[];
  info: IApiInformation
}

export default (endpoint: string = apiEndpoint) =>
  new Promise<IGoodResponse>((resolve, reject) =>
    fetch(endpoint).then((response) => {
      if (response.status !== 200) {
        reject("Something went wrong");
      }
      resolve(response.json());
    }).catch((error) => reject(error.message))
  );

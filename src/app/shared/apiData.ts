import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIKEY, BASEURL } from './constants';

@Injectable()

export class apiData{

  constructor(private http: HttpClient) { }

  async getData(searchStr: string, getParam: string = 'search', maxResults: number = 20) {
    const data = await this.http.get(`${BASEURL}${getParam}?key=${APIKEY}&type=video&part=snippet&maxResults=${maxResults}&q=${searchStr}`)

    if(data) return data;
      else throw new Error('Error')

  }

// search?key={APIKEY}&type=video&part=snippet&maxResults=50&q=js'
}

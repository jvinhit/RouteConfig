import { Injectable } from '@angular/core';
import { SearchItem } from '../models/searchitems';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SearchService {
    apiRoot = 'https://itunes.apple.com/search';
    results: SearchItem[];
    constructor(private http: HttpClient) {
        this.results = [];
    }
    search(term: string) {
        return new Promise((resolve, reject) => {
            this.results = [];
            const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
            this.http
                .jsonp(apiURL, 'callback')
                .toPromise()
                .then(
                    (res: any) => {
                        // Success
                        this.results = res.results.map(item => {
                            return new SearchItem(
                                item.trackName,
                                item.artistName,
                                item.trackViewUrl,
                                item.artworkUrl30,
                                item.artistId
                            );
                        });
                        resolve();
                    },
                    msg => {
                        reject(msg);
                    }
                );
        });
    }
}

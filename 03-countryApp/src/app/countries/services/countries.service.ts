import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {


    private url:string = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) { }

    private getCountriesRequest(url : string) : Observable<Country[]> {
        return this.httpClient.get<Country[]>(url)
        .pipe(
            catchError(err => of([])),
        );
    }

    searchCountryByAlphaCode(code : string): Observable<Country | null> {
        return this.httpClient.get<Country[]>(`${this.url}/alpha/${code}`)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(err => of(null))
            );
    }


    searchCapital(capital: string): Observable<Country[]> {
        
        return this.getCountriesRequest(`${this.url}/capital/${capital}`)
          
    }

    searchCountry(country: string): Observable<Country[]> {
        
        return this.getCountriesRequest(`${this.url}/name/${country}`)
          
    }

    searchRegion(region: string): Observable<Country[]> {
        
        return this.getCountriesRequest(`${this.url}/region/${region}`)
           
    }
    
}
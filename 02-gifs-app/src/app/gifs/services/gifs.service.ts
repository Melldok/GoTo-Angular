import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

    public gifsList: Gif[] = [];
    
    private _tagsHistory : string[] = [];

    private apiKey : string = 'gZFOrVF0ss1SyswKrizvn9ugLQ1FsjYz';

    constructor(private http : HttpClient) { 

        this.loadLocalStorage();
        console.log('Gifs : ', this._tagsHistory)
    }

    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeTagsHistory( tag : string):void{
        tag = tag.toLowerCase();

        if( this._tagsHistory.includes( tag ) ){
            this._tagsHistory = this._tagsHistory.filter( oldTag => oldTag !== tag );
        };

        this._tagsHistory.unshift( tag );
        this._tagsHistory = this._tagsHistory.splice(0,10);
        this.saveLocalStorage();
    }

    private saveLocalStorage():void{
        localStorage.setItem('tagsHistory', JSON.stringify( this._tagsHistory ));
    }

    private loadLocalStorage():void{
        if( localStorage.getItem('tagsHistory') ){
            this._tagsHistory = JSON.parse( localStorage.getItem('tagsHistory')! );
        }

        if(this._tagsHistory.length > 0){
            this.searchTag( this._tagsHistory[0] );
        }
    }

    searchTag( tag : string ):void{

        if( tag.trim().length === 0 ) return;
        this.organizeTagsHistory( tag );
        this.http.get<GIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
        .subscribe( response => {
            
            this.gifsList = response.data;

            
        });
        
    }

}

        

        
      

    
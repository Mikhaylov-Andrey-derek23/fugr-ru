export default class FigurServis {
  
    _apiBase = 'http://www.filltext.com';
    // _apiBase = 'https://swapi.co/api';

    getStatus(){
        console.log(
            `_apiBase = ${this._apiBase}`
        );
    };
    async getData(url){
        const data = await fetch(`${this._apiBase}${url}`);
        if(!data.ok){
            throw new Error(`Could not fetch ${this._apiBase}, receved ${data.status}`)
        }
        return await data.json();
    }

    async getSmalData(maxSize){
        const url = `/?rows=${maxSize}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
        // const url = '/starships/'

        const res = await this.getData(url);
        return res;     

    }



}
export default class FigurServis {
  
    _apiBase = 'http://www.filltext.com';

    getStatus(){
        console.log(
            `_apiBase = ${this._apiBase}`
        );
    };
    async getFigur(url){
        const data = await fetch(`${this._apiBase}${url}`);
        if(!data.ok){
            throw new Error(`Could not fetch ${this._apiBase}, receved ${data.status}`)
        }
        return await data.json();
    }

    async getData(maxSize){
        const url = `/?rows=${maxSize}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
        const res = await this.getFigur(url);
        return res;     

    }
}
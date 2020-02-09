export default class FigurServis {
  
    _apiBase = 'http://www.filltext.com';

    getStatus(){
        console.log(
            `_apiBase = ${this._apiBase}`
        );
    };
    async getDate(){
        const date = await fetch(`${this._apiBase}/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
        if(!date.ok){
            throw new Error(`Could not fetch ${this._apiBase}, receved ${date.status}`)
        }
        return await date.json();
    }

}
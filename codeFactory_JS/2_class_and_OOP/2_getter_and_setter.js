/**
 * private이 있을때 get & set을 많이 사용한다.
 */



class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 값을 가져올때
     * 
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    /**
     * 값을 저장할 때
     */
    set name(name) {
        this.name = name;
    }

}


const yuJin = new IdolModel("안유진", "2003");
console.log(yuJin.nameAndYear);

yuJin.name = "장원영";
console.log(yuJin);

class IdolModel2 {
    #name;
    year;

    constructor(name,year){
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);
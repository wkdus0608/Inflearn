class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }


    sayName() {
        return `안녕하세요 저는 ${this.name} 입니다.`;
    }

}

const yuJin = new IdolModel('안유진', '2003');
const gauel = new IdolModel('가을', '2002');
const leeSeo = new IdolModel('이서', '2007');
console.log(yuJin);
console.log(gauel);
console.log(leeSeo);

console.log(yuJin.sayName());
console.log(gauel.sayName());
console.log(leeSeo.sayName());
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class femaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다';
    }
}

class maleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 노래를 부릅니다';
    }
}

const yuJin = new femaleIdolModel("안유진", 2003);
const sugar = new maleIdolModel("김슈가", 2024);
console.log(yuJin.dance());
console.log(sugar.sing());
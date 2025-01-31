/**
 * Extensible
 * Seal
 * Freeze
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() -age;
    }
}
console.log(yuJin);



// Extensible
// false 면 값을 추가하지 못함.
// 추가만 못함. delete는 가능.

console.log(Object.isExtensible(yuJin));

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));


/**
 * seal (봉인)
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() -age;
    }
}
console.log(Object.isSealed(yuJin2)); // = false = 봉인 돼있지 않다.

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));
// = true = 봉인 돼있다.
// 값 추가 못함. 삭제도 안됨
// ttf

// ftf
Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));


/**
 * Seal을 한다 = Configurable을 false로 만드는 것과 같다.
 *            = 값 추가, 값 삭제 못한다.
 * 
 */



/**
 * Freezed
 * 
 * 읽기 외의 모든 기능 불가능 
 * 추가 삭제 변경 불가능.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() -age;
    }
}
console.log(Object.isFrozen(yuJin3)); //false = 동결되지 않았다.

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); //true = 동결됐다.


const yuJin4 = {
    name: '안유진',
    year: 2003,

    wonYoung: {
        name: '장원영',
        year: 2004,
    }
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung'])); // 상위항목 freeze = 하위항목까지 freeze되는 것은 아님. (seal, extensive 둘다 같음)
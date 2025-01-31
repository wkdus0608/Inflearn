/**
 * 
 * property 속성
 * 
 * 데이터 프로퍼티
 * 엑세서 프로퍼티 - 값은 없지만, 다른 값을 가져오거나 호출되는 함수로 구성된 프로퍼티 
 *      = getter & setter
 */

const yuJin = {
    name: '안유진',
    year: 2003
};

//생성자 함수 또는 class에 .으로 직접 붙어있는 함수는 static
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다.
 *                   단, writable이 true인 경우, 값 변경과 writable을 변경하는건 가능하다. 
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

console.log("--------------");

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(yuJin2); 
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log("--------------");

console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
}

console.log("\n");

Object.defineProperty(yuJin2, 'height', {
    enumerable: false,
}
);
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
}
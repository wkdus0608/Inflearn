

// 아이브는 한국 아이돌이고
// 아이브라는 이름의 걸그룹이다.
// 아이브는 여자 아이돌이다.
const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2004,
    },
    {
        name: '이서',
        year: 2007,
    },
]

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
    {
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: 'RM',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    },
    {
        name: '정국',
        year: 1997,
    },
]

class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}



class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
        }

}


class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

}

class MaleIdol extends Idol {
    sing(name) {
        return `${this.name}이 노래를 합니다.`;
    }
}

class FemaleIdol extends Idol {
    dance(name) {
        return `${this.name}이 춤을 춥니다.`;
    }
}


// const cIveMembers = iveMembers.map(
//     (x) => new FemaleIdol(x['name'], x['year'])
// );
// console.log(cIveMembers);

// const cBtsMembers = btsMembers.map(
//     (x) => new MaleIdol(x['name'], x['year'])
// );
// console.log(cBtsMembers);

// const iveGroup = new IdolGroup(
//     '아이브',
//     cIveMembers,
// );
// console.log(iveGroup);

// const btsGroup = new IdolGroup(
//     'BTS',
//     cBtsMembers,
// );
// console.log(btsGroup);

// const idolCountry = new Country(
//     '대한민국',
//     [
//     iveGroup,
//     btsGroup
//     ],

// );
// console.log(idolCountry);


/**
 * 
Country {
  name: '대한민국',
  idolGroups: [
    IdolGroup { name: '아이브', members: [Array] },
    IdolGroup { name: 'BTS', members: [Array] }
  ]
}
Country {
  name: '대한민국',
  idolGroups: [
    IdolGroup { name: '아이브', members: [Array] },
    IdolGroup { name: '방탄소년단', members: [Array] }
  ]
}
 * 
 */


const allTogether = new Country (
    '대한민국',
    [
        new IdolGroup(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'], x['year']),
            )
        ),
        new IdolGroup(
            '방탄소년단',
            btsMembers.map(
                (x) => new MaleIdol(x['name'], x['year']),
            )
        ),
    ]
);

console.log(allTogether);
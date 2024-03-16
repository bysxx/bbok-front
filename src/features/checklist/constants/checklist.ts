import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';

export const CHECK_LIST: { [key in TQuery]: string[] } = {
  [TypeQuery.bad]: [
    '나를 배려하지 않은 친구',
    '신뢰를 잃는 행동을 하는 친구',
    '나의 자존감을 낮추는 친구',
    '유머코드가 맞지 않는 친구',
    '나에게 너무 많이 의존하는 친구',
    '이성에 집착하는 친구',
    '자기 과시와 자랑이 심한 친구',
    '종교적·정치적 가치관이 다른 친구',
    '의사소통 스타일이 맞지 않는 친구',
    '나를 가르치려고 하는 친구',
  ],
  [TypeQuery.good]: [
    '이야기를 잘 듣고 공감해주는 친구',
    '존중하고 배려하는 마음을 가진 친구',
    '관심사가 비슷한 친구',
    '신뢰할 수 있는 친구',
    '긍정적인 친구',
    '성격이 잘 맞는 친구',
    '둘이서 만나도 편한 친구',
    '나를 편견없이 대해주는 친구',
    '배울 점이 많은 친구',
    '내 자존감을 올려주는 친구',
  ],
};

export const GOOD_CHECK_COUNT = CHECK_LIST.good.length;
export const BAD_CHECK_COUNT = CHECK_LIST.bad.length;

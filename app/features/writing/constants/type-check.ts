export const TYPE_CHECLIST_COMMENT: { [key in 'good' | 'bad']: { title: string; subTitle: string; img: string } } = {
  bad: {
    title: '기피 기준체크',
    subTitle: '기피하는 친구였어요!',
    img: '/icon/ui/broken-heart.svg',
  },
  good: {
    title: '적합 기준체크',
    subTitle: '적합한 친구였어요!',
    img: '/icon/ui/heart.svg',
  },
};
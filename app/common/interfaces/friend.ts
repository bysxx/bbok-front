// 등록할 친구 body type
export interface IFriendBody {
  name: string;
  character: TFriendCharacter;
}

// 등록한 친구 리스트 type
interface Friend {
  active: boolean;
  characterUrl: string;
  countingDiary: number;
  id: number;
  name: string;
  score: number;
  startedAt: string;
}

export interface IFriendList {
  friends: Friend[];
}

export type TFriendCharacter = 'CACTUS' | 'HEDGEHOG';

// 캐릭터 이미지 type
interface CharacterContent {
  type: TFriendCharacter;
  iconUrl: string;
  name: string;
}
export interface ICharacterImage {
  characters: CharacterContent[];
}

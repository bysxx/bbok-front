// 등록할 친구 body type
export interface IFriendBody {
  name: string;
  character: TFriendCharacter;
}

// 등록한 친구 리스트 type
interface Friend {
  id: string;
  startedAt: string;
  characterUrl: string;
  name: string;
  diaryCount: number;
  percentage: number;
  isActive: boolean;
}
export interface IFriend {
  friend: Friend;
}
export interface IFriendList {
  friends: IFriend[];
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

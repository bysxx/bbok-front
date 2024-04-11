import type { TValueOfCharacter } from '@constants/character';

/**
 * 등록할 친구 request type
 */
export interface IFriendBody {
  name: string;
  character: TValueOfCharacter;
}

/**
 * 등록한 친구 리스트 type
 */
export interface Friend {
  active: boolean;
  characterUrl: string;
  countingDiary: number;
  characterType: TValueOfCharacter;
  id: number;
  name: string;
  score: number;
  startedAt: string;
}

export interface IFriendList {
  friends: Friend[];
}

/**
 * 캐릭터 이미지 type
 */
interface CharacterContent {
  type: TValueOfCharacter;
  iconUrl: string;
  name: string;
}
export interface ICharacterImage {
  characters: CharacterContent[];
}

/**
 * 친구 이름 수정 request body
 */
export interface IFriendModifyRequestBody {
  id: number;
  name: string;
}

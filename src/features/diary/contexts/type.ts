import type { IDiaryRequestBody } from '@interfaces/diary';

export interface IDiaryContextBody extends IDiaryRequestBody {
  isChecked: boolean;
}

import { IResponse } from '../type';
export interface NoteListResItem {
  id: number;
  title: string;
  background_image: string | null;
  created_at: string;
  updated_at: string;
  [property: string]: any;
}
export type NoteListRes = IResponse<{
  notes: NoteListResItem[];
}>;
export interface CreateNoteReq {
  title: string;
  content?: string;
  background_image?: File;
}

export interface Note {
  id: number;
  title: string;
  content: string | null;
  background_image: string | null;
  created_at: string;
  updated_at: string;
  [property: string]: any;
}

export type CreateNoteRes = IResponse<{
  note: Note;
}>;

export type GetNoteDetailRes = IResponse<{
  note: Note;
}>;

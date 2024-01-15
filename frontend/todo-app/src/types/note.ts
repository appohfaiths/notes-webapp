export interface Note {
    user_id: string;
    note_id: string;
    title: string;
    body: string;
    created_time: number;
    updated_time: number;
}

export interface NoteState {
    notes: Note[];
    isLoading: boolean;
    error: string | null;
}
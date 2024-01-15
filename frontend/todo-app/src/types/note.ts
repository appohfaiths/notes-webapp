export interface Note {
    user_id: string;
    note_id: string;
    title: string;
    body: string;
    created_at: number;
    updated_at: number;
}

export interface NoteState {
    notes: Note[];
    isLoading: boolean;
    error: string | null;
}
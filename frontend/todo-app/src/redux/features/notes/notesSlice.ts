import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import { Note, NoteState } from "../../../types/note";
import { RootState } from "../../app/store";
import { baseApiEndpoint } from "../../../utils/constants";

const initialState: NoteState = {
    notes: [],
    isLoading: false,
    error: null
}

export const fetchNotes = createAsyncThunk(
    "notes/getNotes",
    async () => {
        try {
            const response = await axios.get(`${baseApiEndpoint}/list-notes/frontend`);
            return response.data.notes;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const addNote = createAsyncThunk(
    "notes/addNote",
    async (note: Note, {rejectWithValue}) => {
        try {
            const response = await axios.put(`${baseApiEndpoint}/create-note`, note);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 400) {
          // Handle 400 Bad Request
            const errorMessage = axiosError.response?.data;
            console.log(errorMessage);
          return rejectWithValue(errorMessage || "Bad Request");
        } else {
          // Handle other status codes
          return rejectWithValue(`Request failed with status code ${axiosError.response?.status}`);
        }
      } else {
        // Handle non-Axios errors
        return rejectWithValue("Something went wrong");
      }
        }
    }
)

export const updateNote = createAsyncThunk(
    "notes/updateNote",
    async (note: Note) => {
        try {
            const response = await axios.put(`${baseApiEndpoint}/update-note`, note);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const deleteNote = createAsyncThunk(
    "notes/deleteNote",
    async (note_id: string) => {
        try {
            const response = await axios.delete(`${baseApiEndpoint}/delete-note/${note_id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchNotes.fulfilled, (state, action: PayloadAction<Note[]>) => {
            state.isLoading = false;
            state.notes = action.payload;
            state.error = null;
        });
        builder.addCase(fetchNotes.rejected, (state, action) => {
            state.isLoading = false;
            state.notes = [];
            state.error = action.error.message || 'Something went wrong';
        });
        builder.addCase(addNote.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addNote.fulfilled, (state, action: PayloadAction<{note: Note}>) => {
            state.isLoading = false;
            state.notes.push(action.payload.note);
            state.error = null;
        });
        builder.addCase(addNote.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });
        builder.addCase(updateNote.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateNote.fulfilled, (state, action: PayloadAction<Note>) => {
            state.isLoading = false;
            const noteIndex = state.notes.findIndex(note => note.note_id === action.payload.note_id);
            state.notes[noteIndex] = action.payload;
            state.error = null;
        });
        builder.addCase(updateNote.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });
        builder.addCase(deleteNote.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteNote.fulfilled, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.notes = state.notes.filter(note => note.note_id !== action.payload);
            state.error = null;
        });
        builder.addCase(deleteNote.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    }
});

export const selectNotes = (state: RootState) => state.notes.notes;
export const selectIsLoading = (state: RootState) => state.notes.isLoading;
export const selectError = (state: RootState) => state.notes.error;
export default notesSlice.reducer;
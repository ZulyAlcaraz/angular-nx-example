import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Note } from './notes.model';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>){}

    async insertNote(note) {
        const newNote = new this.noteModel(note);
        const result = await newNote.save();
        return result.id as string;
    }

    async fetchNotes() {
        const notes = await this.noteModel.find().exec();
        return notes.map(n => ({ id: n.id, title: n.title, content: n.content, color: n.color })) as Note[];
    }

    async getSingleNote(noteId: string) {
        const note = await this.findNote(noteId);
        return { id: note.id, title: note.title, content: note.content, color: note.color };
    }

    async updateNote(noteId: string, note: Note) {
        const currentNote = await this.findNote(noteId);
        if (note.title) {
            currentNote.title = note.title;
        }
        if (note.content) {
            currentNote.content = note.content;
        }
        if (note.color) {
            currentNote.color = note.color;
        }
        currentNote.save();
    }

    async deleteNote(noteId: string) {
        const result = await this.noteModel.deleteOne({ _id: noteId }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find note.');
        }
    }

    private async findNote(id: string): Promise<Note> {
        let note;
        try {
            note = await this.noteModel.findById(id);
        } catch (error) {
            throw new NotFoundException('Could not find note.');
        }        
        if (!note) {
            throw new NotFoundException('Could not find note.');
        }
        return note;
    }
}

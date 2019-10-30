import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import { NotesService } from './notes.service';
import { Note } from './notes.model';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async addNote(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('color') color: string
  ) {
    const result = await this.notesService.insertNote({
        title,
        content,
        color
    });
    return result;
  }

    @Get()
    async getAllNotes() {
        const notes = await this.notesService.fetchNotes();
        return notes;
    }

    @Get(':id')
    async getNote(@Param('id') noteId: string) {
        return this.notesService.getSingleNote(noteId);
    }

    @Patch(':id')
    async updateNote(@Param('id') noteId: string, @Body() note: Note) {
        const result = await this.notesService.updateNote(noteId, note);
        return result;
    }

    @Delete(':id')
    async removeNote(@Param('id') noteId: string) {
        const result = await this.notesService.deleteNote(noteId);
        return result;
    }
}

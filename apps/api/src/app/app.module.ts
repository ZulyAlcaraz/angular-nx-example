import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    NotesModule,
    MongooseModule.forRoot(
      'mongodb+srv://zulyalcaraz:sJejvjMRiqzaTQTI@cluster0-9w5jr.gcp.mongodb.net/main?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BuildEvent } from './BuildEvent.schema';
import { Paper } from './paper.schema';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class BuilderService implements OnModuleInit {
    constructor(
        private httpService: HttpService,
        @InjectModel('eventStore') private buildEventModel: Model<BuildEvent>,
        @InjectModel('paper') private paperModel: Model<Paper>,
        @InjectModel('user') private userModel: Model<User>,
    ) { }

    async onModuleInit() {
        await this.reset();
    }

    async storePaper(event: BuildEvent) {
        await this.buildEventModel.findOneAndUpdate(
            { blockId: event.blockId},
            { 
                eventType: event.eventType,
                blockId: event.blockId,
                name: event.name,
                date: event.date,
                user: event.user,
            },
            { upsert: true, new: true }
        ).exec();

        this.userModel.findOneAndUpdate(
            { name: event.user },
            { name: event.user },
            { upsert: true, new: true }
        ).exec();

        this.paperModel.findOneAndUpdate(
            { name: event.name },
            { name: event.name },
            { upsert: true, new: true }
        ).exec();

        return 200;
    }

    async getBuildEvents() {
        return await this.buildEventModel.find({}).exec();
    }

    async getUsers() {
        return await this.userModel.find({}).exec();
    }

    async getPapers() {
        return await this.paperModel.find({}).exec();
    }

    async reset() {
        await this.clear();
        /*await this.storePaper({
            eventType: 'paperStored',
            blockId: '000001',
            name: 'Coole Studie',
            date: '15.07.2021',
            user: 'Hendrik',
        });*/
    }

    async clear() {
        /*await this.paperModel.deleteMany();
        await this.buildEventModel.deleteMany();
        await this.userModel.deleteMany();*/
    }
}

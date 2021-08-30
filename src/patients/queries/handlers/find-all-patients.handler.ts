import { KafkaService } from './../../../kafka/src/kafka.service';
import { PatientRepository } from './../../repository/patient.repository';
import {
  EventPublisher,
  IEvent,
  IQuery,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { PatientDetails } from '../../dtos/patient.dto';
import { FindAllPatientsQuery } from '../impl/find-all-patients.query';
import { Inject, Logger } from '@nestjs/common';
import { Subject } from 'rxjs';

@QueryHandler(FindAllPatientsQuery)
export class FindAllPatientsHandler
  implements IQueryHandler<FindAllPatientsQuery>
{
  logger = new Logger('FindAllPatientsQuery');

  constructor(
     private repository: PatientRepository
  ) {}
  async execute(query: FindAllPatientsQuery){
      this.logger.log('Async FindAllPatientsQuery...')
    return this.repository.findAll();
  }
}

// export interface PatientQuery {
//     find: () => Promise<PatientDetails>;
//   }

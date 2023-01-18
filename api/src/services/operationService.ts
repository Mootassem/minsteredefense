import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import OperationRepository from '../database/repositories/operationRepository';
import TypeOperationRepository from '../database/repositories/typeOperationRepository';
import MachineRepository from '../database/repositories/machineRepository';

export default class OperationService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.machine =
        await MachineRepository.filterIdInTenant(
          data.machine,
          { ...this.options, session },
        );
      data.type =
        await TypeOperationRepository.filterIdInTenant(
          data.type,
          { ...this.options, session },
        );

      const record = await OperationRepository.create(
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'operation',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.machine =
        await MachineRepository.filterIdInTenant(
          data.machine,
          { ...this.options, session },
        );
      data.type =
        await TypeOperationRepository.filterIdInTenant(
          data.type,
          { ...this.options, session },
        );

      const record = await OperationRepository.update(
        id,
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'operation',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await OperationRepository.destroy(id, {
          ...this.options,
          session,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id) {
    return OperationRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return OperationRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return OperationRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async findAndCountAllBySite(args) {
    return OperationRepository.findAndCountAllBySite(
      args,
      this.options,
    );
  }

  async findAndCountAllBySiteCollab(args) {
    return OperationRepository.findAndCountAllBySiteCollab(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await OperationRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}

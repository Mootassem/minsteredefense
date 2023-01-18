import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import MachineRepository from '../database/repositories/machineRepository';
import TypeMachineRepository from '../database/repositories/typeMachineRepository';
import OperationRepository from '../database/repositories/operationRepository';
import SiteRepository from '../database/repositories/siteRepository';
import EmprunteRepository from '../database/repositories/emprunteRepository';

export default class MachineService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.type =
        await TypeMachineRepository.filterIdInTenant(
          data.type,
          { ...this.options, session },
        );
      data.operations =
        await OperationRepository.filterIdsInTenant(
          data.operations,
          { ...this.options, session },
        );
      data.site = await SiteRepository.filterIdInTenant(
        data.site,
        { ...this.options, session },
      );
      data.empruntes =
        await EmprunteRepository.filterIdsInTenant(
          data.empruntes,
          { ...this.options, session },
        );

      const record = await MachineRepository.create(data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'machine',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.type =
        await TypeMachineRepository.filterIdInTenant(
          data.type,
          { ...this.options, session },
        );
      data.operations =
        await OperationRepository.filterIdsInTenant(
          data.operations,
          { ...this.options, session },
        );
      data.site = await SiteRepository.filterIdInTenant(
        data.site,
        { ...this.options, session },
      );
      data.empruntes =
        await EmprunteRepository.filterIdsInTenant(
          data.empruntes,
          { ...this.options, session },
        );

      const record = await MachineRepository.update(
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
        'machine',
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
        await MachineRepository.destroy(id, {
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
    return MachineRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return MachineRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAllAutocompleteBySite(search, limit) {
    return MachineRepository.findAllAutocompleteBySite(
      search,
      limit,
      this.options,
    );
  }

  async findAllAutocompleteBySiteCollab(search, limit) {
    return MachineRepository.findAllAutocompleteBySiteCollab(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return MachineRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async findAndCountAllBySite(args) {
    return MachineRepository.findAndCountAllBySite(
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
    const count = await MachineRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}

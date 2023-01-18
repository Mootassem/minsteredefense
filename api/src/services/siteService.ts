import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import SiteRepository from '../database/repositories/siteRepository';
import MachineRepository from '../database/repositories/machineRepository';
import UserRepository from '../database/repositories/userRepository';

export default class SiteService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.admin = await UserRepository.filterIdInTenant(data.admin, { ...this.options, session });
      data.machine = await MachineRepository.filterIdsInTenant(data.machine, { ...this.options, session });
      data.collaborateurs = await UserRepository.filterIdsInTenant(data.collaborateurs, { ...this.options, session });

      const record = await SiteRepository.create(data, {
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
        'site',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.admin = await UserRepository.filterIdInTenant(data.admin, { ...this.options, session });
      data.machine = await MachineRepository.filterIdsInTenant(data.machine, { ...this.options, session });
      data.collaborateurs = await UserRepository.filterIdsInTenant(data.collaborateurs, { ...this.options, session });

      const record = await SiteRepository.update(
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
        'site',
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
        await SiteRepository.destroy(id, {
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
    return SiteRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return SiteRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return SiteRepository.findAndCountAll(
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
    const count = await SiteRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}

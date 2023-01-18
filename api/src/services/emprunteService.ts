import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import EmprunteRepository from '../database/repositories/emprunteRepository';
import MachineRepository from '../database/repositories/machineRepository';
import SiteRepository from '../database/repositories/siteRepository';

export default class EmprunteService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.machine = await MachineRepository.filterIdsInTenant(data.machine, { ...this.options, session });
      data.siteOrigine = await SiteRepository.filterIdInTenant(data.siteOrigine, { ...this.options, session });
      data.siteDestination = await SiteRepository.filterIdInTenant(data.siteDestination, { ...this.options, session });

      const record = await EmprunteRepository.create(data, {
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
        'emprunte',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.machine = await MachineRepository.filterIdsInTenant(data.machine, { ...this.options, session });
      data.siteOrigine = await SiteRepository.filterIdInTenant(data.siteOrigine, { ...this.options, session });
      data.siteDestination = await SiteRepository.filterIdInTenant(data.siteDestination, { ...this.options, session });

      const record = await EmprunteRepository.update(
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
        'emprunte',
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
        await EmprunteRepository.destroy(id, {
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
    return EmprunteRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return EmprunteRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return EmprunteRepository.findAndCountAll(
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
    const count = await EmprunteRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}

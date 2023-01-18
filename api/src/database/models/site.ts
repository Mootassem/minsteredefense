import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('site');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const SiteSchema = new Schema(
    {
      nom: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      admin: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      machine: [{
        type: Schema.Types.ObjectId,
        ref: 'machine',
      }],
      attachements: [FileSchema],
      collaborateurs: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
      }],
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  SiteSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  SiteSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  SiteSchema.set('toJSON', {
    getters: true,
  });

  SiteSchema.set('toObject', {
    getters: true,
  });

  return database.model('site', SiteSchema);
};

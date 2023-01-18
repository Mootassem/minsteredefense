import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('operation');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const OperationSchema = new Schema(
    {
      machine: {
        type: Schema.Types.ObjectId,
        ref: 'machine',
        required: false,
      },
      site: {
        type: Schema.Types.ObjectId,
        ref: 'site',
      },
      titre: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      type: {
        type: Schema.Types.ObjectId,
        ref: 'typeOperation',
      },
      date: {
        type: String,
      },
      cout: {
        type: Number,
      },
      attachement: [FileSchema],
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
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

  OperationSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  OperationSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  OperationSchema.set('toJSON', {
    getters: true,
  });

  OperationSchema.set('toObject', {
    getters: true,
  });

  return database.model('operation', OperationSchema);
};

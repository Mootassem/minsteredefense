import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('typeOperation');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const TypeOperationSchema = new Schema(
    {
      titre: {
        type: String,
      },
      description: {
        type: String,
      },
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

  TypeOperationSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  TypeOperationSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  TypeOperationSchema.set('toJSON', {
    getters: true,
  });

  TypeOperationSchema.set('toObject', {
    getters: true,
  });

  return database.model('typeOperation', TypeOperationSchema);
};

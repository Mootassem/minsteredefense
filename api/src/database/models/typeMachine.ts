import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('typeMachine');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const TypeMachineSchema = new Schema(
    {
      titre: {
        type: String,
        required: true,
      },
      typeOperation: [{
        type: Schema.Types.ObjectId,
        ref: 'typeOperation',
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

  TypeMachineSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );



  TypeMachineSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  TypeMachineSchema.set('toJSON', {
    getters: true,
  });

  TypeMachineSchema.set('toObject', {
    getters: true,
  });

  return database.model('typeMachine', TypeMachineSchema);
};

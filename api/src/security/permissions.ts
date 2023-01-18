import Roles from './roles';
import Plans from './plans';
import Storage from './storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      siteImport: {
        id: 'siteImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      siteCreate: {
        id: 'siteCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.siteAttachements],
      },
      siteEdit: {
        id: 'siteEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.siteAttachements],
      },
      siteDestroy: {
        id: 'siteDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.siteAttachements],
      },
      siteRead: {
        id: 'siteRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      siteAutocomplete: {
        id: 'siteAutocomplete',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      machineImport: {
        id: 'machineImport',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      machineCreate: {
        id: 'machineCreate',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.machineAttachements,
          storage.machineImage,
        ],
      },
      machineEdit: {
        id: 'machineEdit',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.machineAttachements,
          storage.machineImage,
        ],
      },
      machineDestroy: {
        id: 'machineDestroy',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.machineAttachements,
          storage.machineImage,
        ],
      },
      machineRead: {
        id: 'machineRead',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      machineAutocomplete: {
        id: 'machineAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      typeMachineImport: {
        id: 'typeMachineImport',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      typeMachineCreate: {
        id: 'typeMachineCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      typeMachineEdit: {
        id: 'typeMachineEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      typeMachineDestroy: {
        id: 'typeMachineDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      typeMachineRead: {
        id: 'typeMachineRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      typeMachineAutocomplete: {
        id: 'typeMachineAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      operationImport: {
        id: 'operationImport',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      operationCreate: {
        id: 'operationCreate',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.operationAttachement],
      },
      operationEdit: {
        id: 'operationEdit',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.operationAttachement],
      },
      operationDestroy: {
        id: 'operationDestroy',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.operationAttachement],
      },
      operationRead: {
        id: 'operationRead',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      operationAutocomplete: {
        id: 'operationAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      typeOperationImport: {
        id: 'typeOperationImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      typeOperationCreate: {
        id: 'typeOperationCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      typeOperationEdit: {
        id: 'typeOperationEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      typeOperationDestroy: {
        id: 'typeOperationDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      typeOperationRead: {
        id: 'typeOperationRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      typeOperationAutocomplete: {
        id: 'typeOperationAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.admin_site,
          roles.collaborateur,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      emprunteImport: {
        id: 'emprunteImport',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      emprunteCreate: {
        id: 'emprunteCreate',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      emprunteEdit: {
        id: 'emprunteEdit',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      emprunteDestroy: {
        id: 'emprunteDestroy',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      emprunteRead: {
        id: 'emprunteRead',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      emprunteAutocomplete: {
        id: 'emprunteAutocomplete',
        allowedRoles: [roles.admin, roles.admin_site],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;

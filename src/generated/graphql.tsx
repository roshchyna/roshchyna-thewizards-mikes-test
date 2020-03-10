import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: Date,
  Upload: any,
};

export type ActivePatientCount = {
   __typename?: 'ActivePatientCount',
  Locations: Array<ActivePatientCountLocation>,
  Total: Scalars['Int'],
};

export type ActivePatientCountLocation = {
   __typename?: 'ActivePatientCountLocation',
  Name: Scalars['String'],
  Count: Scalars['Int'],
};

export enum ActiveSelect {
  All = 'ALL',
  Inactive = 'INACTIVE',
  Active = 'ACTIVE'
}

export type AddRolePermission = {
  RoleID: Scalars['Int'],
  PermissionID: PermissionType,
};

export type Contractor = {
   __typename?: 'Contractor',
  ID: Scalars['Int'],
  Location: Location,
  Type: ContractorType,
  Name: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  MainPhone: Scalars['String'],
  MainFax: Scalars['String'],
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Title: Scalars['String'],
  Phone: Scalars['String'],
  AltPhone: Scalars['String'],
  IsTankVendor: Scalars['Boolean'],
  IsActive: Scalars['Boolean'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type ContractorInvoice = {
   __typename?: 'ContractorInvoice',
  CompanyName: Scalars['String'],
  Location: Location,
  Contractor: Contractor,
  DateStart: Scalars['DateTime'],
  DateEnd: Scalars['DateTime'],
  Items: Array<ContractorInvoiceItem>,
};

export type ContractorInvoiceItem = {
   __typename?: 'ContractorInvoiceItem',
  DateStart: Scalars['DateTime'],
  DateEnd: Scalars['DateTime'],
  ShowDateEnd: Scalars['Boolean'],
  Item: Scalars['String'],
  Description: Scalars['String'],
  Quantity: Scalars['Int'],
};

export type ContractorPatientLog = {
   __typename?: 'ContractorPatientLog',
  Patient: Patient,
  ActivatedAt: Scalars['DateTime'],
  DeactivatedAt: Scalars['DateTime'],
  IsActive: Scalars['Boolean'],
  DaysActive: Scalars['Int'],
};

export enum ContractorType {
  Hospice = 'HOSPICE',
  Facility = 'FACILITY',
  Vendor = 'VENDOR'
}

export enum ContractorTypeSelect {
  All = 'ALL',
  Hospice = 'HOSPICE',
  Facility = 'FACILITY',
  Vendor = 'VENDOR'
}


export type Location = {
   __typename?: 'Location',
  ID: Scalars['Int'],
  Name: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  Phone: Scalars['String'],
  AltPhone: Scalars['String'],
  Fax: Scalars['String'],
  Website: Scalars['String'],
  Email: Scalars['String'],
  ContactName: Scalars['String'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type Login = {
  Email: Scalars['String'],
  Password: Scalars['String'],
};

export type Migration = {
   __typename?: 'Migration',
  ID: Scalars['Int'],
  TargetVersion: Scalars['Int'],
  MigratorName: Scalars['String'],
  RanAt: Scalars['DateTime'],
  WasSuccess: Scalars['Boolean'],
  ErrorMsg: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  Login: Scalars['String'],
  Register?: Maybe<Scalars['Boolean']>,
  ForgotPassword?: Maybe<Scalars['Boolean']>,
  SaveForgotPassword?: Maybe<Scalars['Boolean']>,
  Logout?: Maybe<Scalars['Boolean']>,
  SaveContractor: Contractor,
  DeleteContractor?: Maybe<Scalars['Boolean']>,
  SaveLocation: Location,
  DeleteLocation?: Maybe<Scalars['Boolean']>,
  MgmtSaveTenant: Tenant,
  MgmtDeleteTenant?: Maybe<Scalars['Boolean']>,
  SavePatientActivity: PatientActivity,
  DeletePatientActivity?: Maybe<Scalars['Boolean']>,
  SavePatientAddress: PatientAddress,
  SetPatientAddressPrimary?: Maybe<Scalars['Boolean']>,
  DeletePatientAddress?: Maybe<Scalars['Boolean']>,
  SavePatientPhoto?: Maybe<Scalars['Boolean']>,
  SavePatient: Patient,
  DeactivatePatient?: Maybe<Scalars['Boolean']>,
  DeletePatient?: Maybe<Scalars['Boolean']>,
  SaveProductTypePhoto?: Maybe<Scalars['Boolean']>,
  SaveProductType: ProductType,
  DeleteProductType?: Maybe<Scalars['Boolean']>,
  SaveProduct: Product,
  DeleteProduct?: Maybe<Scalars['Boolean']>,
  SaveTicket: Ticket,
  DeleteTicket?: Maybe<Scalars['Boolean']>,
  SaveTicketProduct: TicketProduct,
  DeleteTicketProduct?: Maybe<Scalars['Boolean']>,
  SaveRole: Role,
  DeleteRole?: Maybe<Scalars['Boolean']>,
  AddRolePermission: RolePermission,
  DeleteRolePermission?: Maybe<Scalars['Boolean']>,
  SaveUser: User,
  InviteUser: User,
  ResendInvite?: Maybe<Scalars['Boolean']>,
  SetLastUserLocation?: Maybe<Scalars['Boolean']>,
  SaveUserPassword?: Maybe<Scalars['Boolean']>,
  DeleteUser?: Maybe<Scalars['Boolean']>,
  SaveUserRole: UserRole,
  DeleteUserRole?: Maybe<Scalars['Boolean']>,
};


export type MutationLoginArgs = {
  input: Login
};


export type MutationRegisterArgs = {
  input: SaveRegister
};


export type MutationForgotPasswordArgs = {
  Email: Scalars['String']
};


export type MutationSaveForgotPasswordArgs = {
  input: SaveForgotPassword
};


export type MutationSaveContractorArgs = {
  input: SaveContractor
};


export type MutationDeleteContractorArgs = {
  ContractorID: Scalars['Int']
};


export type MutationSaveLocationArgs = {
  input: SaveLocation
};


export type MutationDeleteLocationArgs = {
  LocationID: Scalars['Int']
};


export type MutationMgmtSaveTenantArgs = {
  input: SaveTenant
};


export type MutationMgmtDeleteTenantArgs = {
  TenantID: Scalars['Int']
};


export type MutationSavePatientActivityArgs = {
  input: SavePatientActivity
};


export type MutationDeletePatientActivityArgs = {
  PatientActivityID: Scalars['Int']
};


export type MutationSavePatientAddressArgs = {
  input: SavePatientAddress
};


export type MutationSetPatientAddressPrimaryArgs = {
  PatientAddressID: Scalars['Int']
};


export type MutationDeletePatientAddressArgs = {
  PatientAddressID: Scalars['Int']
};


export type MutationSavePatientPhotoArgs = {
  PatientID: Scalars['Int'],
  PatientPhoto: Scalars['Upload']
};


export type MutationSavePatientArgs = {
  input?: Maybe<SavePatient>
};


export type MutationDeactivatePatientArgs = {
  PatientID: Scalars['Int']
};


export type MutationDeletePatientArgs = {
  PatientID: Scalars['Int']
};


export type MutationSaveProductTypePhotoArgs = {
  ProductTypeID: Scalars['Int'],
  ProductTypePhoto: Scalars['Upload']
};


export type MutationSaveProductTypeArgs = {
  input: SaveProductType
};


export type MutationDeleteProductTypeArgs = {
  ProductTypeID: Scalars['Int']
};


export type MutationSaveProductArgs = {
  input: SaveProduct
};


export type MutationDeleteProductArgs = {
  ProductID: Scalars['Int']
};


export type MutationSaveTicketArgs = {
  input: SaveTicket
};


export type MutationDeleteTicketArgs = {
  TicketID: Scalars['Int']
};


export type MutationSaveTicketProductArgs = {
  input?: Maybe<SaveTicketProduct>
};


export type MutationDeleteTicketProductArgs = {
  TicketProductID: Scalars['Int']
};


export type MutationSaveRoleArgs = {
  input: SaveRole
};


export type MutationDeleteRoleArgs = {
  RoleID: Scalars['Int']
};


export type MutationAddRolePermissionArgs = {
  input: AddRolePermission
};


export type MutationDeleteRolePermissionArgs = {
  RolePermissionID: Scalars['Int']
};


export type MutationSaveUserArgs = {
  input: SaveUser
};


export type MutationInviteUserArgs = {
  Email: Scalars['String']
};


export type MutationResendInviteArgs = {
  UserID: Scalars['Int']
};


export type MutationSetLastUserLocationArgs = {
  UserID?: Maybe<Scalars['Int']>,
  LocationID: Scalars['Int']
};


export type MutationSaveUserPasswordArgs = {
  input: SaveUserPassword
};


export type MutationDeleteUserArgs = {
  UserID: Scalars['Int']
};


export type MutationSaveUserRoleArgs = {
  input: SaveUserRole
};


export type MutationDeleteUserRoleArgs = {
  UserRoleID: Scalars['Int']
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Patient = {
   __typename?: 'Patient',
  ID: Scalars['Int'],
  Location: Location,
  Contractor: Contractor,
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Height: Scalars['Int'],
  Weight: Scalars['Int'],
  DOB: Scalars['DateTime'],
  SSN: Scalars['String'],
  Notes: Scalars['String'],
  IsActive: Scalars['Boolean'],
  ActivatedAt: Scalars['DateTime'],
  DeactivatedAt: Scalars['DateTime'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type PatientActivity = {
   __typename?: 'PatientActivity',
  ID: Scalars['Int'],
  Patient: Patient,
  Contractor: Contractor,
  ActivatedAt: Scalars['DateTime'],
  DeactivatedAt: Scalars['DateTime'],
  IsActive: Scalars['Boolean'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type PatientAddress = {
   __typename?: 'PatientAddress',
  ID: Scalars['Int'],
  Patient: Patient,
  ContactName: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  Phone: Scalars['String'],
  AltPhone: Scalars['String'],
  IsPrimary: Scalars['Boolean'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type PatientProductLogProduct = {
   __typename?: 'PatientProductLogProduct',
  ProductTypeID: Scalars['Int'],
  ProductTypeName: Scalars['String'],
  ProductTypeIsRentalItem: Scalars['Boolean'],
  ProductID: Scalars['Int'],
  ProductSerial: Scalars['String'],
  ProductStatus: ProductStatus,
  DeliveryTicketID: Scalars['Int'],
  DeliveryTicketType: TicketType,
  DeliveredAt: Scalars['DateTime'],
  PickupTicketID: Scalars['Int'],
  PickupTicketType: TicketType,
  PickedUpAt: Scalars['DateTime'],
  DaysOut: Scalars['Int'],
};

export enum PatientsFilterBy {
  None = 'NONE',
  ContractorId = 'CONTRACTOR_ID',
  Firstname = 'FIRSTNAME',
  Lastname = 'LASTNAME',
  Height = 'HEIGHT',
  Weight = 'WEIGHT',
  Dob = 'DOB',
  Ssn = 'SSN'
}

export enum PatientsOrderBy {
  Id = 'ID',
  Firstname = 'FIRSTNAME',
  Lastname = 'LASTNAME',
  Height = 'HEIGHT',
  Weight = 'WEIGHT',
  Dob = 'DOB',
  ActivatedAt = 'ACTIVATED_AT',
  DeactivatedAt = 'DEACTIVATED_AT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type Permission = {
   __typename?: 'Permission',
  ID: PermissionType,
  Desc: Scalars['String'],
};

export enum PermissionType {
  ContractorAdd = 'CONTRACTOR_ADD',
  ContractorView = 'CONTRACTOR_VIEW',
  ContractorEdit = 'CONTRACTOR_EDIT',
  ContractorDelete = 'CONTRACTOR_DELETE',
  LocationAdd = 'LOCATION_ADD',
  LocationView = 'LOCATION_VIEW',
  LocationEdit = 'LOCATION_EDIT',
  LocationDelete = 'LOCATION_DELETE',
  PatientAdd = 'PATIENT_ADD',
  PatientView = 'PATIENT_VIEW',
  PatientEdit = 'PATIENT_EDIT',
  PatientDelete = 'PATIENT_DELETE',
  ProducttypeAdd = 'PRODUCTTYPE_ADD',
  ProducttypeView = 'PRODUCTTYPE_VIEW',
  ProducttypeEdit = 'PRODUCTTYPE_EDIT',
  ProducttypeDelete = 'PRODUCTTYPE_DELETE',
  ProductAdd = 'PRODUCT_ADD',
  ProductView = 'PRODUCT_VIEW',
  ProductEdit = 'PRODUCT_EDIT',
  ProductDelete = 'PRODUCT_DELETE',
  RoleAdd = 'ROLE_ADD',
  RoleView = 'ROLE_VIEW',
  RoleEdit = 'ROLE_EDIT',
  RoleDelete = 'ROLE_DELETE',
  SettingView = 'SETTING_VIEW',
  SettingEdit = 'SETTING_EDIT',
  TicketAdd = 'TICKET_ADD',
  TicketView = 'TICKET_VIEW',
  TicketEdit = 'TICKET_EDIT',
  TicketDelete = 'TICKET_DELETE',
  UserAdd = 'USER_ADD',
  UserView = 'USER_VIEW',
  UserEdit = 'USER_EDIT',
  UserDelete = 'USER_DELETE',
  ProductticketAdd = 'PRODUCTTICKET_ADD',
  ProductticketView = 'PRODUCTTICKET_VIEW',
  ProductticketEdit = 'PRODUCTTICKET_EDIT',
  ProductticketDelete = 'PRODUCTTICKET_DELETE',
  TicketEditCompleted = 'TICKET_EDIT_COMPLETED',
  ReportActivePatientCount = 'REPORT_ACTIVE_PATIENT_COUNT'
}

export type Product = {
   __typename?: 'Product',
  ID: Scalars['Int'],
  Type: ProductType,
  Status: ProductStatus,
  Serial: Scalars['String'],
  MFRSerial: Scalars['String'],
  Patient?: Maybe<Patient>,
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export enum ProductStatus {
  In = 'IN',
  Out = 'OUT',
  Broken = 'BROKEN',
  Service = 'SERVICE',
  Empty = 'EMPTY',
  Refill = 'REFILL',
  Dirty = 'DIRTY',
  Pending = 'PENDING',
  Missing = 'MISSING',
  Retired = 'RETIRED',
  Transfer = 'TRANSFER',
  Sold = 'SOLD',
  Vehiclestock = 'VEHICLESTOCK'
}

export type ProductType = {
   __typename?: 'ProductType',
  ID: Scalars['Int'],
  Location: Location,
  Name: Scalars['String'],
  IsRentalItem: Scalars['Boolean'],
  IsRefillItem: Scalars['Boolean'],
  IsDisposableItem: Scalars['Boolean'],
  IsActive: Scalars['Boolean'],
  LowStockLevel: Scalars['Int'],
  CurrentStockIn: Scalars['Int'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type ProductTypeCount = {
   __typename?: 'ProductTypeCount',
  ProductType: ProductType,
  Count: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  PatientPhotoURL: Scalars['String'],
  ProductTypePhotoURL: Scalars['String'],
  TicketPDFURL: Scalars['String'],
  ReportContractorInvoiceODFURL: Scalars['String'],
  Contractors: Array<Contractor>,
  Location: Location,
  Locations: Array<Location>,
  LocationVansCount: Scalars['Int'],
  LocationDriversCount: Scalars['Int'],
  LocationPatientsCount: Scalars['Int'],
  MgmtMigrations: Array<Migration>,
  MgmtTenant: Tenant,
  MgmtTenants: Array<Tenant>,
  PatientActivity: PatientActivity,
  PatientActivities: Array<PatientActivity>,
  PatientAddress: PatientAddress,
  PatientPrimaryAddress: PatientAddress,
  PatientAddresses: Array<PatientAddress>,
  PatientIsDuplicate: Scalars['Boolean'],
  Patient: Patient,
  Patients: Array<Patient>,
  Permissions: Array<Permission>,
  ProductType: ProductType,
  ProductTypes: Array<ProductType>,
  Product: Product,
  Products: Array<Product>,
  ProductsByPatient: Array<Product>,
  ProductsByAddress: Array<Product>,
  ReportProductInQuantities: Array<ProductTypeCount>,
  ReportPatientProductLog: Array<PatientProductLogProduct>,
  ReportContractorPatientLog: Array<ContractorPatientLog>,
  ReportContractorInvoice: ContractorInvoice,
  ReportActivePatientCount: ActivePatientCount,
  Role: Role,
  Roles: Array<Role>,
  RolePermissions: Array<RolePermission>,
  Ticket: Ticket,
  Tickets: Array<Ticket>,
  TicketProducts: Array<TicketProduct>,
  GenerateStrongPassword: Scalars['String'],
  User: User,
  Users: Array<User>,
  UserPermissions: Array<PermissionType>,
  UserRoles: Array<UserRole>,
  UserRegistrationInfo: User,
};


export type QueryPatientPhotoUrlArgs = {
  PatientID: Scalars['Int']
};


export type QueryProductTypePhotoUrlArgs = {
  ProductTypeID: Scalars['Int']
};


export type QueryTicketPdfurlArgs = {
  TicketID: Scalars['Int']
};


export type QueryReportContractorInvoiceOdfurlArgs = {
  ContractorID: Scalars['Int'],
  DateStart: Scalars['DateTime'],
  DateEnd: Scalars['DateTime']
};


export type QueryContractorsArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  Type?: Maybe<ContractorTypeSelect>,
  Active?: Maybe<ActiveSelect>
};


export type QueryLocationArgs = {
  LocationID: Scalars['Int']
};


export type QueryLocationVansCountArgs = {
  LocationID: Scalars['Int']
};


export type QueryLocationDriversCountArgs = {
  LocationID: Scalars['Int']
};


export type QueryLocationPatientsCountArgs = {
  LocationID: Scalars['Int']
};


export type QueryMgmtTenantArgs = {
  TenantID: Scalars['Int']
};


export type QueryPatientActivityArgs = {
  PatientActivityID: Scalars['Int']
};


export type QueryPatientActivitiesArgs = {
  PatientID: Scalars['Int']
};


export type QueryPatientAddressArgs = {
  PatientAddressID: Scalars['Int']
};


export type QueryPatientPrimaryAddressArgs = {
  PatientID: Scalars['Int']
};


export type QueryPatientAddressesArgs = {
  PatientID: Scalars['Int']
};


export type QueryPatientIsDuplicateArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  DOB: Scalars['DateTime']
};


export type QueryPatientArgs = {
  PatientID: Scalars['Int']
};


export type QueryPatientsArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  Active?: Maybe<ActiveSelect>,
  FilterBy?: Maybe<PatientsFilterBy>,
  Filter?: Maybe<Scalars['String']>,
  Page?: Maybe<Scalars['Int']>,
  PerPage?: Maybe<Scalars['Int']>,
  OrderBy?: Maybe<PatientsOrderBy>,
  Order?: Maybe<Order>
};


export type QueryProductTypeArgs = {
  ProductTypeID: Scalars['Int']
};


export type QueryProductTypesArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  Active?: Maybe<ActiveSelect>
};


export type QueryProductArgs = {
  ProductID: Scalars['Int']
};


export type QueryProductsArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  ProductTypeID?: Maybe<Scalars['Int']>
};


export type QueryProductsByPatientArgs = {
  PatientID: Scalars['Int']
};


export type QueryProductsByAddressArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String']
};


export type QueryReportProductInQuantitiesArgs = {
  LocationID?: Maybe<Scalars['Int']>
};


export type QueryReportPatientProductLogArgs = {
  PatientID: Scalars['Int'],
  DateStart: Scalars['DateTime'],
  DateEnd: Scalars['DateTime']
};


export type QueryReportContractorPatientLogArgs = {
  ContractorID: Scalars['Int'],
  DateStart: Scalars['DateTime'],
  DateEnd: Scalars['DateTime']
};


export type QueryReportContractorInvoiceArgs = {
  ContractorID: Scalars['Int'],
  DateStart: Scalars['DateTime'],
  DateEnd: Scalars['DateTime']
};


export type QueryRoleArgs = {
  RoleID: Scalars['Int']
};


export type QueryRolePermissionsArgs = {
  RoleID: Scalars['Int']
};


export type QueryTicketArgs = {
  TicketID: Scalars['Int']
};


export type QueryTicketsArgs = {
  LocationID?: Maybe<Scalars['Int']>,
  Type?: Maybe<TicketTypeSelect>,
  FilterBy?: Maybe<TicketsFilterBy>,
  Filter?: Maybe<Scalars['String']>,
  Page?: Maybe<Scalars['Int']>,
  PerPage?: Maybe<Scalars['Int']>,
  OrderBy?: Maybe<TicketsOrderBy>,
  Order?: Maybe<Order>
};


export type QueryTicketProductsArgs = {
  TicketID: Scalars['Int']
};


export type QueryUserArgs = {
  UserID?: Maybe<Scalars['Int']>
};


export type QueryUsersArgs = {
  Active?: Maybe<ActiveSelect>,
  FilterBy?: Maybe<UsersFilterBy>,
  Filter?: Maybe<Scalars['String']>,
  Page?: Maybe<Scalars['Int']>,
  PerPage?: Maybe<Scalars['Int']>,
  OrderBy?: Maybe<UsersOrderBy>,
  Order?: Maybe<Order>
};


export type QueryUserPermissionsArgs = {
  UserID?: Maybe<Scalars['Int']>,
  LocationID?: Maybe<Scalars['Int']>
};


export type QueryUserRolesArgs = {
  UserID?: Maybe<Scalars['Int']>
};


export type QueryUserRegistrationInfoArgs = {
  RegisterToken: Scalars['String']
};

export type Role = {
   __typename?: 'Role',
  ID: Scalars['Int'],
  Name: Scalars['String'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type RolePermission = {
   __typename?: 'RolePermission',
  ID: Scalars['Int'],
  Role: Role,
  Permission: Permission,
};

export type SaveContractor = {
  ID?: Maybe<Scalars['Int']>,
  LocationID?: Maybe<Scalars['Int']>,
  Type: ContractorType,
  Name: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  MainPhone: Scalars['String'],
  MainFax: Scalars['String'],
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Title: Scalars['String'],
  Phone: Scalars['String'],
  AltPhone: Scalars['String'],
  IsTankVendor: Scalars['Boolean'],
  IsActive: Scalars['Boolean'],
};

export type SaveForgotPassword = {
  ForgotPasswordToken: Scalars['String'],
  NewPassword: Scalars['String'],
  ConfirmNewPassword: Scalars['String'],
};

export type SaveLocation = {
  ID?: Maybe<Scalars['Int']>,
  Name: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  Phone: Scalars['String'],
  AltPhone: Scalars['String'],
  Fax: Scalars['String'],
  Website: Scalars['String'],
  Email: Scalars['String'],
  ContactName: Scalars['String'],
};

export type SavePatient = {
  ID?: Maybe<Scalars['Int']>,
  LocationID: Scalars['Int'],
  ContractorID: Scalars['Int'],
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Height: Scalars['Int'],
  Weight: Scalars['Int'],
  DOB: Scalars['DateTime'],
  SSN: Scalars['String'],
  Notes: Scalars['String'],
  IsActive: Scalars['Boolean'],
  ActivatedAt: Scalars['DateTime'],
  DeactivatedAt: Scalars['DateTime'],
  ConfirmDuplicate?: Maybe<Scalars['Boolean']>,
};

export type SavePatientActivity = {
  ID?: Maybe<Scalars['Int']>,
  PatientID: Scalars['Int'],
  ContractorID: Scalars['Int'],
  ActivatedAt: Scalars['DateTime'],
  DeactivatedAt: Scalars['DateTime'],
  IsActive: Scalars['Boolean'],
};

export type SavePatientAddress = {
  ID?: Maybe<Scalars['Int']>,
  PatientID: Scalars['Int'],
  ContactName: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  Latitude: Scalars['Float'],
  Longitude: Scalars['Float'],
  Phone: Scalars['String'],
  AltPhone: Scalars['String'],
  IsPrimary: Scalars['Boolean'],
};

export type SaveProduct = {
  ID?: Maybe<Scalars['Int']>,
  TypeID: Scalars['Int'],
  Status: ProductStatus,
  Serial: Scalars['String'],
  MFRSerial: Scalars['String'],
};

export type SaveProductType = {
  ID?: Maybe<Scalars['Int']>,
  LocationID: Scalars['Int'],
  Name: Scalars['String'],
  IsRentalItem: Scalars['Boolean'],
  IsRefillItem: Scalars['Boolean'],
  IsDisposableItem: Scalars['Boolean'],
  IsActive: Scalars['Boolean'],
  LowStockLevel: Scalars['Int'],
  CurrentStockIn: Scalars['Int'],
};

export type SaveRegister = {
  RegisterToken: Scalars['String'],
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Email: Scalars['String'],
  Password: Scalars['String'],
  ConfirmPassword: Scalars['String'],
  Company: Scalars['String'],
  Position: Scalars['String'],
  Phone: Scalars['String'],
};

export type SaveRole = {
  ID?: Maybe<Scalars['Int']>,
  Name: Scalars['String'],
};

export type SaveTenant = {
  ID?: Maybe<Scalars['Int']>,
  LoginName: Scalars['String'],
  CompanyName: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  MainPhone: Scalars['String'],
  MainFax: Scalars['String'],
  ContactName: Scalars['String'],
  ContactEmail: Scalars['String'],
  IsActive: Scalars['Boolean'],
};

export type SaveTicket = {
  ID?: Maybe<Scalars['Int']>,
  LocationID: Scalars['Int'],
  Type: TicketType,
  Status: TicketStatus,
  ContractorID: Scalars['Int'],
  PatientID: Scalars['Int'],
  PatientAddressID: Scalars['Int'],
  RequestedAt: Scalars['DateTime'],
  BilledAt: Scalars['DateTime'],
  OrderedByID: Scalars['Int'],
  DriverID: Scalars['Int'],
  Notes: Scalars['String'],
};

export type SaveTicketProduct = {
  ID?: Maybe<Scalars['Int']>,
  TicketID: Scalars['Int'],
  ProductTypeID: Scalars['Int'],
  ProductID?: Maybe<Scalars['Int']>,
  ReplacementForID?: Maybe<Scalars['Int']>,
};

export type SaveUser = {
  ID?: Maybe<Scalars['Int']>,
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Email: Scalars['String'],
  Password?: Maybe<Scalars['String']>,
  Company: Scalars['String'],
  Position: Scalars['String'],
  Phone: Scalars['String'],
  Timezone: Scalars['String'],
  IsActive: Scalars['Boolean'],
  IsAdmin: Scalars['Boolean'],
};

export type SaveUserPassword = {
  UserID?: Maybe<Scalars['Int']>,
  OldPassword: Scalars['String'],
  NewPassword: Scalars['String'],
  ConfirmNewPassword: Scalars['String'],
};

export type SaveUserRole = {
  UserID: Scalars['Int'],
  LocationID: Scalars['Int'],
  RoleID: Scalars['Int'],
};

export type Tenant = {
   __typename?: 'Tenant',
  ID: Scalars['Int'],
  LoginName: Scalars['String'],
  CompanyName: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  Zip: Scalars['String'],
  MainPhone: Scalars['String'],
  MainFax: Scalars['String'],
  ContactName: Scalars['String'],
  ContactEmail: Scalars['String'],
  IsActive: Scalars['Boolean'],
};

export type Ticket = {
   __typename?: 'Ticket',
  ID: Scalars['Int'],
  Location: Location,
  Type: TicketType,
  Status: TicketStatus,
  Contractor: Contractor,
  Patient: Patient,
  PatientAddress: PatientAddress,
  RequestedAt: Scalars['DateTime'],
  CompletedAt: Scalars['DateTime'],
  BilledAt: Scalars['DateTime'],
  OrderedBy?: Maybe<User>,
  Driver?: Maybe<User>,
  Notes: Scalars['String'],
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export type TicketProduct = {
   __typename?: 'TicketProduct',
  ID: Scalars['Int'],
  Ticket: Ticket,
  ProductType: ProductType,
  Product?: Maybe<Product>,
  ReplacementFor?: Maybe<Product>,
};

export enum TicketsFilterBy {
  None = 'NONE',
  Status = 'STATUS',
  ContractorId = 'CONTRACTOR_ID',
  PatientId = 'PATIENT_ID',
  PatientAddressId = 'PATIENT_ADDRESS_ID',
  OrderedById = 'ORDERED_BY_ID',
  DriverId = 'DRIVER_ID'
}

export enum TicketsOrderBy {
  Id = 'ID',
  Type = 'TYPE',
  Status = 'STATUS',
  RequestedAt = 'REQUESTED_AT',
  CompletedAt = 'COMPLETED_AT',
  BilledAt = 'BILLED_AT',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export enum TicketStatus {
  Waiting = 'WAITING',
  Ready = 'READY',
  Transit = 'TRANSIT',
  Completed = 'COMPLETED'
}

export enum TicketType {
  Delivery = 'DELIVERY',
  Repair = 'REPAIR',
  Pickup = 'PICKUP',
  Refill = 'REFILL',
  Service = 'SERVICE'
}

export enum TicketTypeSelect {
  All = 'ALL',
  Delivery = 'DELIVERY',
  Repair = 'REPAIR',
  Pickup = 'PICKUP',
  Refill = 'REFILL',
  Service = 'SERVICE'
}


export type User = {
   __typename?: 'User',
  ID: Scalars['Int'],
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  Email: Scalars['String'],
  Company: Scalars['String'],
  Position: Scalars['String'],
  Phone: Scalars['String'],
  Timezone: Scalars['String'],
  IsActive: Scalars['Boolean'],
  LastLocation: Location,
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
  IsAdmin: Scalars['Boolean'],
  InvitationPending: Scalars['Boolean'],
  InvitationExpired: Scalars['Boolean'],
};

export type UserRole = {
   __typename?: 'UserRole',
  ID: Scalars['Int'],
  User: User,
  Location: Location,
  Role: Role,
  Creator: User,
  CreatedAt: Scalars['DateTime'],
  Updater: User,
  UpdatedAt: Scalars['DateTime'],
};

export enum UsersFilterBy {
  None = 'NONE',
  Firstname = 'FIRSTNAME',
  Lastname = 'LASTNAME',
  Email = 'EMAIL',
  Company = 'COMPANY',
  Position = 'POSITION',
  Phone = 'PHONE'
}

export enum UsersOrderBy {
  Id = 'ID',
  Firstname = 'FIRSTNAME',
  Lastname = 'LASTNAME',
  Email = 'EMAIL',
  Company = 'COMPANY',
  Position = 'POSITION',
  Phone = 'PHONE',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type GetPatientsQueryVariables = {};


export type GetPatientsQuery = (
  { __typename?: 'Query' }
  & { Patients: Array<(
    { __typename?: 'Patient' }
    & Pick<Patient, 'ID' | 'FirstName' | 'LastName' | 'Height' | 'Weight' | 'DOB' | 'SSN' | 'Notes' | 'IsActive' | 'ActivatedAt' | 'DeactivatedAt'>
    & { Location: (
      { __typename?: 'Location' }
      & Pick<Location, 'City'>
    ) }
  )> }
);

export type PatientsFilterByQueryVariables = {
  input: Scalars['String']
};


export type PatientsFilterByQuery = (
  { __typename?: 'Query' }
  & { Patients: Array<(
    { __typename?: 'Patient' }
    & Pick<Patient, 'ID' | 'SSN' | 'FirstName' | 'LastName' | 'Height' | 'Weight'>
  )> }
);

export type SavePatientMutationVariables = {
  input: SavePatient
};


export type SavePatientMutation = (
  { __typename?: 'Mutation' }
  & { SavePatient: (
    { __typename?: 'Patient' }
    & Pick<Patient, 'ID' | 'SSN'>
  ) }
);

export type PatientFormDependenciesLocationsQueryVariables = {};


export type PatientFormDependenciesLocationsQuery = (
  { __typename?: 'Query' }
  & { Locations: Array<(
    { __typename?: 'Location' }
    & Pick<Location, 'ID' | 'Name' | 'City' | 'State'>
  )> }
);

export type PatientFormDependenciesContractorsQueryVariables = {
  locationId?: Maybe<Scalars['Int']>
};


export type PatientFormDependenciesContractorsQuery = (
  { __typename?: 'Query' }
  & { Contractors: Array<(
    { __typename?: 'Contractor' }
    & Pick<Contractor, 'ID' | 'Name' | 'City'>
  )> }
);

export type UserLoginMutationVariables = {
  login: Login
};


export type UserLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'Login'>
);


export const GetPatientsDocument = gql`
    query getPatients {
  Patients {
    ID
    FirstName
    LastName
    Height
    Weight
    DOB
    SSN
    Notes
    IsActive
    ActivatedAt
    DeactivatedAt
    Location {
      City
    }
  }
}
    `;

/**
 * __useGetPatientsQuery__
 *
 * To run a query within a React component, call `useGetPatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPatientsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPatientsQuery, GetPatientsQueryVariables>(GetPatientsDocument, baseOptions);
      }
export function useGetPatientsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPatientsQuery, GetPatientsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPatientsQuery, GetPatientsQueryVariables>(GetPatientsDocument, baseOptions);
        }
export type GetPatientsQueryHookResult = ReturnType<typeof useGetPatientsQuery>;
export type GetPatientsLazyQueryHookResult = ReturnType<typeof useGetPatientsLazyQuery>;
export type GetPatientsQueryResult = ApolloReactCommon.QueryResult<GetPatientsQuery, GetPatientsQueryVariables>;
export const PatientsFilterByDocument = gql`
    query patientsFilterBy($input: String!) {
  Patients(FilterBy: SSN, Filter: $input) {
    ID
    SSN
    FirstName
    LastName
    Height
    Weight
  }
}
    `;

/**
 * __usePatientsFilterByQuery__
 *
 * To run a query within a React component, call `usePatientsFilterByQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientsFilterByQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientsFilterByQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePatientsFilterByQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PatientsFilterByQuery, PatientsFilterByQueryVariables>) {
        return ApolloReactHooks.useQuery<PatientsFilterByQuery, PatientsFilterByQueryVariables>(PatientsFilterByDocument, baseOptions);
      }
export function usePatientsFilterByLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PatientsFilterByQuery, PatientsFilterByQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PatientsFilterByQuery, PatientsFilterByQueryVariables>(PatientsFilterByDocument, baseOptions);
        }
export type PatientsFilterByQueryHookResult = ReturnType<typeof usePatientsFilterByQuery>;
export type PatientsFilterByLazyQueryHookResult = ReturnType<typeof usePatientsFilterByLazyQuery>;
export type PatientsFilterByQueryResult = ApolloReactCommon.QueryResult<PatientsFilterByQuery, PatientsFilterByQueryVariables>;
export const SavePatientDocument = gql`
    mutation savePatient($input: SavePatient!) {
  SavePatient(input: $input) {
    ID
    SSN
  }
}
    `;

/**
 * __useSavePatientMutation__
 *
 * To run a mutation, you first call `useSavePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePatientMutation, { data, loading, error }] = useSavePatientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSavePatientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SavePatientMutation, SavePatientMutationVariables>) {
        return ApolloReactHooks.useMutation<SavePatientMutation, SavePatientMutationVariables>(SavePatientDocument, baseOptions);
      }
export type SavePatientMutationHookResult = ReturnType<typeof useSavePatientMutation>;
export type SavePatientMutationResult = ApolloReactCommon.MutationResult<SavePatientMutation>;
export type SavePatientMutationOptions = ApolloReactCommon.BaseMutationOptions<SavePatientMutation, SavePatientMutationVariables>;
export const PatientFormDependenciesLocationsDocument = gql`
    query patientFormDependenciesLocations {
  Locations {
    ID
    Name
    City
    State
  }
}
    `;

/**
 * __usePatientFormDependenciesLocationsQuery__
 *
 * To run a query within a React component, call `usePatientFormDependenciesLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientFormDependenciesLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientFormDependenciesLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePatientFormDependenciesLocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PatientFormDependenciesLocationsQuery, PatientFormDependenciesLocationsQueryVariables>) {
        return ApolloReactHooks.useQuery<PatientFormDependenciesLocationsQuery, PatientFormDependenciesLocationsQueryVariables>(PatientFormDependenciesLocationsDocument, baseOptions);
      }
export function usePatientFormDependenciesLocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PatientFormDependenciesLocationsQuery, PatientFormDependenciesLocationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PatientFormDependenciesLocationsQuery, PatientFormDependenciesLocationsQueryVariables>(PatientFormDependenciesLocationsDocument, baseOptions);
        }
export type PatientFormDependenciesLocationsQueryHookResult = ReturnType<typeof usePatientFormDependenciesLocationsQuery>;
export type PatientFormDependenciesLocationsLazyQueryHookResult = ReturnType<typeof usePatientFormDependenciesLocationsLazyQuery>;
export type PatientFormDependenciesLocationsQueryResult = ApolloReactCommon.QueryResult<PatientFormDependenciesLocationsQuery, PatientFormDependenciesLocationsQueryVariables>;
export const PatientFormDependenciesContractorsDocument = gql`
    query patientFormDependenciesContractors($locationId: Int) {
  Contractors(LocationID: $locationId) {
    ID
    Name
    City
  }
}
    `;

/**
 * __usePatientFormDependenciesContractorsQuery__
 *
 * To run a query within a React component, call `usePatientFormDependenciesContractorsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientFormDependenciesContractorsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientFormDependenciesContractorsQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *   },
 * });
 */
export function usePatientFormDependenciesContractorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PatientFormDependenciesContractorsQuery, PatientFormDependenciesContractorsQueryVariables>) {
        return ApolloReactHooks.useQuery<PatientFormDependenciesContractorsQuery, PatientFormDependenciesContractorsQueryVariables>(PatientFormDependenciesContractorsDocument, baseOptions);
      }
export function usePatientFormDependenciesContractorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PatientFormDependenciesContractorsQuery, PatientFormDependenciesContractorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PatientFormDependenciesContractorsQuery, PatientFormDependenciesContractorsQueryVariables>(PatientFormDependenciesContractorsDocument, baseOptions);
        }
export type PatientFormDependenciesContractorsQueryHookResult = ReturnType<typeof usePatientFormDependenciesContractorsQuery>;
export type PatientFormDependenciesContractorsLazyQueryHookResult = ReturnType<typeof usePatientFormDependenciesContractorsLazyQuery>;
export type PatientFormDependenciesContractorsQueryResult = ApolloReactCommon.QueryResult<PatientFormDependenciesContractorsQuery, PatientFormDependenciesContractorsQueryVariables>;
export const UserLoginDocument = gql`
    mutation userLogin($login: Login!) {
  Login(input: $login)
}
    `;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, baseOptions);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = ApolloReactCommon.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
// 原本的定义有问题，使用新的定义文件重新配置
declare module 'async-validator' {

  export type RuleType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'array'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email'
    | 'any';

  export interface ValidateSource {
    [field: string]: any;
  }

  export interface ValidateOption {
    // whether to suppress internal warning
    suppressWarning?: boolean;

    // when the first validation rule generates an error stop processed
    first?: boolean;

    // when the first validation rule of the specified field generates an error stop the field processed, 'true' means all fields.
    firstFields?: boolean | string[];
  }

  export interface Rules {
    // eslint-disable-next-line no-use-before-define
    [field: string]: RuleItem | RuleItem[];
  }

  export interface RuleItem {
    type?: RuleType; // default type is 'string'
    required?: boolean;
    pattern?: RegExp | string;
    trigger?: string,
    min?: number; // Range of type 'string' and 'array'
    max?: number; // Range of type 'string' and 'array'
    len?: number; // Length of type 'string' and 'array'
    enum?: Array<string | number | boolean | null | undefined>; // possible values of type 'enum'
    whitespace?: boolean;
    fields?: Rules; // ignore when without required
    options?: ValidateOption;
    defaultField?: RuleItem; // 'object' or 'array' containing validation rules
    transform?: (value: any) => any;
    message?: string;
    asyncValidator?: (
      rule: Rules,
      value: any,
      callback: (error: string | string[] | Error | void) => void,
      source: ValidateSource,
      options: ValidateOption,
    ) => void | Promise<void>;
    validator?: (
      rule: Rules,
      value: any,
      callback: (error?: string | string[] | Error | void) => void,
      source: ValidateSource,
      options: ValidateOption,
    ) => void;
  }

}

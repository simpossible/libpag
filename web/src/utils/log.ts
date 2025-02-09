import { ErrorCode, ErrorMap } from './error-map';

export class Log {
  public static log(message) {
    console.log(message);
  }

  public static error(error: string) {
    throw new Error(error);
  }

  public static errorByCode(errorCode: ErrorCode) {
    throw new Error(ErrorMap[errorCode]);
  }
}

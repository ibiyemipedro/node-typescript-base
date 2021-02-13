class HttpException extends Error {
    statusCode: number;
    message: string;
    data: any
    constructor(statusCode: number, message: string, data: any) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
    }
  }
   
  export default HttpException;
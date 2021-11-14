
export type AsyncFunction<A, O> = (args: A) => Promise<O>;

export interface AuthOption {
    jwt_secret: string;
    access_token_expired: number;
    refresh_token_expired: number;
}

export interface DatabaseOption {
    dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
    host: string;
    port: number;
    username: string;
    password: string;
    dbname: string;
}

export interface SwaggerOption {
    name: string;
    version: string;
    description: string;
    scheme: 'http' | 'https';
    host: string;
}
  
export interface SocketOption {
    adapter?: unknown;
    listener?: (socket: unknown) => void;
}
  
export interface ServerOption {
  port: number;
  prefix?: string;
  auth: AuthOption;
  database: DatabaseOption;
  swagger: SwaggerOption;
  socket?: SocketOption;
}

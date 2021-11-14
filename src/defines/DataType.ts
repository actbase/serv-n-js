import { DataTypes } from 'sequelize';

export const DataType = {
    INT: (options?: { decimals?: number; precision?: number; scale?: number }): unknown => ({
        __name: 'int',
        toSwagger: () => ({
            type: 'integer',
            format: 'int32',
        }),
        toSequelize: () => DataTypes.INTEGER(options),
        toValue: (o: unknown) => {
            if (o === undefined || o === null) return o;
            return parseInt(String(o), 10);
        }
    }),
    LONG: () => null,
    FLOAT: () => null,
    DOUBLE: () => null,
    STRING: () => null,
    TEXT: () => null,
    PASSWORD: () => null,
    ENUM: () => null,
    JSON: () => null,
    BASE64: () => null,
    BINARY: () => null,
    BOOLEAN: () => null,
    DATEONLY: () => null,
    DATETIME: () => null
};

export default DataType;
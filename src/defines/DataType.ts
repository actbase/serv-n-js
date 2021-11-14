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
    })

};

export default DataType;
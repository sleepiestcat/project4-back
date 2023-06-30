import {EntitySchema} from 'typeorm';

const prfSchema = new EntitySchema({
	name: 'prf',
	tableName: 'prf',
	columns: {
		id: {
			type: 'int',
			primary: true,
			generated: true,
		},
		name: {
			type: 'varchar',
			length: 255,
		},
	},
});

export default prfSchema;

import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createTableMarket1641993455695 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'market',
			columns: [
				{
					name: 'id',
					type: 'varchar',
					length: '36',
					isPrimary: true
				},
				{
					name: 'id_person',
					type: 'varchar',
					length: '36',
				},
				{
					name: 'id_type',
					type: 'varchar',
					length: '36',
				},
				{
					name: 'id_product',
					type: 'varchar',
					length: '36',
				},
				{
					name: 'price',
					type: 'decimal'					
				},
				{	
					name: 'quantity',
					type: 'int'
				}
			]
		}))

		await queryRunner.createForeignKeys('market', [
			new TableForeignKey({
				columnNames: ['id_person'],
				referencedColumnNames: ['id'],
				referencedTableName: 'persons',
				onDelete: 'CASCADE'
			}),
			new TableForeignKey({
				columnNames: ['id_type'],
				referencedColumnNames: ['id'],
				referencedTableName: 'market_types',
				onDelete: 'CASCADE'
			}),
			new TableForeignKey({
				columnNames: ['id_product'],
				referencedColumnNames: ['id'],
				referencedTableName: 'products',
				onDelete: 'CASCADE'
			})			
		])
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const table = await queryRunner.getTable('market')

		if (!table) {
			throw new Error('Table "products" does not exist')
		}

		const foreignKeyPersons = table.foreignKeys.find(fk => fk.columnNames.indexOf('id_person') !== -1)
		const foreignKeyMarketTypes = table.foreignKeys.find(fk => fk.columnNames.indexOf('id_type') !== -1)
		const foreignKeyProducts = table.foreignKeys.find(fk => fk.columnNames.indexOf('id_product') !== -1)

		if (!foreignKeyPersons || !foreignKeyMarketTypes || !foreignKeyProducts) {
			throw new Error('Foreign key was not found')
		} 

		await queryRunner.dropForeignKeys('market', [foreignKeyPersons, foreignKeyMarketTypes, foreignKeyProducts])
		await queryRunner.dropColumns('market', ['id_person', 'id_type', 'id_product'])
		await queryRunner.dropTable('market')
	}

}

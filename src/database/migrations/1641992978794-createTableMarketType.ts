import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableMarketType1641992978794 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'market_types',
			columns: [
				{
					name: 'id',
					type: 'varchar',
					isPrimary: true,
					length: '36'
				},
				{
					name: 'description',
					type: 'varchar'
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('market_types')
	}
}

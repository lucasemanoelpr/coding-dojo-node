import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createTableProducts1641925135296 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'id_person',
            type: 'varchar',
            length: '36',
          },
        ],
      })
    );
    await queryRunner.createForeignKey("products", new TableForeignKey({
        columnNames: ["id_person"],
        referencedColumnNames: ["id"],
        referencedTableName: "persons",
        onDelete: "CASCADE"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("products");
    if (!table) throw new Error("Table 'products' does not exist");
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("id_person") !== -1);
    if (!foreignKey) throw new Error("Foreign key was not found");
    await queryRunner.dropForeignKey("products", foreignKey);
    await queryRunner.dropColumn("products", "id_person");
    await queryRunner.dropTable('products');
  }
}
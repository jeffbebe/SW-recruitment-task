import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHashUser1612117186679 implements MigrationInterface {
    name = 'AddHashUser1612117186679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "temp" TO "salt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "salt" TO "temp"`);
    }

}

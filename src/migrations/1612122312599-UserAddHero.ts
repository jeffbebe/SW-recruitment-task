import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddHero1612122312599 implements MigrationInterface {
    name = 'UserAddHero1612122312599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "hero" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hero"`);
    }

}

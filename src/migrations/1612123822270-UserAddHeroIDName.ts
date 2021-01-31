import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddHeroIDName1612123822270 implements MigrationInterface {
    name = 'UserAddHeroIDName1612123822270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hero"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "heroID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "heroName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "heroName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "heroID"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "hero" character varying NOT NULL`);
    }

}

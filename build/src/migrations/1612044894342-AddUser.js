"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUser1612044894342 = void 0;
class AddUser1612044894342 {
    constructor() {
        this.name = 'AddUser1612044894342';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "temp" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.AddUser1612044894342 = AddUser1612044894342;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxMjA0NDg5NDM0Mi1BZGRVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTYxMjA0NDg5NDM0Mi1BZGRVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsb0JBQW9CO0lBQWpDO1FBQ0ksU0FBSSxHQUFHLHNCQUFzQixDQUFBO0lBVWpDLENBQUM7SUFSVSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3BDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxtUEFBbVAsQ0FBQyxDQUFDO0lBQ2pSLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FFSjtBQVhELG9EQVdDIn0=
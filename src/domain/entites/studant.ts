import { Entity } from "../../core/domain/Entity";

type StudanteProps = {
    name : string;
    email: string;
}

export class Studant extends Entity<StudanteProps> {
    private constructor(props: StudanteProps, id?: string) {
        super(props, id);
    }
    static create(props: StudanteProps, id?: string) {
        const studant = new Studant(props, id)
        return Studant;
    }
}
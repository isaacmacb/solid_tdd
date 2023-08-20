import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    instructionsUrl : string;
    title: string;
}

export class Challeng extends Entity<ChallengeProps> {
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }
    public create(props: ChallengeProps, id?: string) {
        const challeng = new Challeng(props, id)
        return challeng;
    }
}
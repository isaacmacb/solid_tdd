// create-challeng-submission.ts

import { Submission } from "../../domain/entites/submission";

type CreatedChallengSubmissionRequest = {
    userId: string,
    challengId: string,
}

export class CreatedChallengSubmission {
    async execute({ userId, challengId }: CreatedChallengSubmissionRequest) {
        const submission = Submission.create({
            studentId: userId,
            challengId,
            createdAt: new Date(),
        });
    }
}

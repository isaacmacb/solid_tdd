import { CreatedChallengSubmission } from './create-challeng-submission'


describe("Create challeng sub,ission use case", () => {
    it('should be able to create a new challeng submission', async() => {
        const sut = new CreatedChallengSubmission();

        const response = await sut.execute({
            userId: 'fake-student-id',
            challengId: 'fake-challeng-id'
        })
        expect(response).toBeTruthy()
    })
})
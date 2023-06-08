const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const meetings = require('../../api/controllers/meetings');
const Meeting = require('../../api/models/meeting');


describe('Mettings Controller', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original functions after each test
    });

    describe("meeting.js", () => {
        describe("getAllMeetings", () => {
            it('should return all meetings', async () => {
                const req = {};
                const res = {
                    status: (num) => {
                        expect(num).to.equal(200);
                        return {
                            json: (obj) => {
                                expect(obj).to.deep.equal([{ title: 'Meeting 1' }, { title: 'Meeting 2' }]);
                            }
                        }
                    }
                };
                sinon.stub(Meeting, 'find').resolves([{ title: 'Meeting 1' }, { title: 'Meeting 2' }]);

                meetings.getAllMeetings(req, res);
            });

            it('should return 500 if an error occurs', async () => {
                const req = {};
                const res = {
                    status: (num) => {
                        expect(num).to.equal(500);
                        return {
                            json: (obj) => {
                                expect(obj.error).to.exist;
                            }
                        }
                    }
                };
                sinon.stub(Meeting, 'find').rejects(new Error('Database error'));

                meetings.getAllMeetings(req, res);
            });

            afterEach(() => {
                sinon.restore();
            });
        });

        describe("getProviderMeetings", () => {
            it('should return provider meetings based on username', async () => {
                const req = {
                    username: 'provider123'
                };
                const res = {
                    status: (num) => {
                        expect(num).to.equal(200);
                        return {
                            json: (obj) => {
                                expect(obj).to.deep.equal([{ title: 'Meeting 1' }, { title: 'Meeting 2' }]);
                            }
                        }
                    }
                };
                sinon.stub(Meeting, 'find').resolves([{ title: 'Meeting 1' }, { title: 'Meeting 2' }]);

                meetings.getProviderMeetings(req, res);
            });

            it('should return 500 if an error occurs', async () => {
                const req = {
                    username: 'provider123'
                };
                const res = {
                    status: (num) => {
                        expect(num).to.equal(500);
                        return {
                            json: (obj) => {
                                expect(obj.error).to.exist;
                            }
                        }
                    }
                };
                sinon.stub(Meeting, 'find').rejects(new Error('Database error'));

                meetings.getProviderMeetings(req, res);
            });

        });

    });


});

import { JobOffer } from './job-offer';
export class EmployerReply {

    private _id: number;
    private _date: Date;
    private _replyType: string;
    private _replyContent: string;
    private _jobOffer: JobOffer;


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Getter replyType
     * @return {string}
     */
	public get replyType(): string {
		return this._replyType;
	}

    /**
     * Getter replyContent
     * @return {string}
     */
	public get replyContent(): string {
		return this._replyContent;
	}

    /**
     * Getter jobOffer
     * @return {JobOffer}
     */
	public get jobOffer(): JobOffer {
		return this._jobOffer;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Setter replyType
     * @param {string} value
     */
	public set replyType(value: string) {
		this._replyType = value;
	}

    /**
     * Setter replyContent
     * @param {string} value
     */
	public set replyContent(value: string) {
		this._replyContent = value;
	}

    /**
     * Setter jobOffer
     * @param {JobOffer} value
     */
	public set jobOffer(value: JobOffer) {
		this._jobOffer = value;
	}

}

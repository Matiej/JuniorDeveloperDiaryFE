export class Candidate {

    private _id: number;
    private _name: string;
    private _surname: string;
    private _login: string;
    private _email: string;
    private _password: string;
    private _matchingPassword: string;
    private _registerDate: Date;
    private _enabled: boolean;

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter surname
     * @return {string}
     */
	public get surname(): string {
		return this._surname;
	}

    /**
     * Getter login
     * @return {string}
     */
	public get login(): string {
		return this._login;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter matchingPassword
     * @return {string}
     */
	public get matchingPassword(): string {
		return this._matchingPassword;
	}

    /**
     * Getter registerDate
     * @return {Date}
     */
	public get registerDate(): Date {
		return this._registerDate;
	}

    /**
     * Getter enabled
     * @return {boolean}
     */
	public get enabled(): boolean {
		return this._enabled;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter surname
     * @param {string} value
     */
	public set surname(value: string) {
		this._surname = value;
	}

    /**
     * Setter login
     * @param {string} value
     */
	public set login(value: string) {
		this._login = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter matchingPassword
     * @param {string} value
     */
	public set matchingPassword(value: string) {
		this._matchingPassword = value;
	}

    /**
     * Setter registerDate
     * @param {Date} value
     */
	public set registerDate(value: Date) {
		this._registerDate = value;
	}

    /**
     * Setter enabled
     * @param {boolean} value
     */
	public set enabled(value: boolean) {
		this._enabled = value;
	}

}

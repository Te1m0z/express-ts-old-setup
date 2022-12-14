import knex from '../database/connection'
import { IUser } from '../interfaces/User'

export abstract class User {

	static table: string = 'users'

	static async checkExists(login: string): Promise<boolean | IUser> {

		const userExists: IUser | undefined = await knex<IUser>(this.table).where('login', login).first()

		return userExists ? Promise.resolve(userExists) : Promise.reject(false)
	}
}

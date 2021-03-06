import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class SubmitService {
    // private _apiUrl = 'https://private-91abd-node46.apiary-mock.com/';
	private _apiUrl = environment.API_URL;
    constructor(private http: Http) { }

    submitCongregation(submission): Promise<any> {
        return this.http
			.post(this._apiUrl + 'congregation', submission)
			.toPromise()
			.then(() => submission)
			.catch(x => alert(x.json().error));
    }

    submitResource(submission): Promise<any> {
        return this.http
			.post(this._apiUrl + 'resource', submission)
			.toPromise()
			.then(() => submission)
			.catch(x => alert(x.json().error));
    }

    submitOrgs(submission): Promise<any> {
        return this.http
			.post(this._apiUrl + 'orgs', submission)
			.toPromise()
			.then(() => submission)
			.catch(x => alert(x.json().error));
    }

    submitEvent(submission): Promise<any> {
        return this.http
			.post(this._apiUrl + 'event', submission)
			.toPromise()
			.then(() => submission)
			.catch(x => alert(x.json().error));
    }

    submitPerson(submission): Promise<any> {
        return this.http
			.post(this._apiUrl + 'person', submission)
			.toPromise()
			.then(() => submission)
			.catch(x => alert(x.json().error));
    }
}
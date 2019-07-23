import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3004';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  loadGeneralInfo(): Observable<any> {
    return this.http.get(this.url + '/');
  }
  sendConnectionrequest(did): Observable<any> {
    return this.http.post(this.url + '/api/send_connection_request', did, this.httpOptions);
  }
  sendMessage(did, message): Observable<any> {
    return this.http.post(this.url + '/api/send_message', { did, message }, this.httpOptions)
  }
  deleteMessage(msgId): Observable<any> {
    return this.http.post(this.url + '/api/messages/delete', { messageId: msgId }, this.httpOptions);
  }
  createSchema(name_of_schema, version, attrs): Observable<any> {
    return this.http.post(this.url + '/api/issuer/create_schema', { name_of_schema, version, attributes: attrs }, this.httpOptions);
  }
  createCredentialDef(schema_id, tag): Observable<any> {
    return this.http.post(this.url + '/api/issuer/create_cred_def', { schema_id, tag }, this.httpOptions)
  }
  sendCredentialOffer(their_relationship_did, cred_def_id, data): Observable<any> {
    const cred_data = JSON.stringify(data)
    return this.http.post(
      this.url + '/api/issuer/send_credential_offer',
      { their_relationship_did, cred_def_id, cred_data },
      this.httpOptions);
  }
  sendProofRequest(their_relationship_did, proof_request_id, manual_entry): Observable<any> {
    return this.http.post(
      this.url + '/api/proofs/send_request',
      { their_relationship_did, proof_request_id, manual_entry },
      this.httpOptions)
  }
  validate(proof): Observable<any> {
    delete proof.request.string;
    console.log(proof);
    return this.http.post(this.url + '/api/proofs/validate', { proof: proof }, this.httpOptions);
  }
  generalRequest(href, message): Observable<any> {
    return this.http.post(this.url + href, { messageId: message }, this.httpOptions);
  }
}

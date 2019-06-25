import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CertificateService {
  invokeUrl = 'http://localhost:4000/channels/mychannel/chaincodes/';
  Url = 'http://localhost:4000/channels/mychannel/chaincodes/';
  userPanelUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addBirth(info: any) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'createBirthMyAsset';
    data['args'] = [
      info.did,
      {
        fname: info.fname,
        lname: info.lname,
        father: info.fatherDID,
        mother: info.motherDID,
        dob: info.dob,
        gender: info.gender,
        religion: info.religion,
        familyNumber: info.familyNumber,
        address: {
          address: info.address,
          city: info.city,
          country: info.country
        }

      }];
    return this.http.post(this.invokeUrl + 'birth', data);
  }

  addNationalId(info: any) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'createNationalIdMyAsset';
    data['args'] = [
      info.username,
      {
        phone: info.phone,
        fname: info.fname,
        lname: info.lname,
        father: info.fatherDID,
        mother: info.motherDID,
        familyNumber: info.familyNumber,
        gender: info.gender,
        martialStatus: info.martialStatus,
        address: {
          country: info.country,
          province: info.province,
          division: info.division,
          district: info.district,
          tehsile: info.tehsile,
          address: info.address
        },
        dob: info.date,
        religion: info.religion,
        profession: info.profession,
      }];
    return this.http.post(this.invokeUrl + 'nationalid', data);
  }

  addMarriage(info: any) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'createMarriage';
    data['args'] = [
      info.did,
      {
        fname: info.fname,
        lname: info.lname,
        father: info.father,
        mother: info.mother,
        familyNumber: info.familyNumber,
        husbandDOB: info.husbandDOB,
        wifeDOB: info.wifeDOB,
        addresses: {
          wifeAddress: info.wifeAddress,
          husbandAddress: info.husbandAddress
        },
        witnesses: {
          witnessOne: info.witnessOne,
          witnessTwo: info.witnessTwo,
          witnessThird: info.witnessThird
        },
        MarriageDate: info.MarriageDate
      }];
    return this.http.post(this.invokeUrl + 'marriage', data);
  }

  getBirthAll(): Observable<any> {
    return this.http.get(this.userPanelUrl + 'birth/getall');
  }
  getNationAll(): Observable<any> {
    return this.http.get(this.userPanelUrl + 'nationalid/getall');
  }
  getMarriageAll(): Observable<any> {
    return this.http.get(this.userPanelUrl + 'marriage/getall');
  }
  rejectBirthRequest(username): Observable<any> {
    return this.http.post(this.userPanelUrl + 'birth/reject', username);
  }
  approveBirthRequest(data): Observable<any> {
    return this.http.post(this.userPanelUrl + 'birth/approve', data);
  }

  approvenationalRequest(data): Observable<any> {
    return this.http.post(this.userPanelUrl + 'nationalid/approve', data);
  }

  approvemarriageRequest(data): Observable<any> {
    return this.http.post(this.userPanelUrl + 'marriage/approve', data);
  }

  getFromMongo(obj): Observable<any> {
    return this.http.get(this.userPanelUrl + obj.path + '/getbyid?id=' + obj.id);
  }
  getBirth(did) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'readBirthMyAsset';
    data['args'] = [did]
    return this.http.post(this.Url + 'birth', data);
  }
  getNational(username) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'readNationalIdMyAsset';
    data['args'] = [username]
    return this.http.post(this.Url + 'nationalid', data);
  }
  getMarriage(username) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'readMarriage';
    data['args'] = [username]
    return this.http.post(this.Url + 'marriage', data);
  }
}

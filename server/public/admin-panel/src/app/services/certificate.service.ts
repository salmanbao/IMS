import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CertificateService {
  invokeUrl = 'http://localhost:4000/channels/mychannel/chaincodes/';
  userPanelUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  getAll(id) {
    return this.http.get('http://localhost:4000/certificates/' + id);
  }
  addCertificate(certificate) {
    if (certificate.title.toLowerCase() === 'birth') {
      delete certificate.title;
      return this.http.post(this.invokeUrl + 'birth', this.buildBirthRequest(certificate));
    } else if (certificate.title.toLowerCase() === 'nationalid') {
      delete certificate.title;
      return this.http.post(this.invokeUrl + 'NationalId', this.buildNationalIdRequest(certificate));
    } else if (certificate.title.toLowerCase() === 'marriage') {
      delete certificate.title;
      return this.http.post(this.invokeUrl + 'marriage', this.buildMarriageRequest(certificate));
    }
  }

  getBirth(did) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'readBirthMyAsset';
    data['args'] = [did]
    return this.http.post(this.invokeUrl + 'birth', data);
  }
  getNational(username) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'readNationalIdMyAsset';
    data['args'] = [username]
    return this.http.post(this.invokeUrl + 'nationalid', data);
  }
  getMarriage(username) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'readMarriage';
    data['args'] = [username]
    return this.http.post(this.invokeUrl + 'marriage', data);
  }

  buildBirthRequest(info: any) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'createBirthMyAsset';
    data['args'] = [
      info.did,
      {
        fname: info.fname,
        lname: info.lname,
        father: info.father,
        mother: info.mother,
        dob: info.dob,
        gender: info.gender,
        religion: info.religion,
        familyNumber: info.familynumber,
        address: {
          address: info.address,
          city: info.city,
          country: info.country
        }

      }];
    return data;
  }

  buildNationalIdRequest(info: any) {
    const data: Object = {};
    const peers = ['peer0.org1.example.com'];
    data['peers'] = peers;
    data['fcn'] = 'createNationalIdMyAsset';
    data['args'] = [
      info.fname,
      {
        phone: info.phone,
        fname: info.fname,
        lname: info.lname,
        father: info.father,
        mother: info.mother,
        familyNumber: info.familynumber,
        gender: info.gender,
        martialStatus: info.martialstatus,
        address: {
          country: info.country,
          province: info.province,
          division: info.division,
          district: info.district,
          tehsile: info.tehsile,
          address: info.address
        },
        dob: info.dob,
        religion: info.religion,
        profession: info.profession,
      }];
    return data;
  }

  buildMarriageRequest(info: any) {
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
  }
}

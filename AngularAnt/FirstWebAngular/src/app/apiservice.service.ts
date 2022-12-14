import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:7005/api/';
  constructor(private http: HttpClient) { }

  //Province
 public getProvinceList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'province/GetProvince');
  }

 public addProvince(pro: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<any>(this.apiUrl + 'province/AddProvince', pro, httpOptions);
  }

 public updateProvince(pro: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'province/UpdateProvince/', pro, httpOptions);
  }

 public deleteProvince(proid: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'province/DeleteProvince/' + proid, httpOptions);
  } 

  //District
  getDistrictList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'district/GetDistrict');
  }

  addDistrict(dis: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'district/AddDistrict', dis, httpOptions);
  }

  updateDistrict(dis: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'district/UpdateDistrict/', dis, httpOptions);
  }

  deleteDistrict(disId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'district/DeleteDistrict/' + disId, httpOptions);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'district/GetAllProvince');
  }
}

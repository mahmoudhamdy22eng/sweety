import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }
  
  addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/products`, product);
  }
  addSweet(productData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, productData);
  }
  addSnack(productData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, productData);
  }
  updateProduct(productId: number, productData: FormData): Observable<any> {
    console.log(productData, productId);
    const headers=new HttpHeaders()
    headers.append("content-type","multipart/form-data") 
    return this.http.post<[]>(`${this.apiUrl}/products/${productId}`, productData,{headers:headers});
  }
  updateSweet(productId: number, productData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/updatesweet/${productId}`, productData);
  }
  
  getProductById(productId: number): Observable<any> { // New method
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
  }
  

  getProductCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/productcategories`);
  }

  // IsLoggedIn(){
  //   return !!localStorage.getItem('user-data-login');
  // }

  // roleAs:any;
  // getRole(){
  //   var user_data:any = localStorage.getItem('user-data-login');
  //   user_data = JSON.parse(user_data)
  //   this.roleAs = user_data['user_type'];
  //   console.log(this.roleAs)
  //   return this.roleAs;
  // }

  










  baseURL:any="http://localhost";

  imgstoreURL ="http://localhost/php/api/petstore/stores";
  imgclinicURL ="http://localhost/php/api/petstore/clinics";
  imgpetURL ="http://localhost/php/api/petstore/pets";
  imgownerURL ="http://localhost/php/api/petstore/owner";
  posts: any;


  
  get_pets(cond:any){
  return  this.http.get<[]>(this.baseURL+"/php/api/petstore/pets/GETpet.php?cond="+cond);
  }
  get_type(cond:any){
    return  this.http.get<[]>(this.baseURL+"/php/api/petstore/pets/GETtype.php?cond="+cond);
    }
  get_petcats(cond:any){
    return  this.http.get<[]>(this.baseURL+"/php/api/petstore/pets/GETpet.php?cond="+cond);
    }
  update_pet(cond:any, data:any){
    // const body =JSON.stringify(data);
    // console.log(body,cond);
    return this.http.post(this.baseURL+"/php/api/petstore/pets/UPDATEpet.php?cond="+cond,data);
  }
  insert_pet(data:any){
    // const body =JSON.stringify(data);
    // console.log(body);
    return this.http.post(this.baseURL+"/php/api/petstore/pets/INSERTpet.php",data);
  }
  delete_pet(cond:number, data:any){
    const body =JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseURL+"/php/api/petstore/pets/DELETEpet.php?cond="+cond,body);
  }

  get_clinics(cond:any){
    return  this.http.get<[]>(this.baseURL+"/php/api/petstore/clinics/GETclinic.php?cond="+cond);
    }
    get_Allclinics(){
      return  this.http.get<[]>(this.baseURL+"/php/api/petstore/clinics/GETclinic.php");
      }
    update_clinic(cond:any, data:any){
      const body =JSON.stringify(data);
      console.log(body,cond);
      return this.http.post(this.baseURL+"/php/api/petstore/clinics/UPDATEclinic.php?cond="+cond,body);
    }
    insert_clinic(data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/clinics/INSERTclinic.php",body);
    }
    delete_clinic(cond:number, data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/clinics/DELETEclinic.php?cond="+cond,body);
    }

    get_stores(cond:any){
      return  this.http.get<[]>(this.baseURL+"/php/api/petstore/stores/GETstore.php?cond="+cond);
      }
      get_Allstores(){
        return  this.http.get<[]>(this.baseURL+"/php/api/petstore/stores/GETstore.php");
        }
      update_store(cond:any, data:any){
        // const body =JSON.stringify(data);
        // console.log(body,cond);
        return this.http.post(this.baseURL+"/php/api/petstore/stores/UPDATEstore.php?cond="+cond,data);
      }
      insert_store(data:any){
        // const body =JSON.stringify(data);
        // console.log(body);
        return this.http.post(this.baseURL+"/php/api/petstore/stores/INSERTstore.php",data);
      }
    delete_store(cond:number, data:any){
        const body =JSON.stringify(data);
        console.log(body);
        return this.http.post(this.baseURL+"/php/api/petstore/stores/DELETEstore.php?cond="+cond,body);
      }

    login(data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/login.php",body);
    }

    get_owners(cond:any){
      return  this.http.get<[]>(this.baseURL+"/php/api/petstore/owner/GETowner.php?cond="+cond);
      }
    insert_owner(data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/INSERTowner.php",body);
    }
    update_owner(cond:any, data:any){
      const body =JSON.stringify(data);
      console.log(body,cond);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/UPDATEowner.php?cond="+cond,body);
    }
    delete_owner(cond:number, data:any){
      const body =JSON.stringify(data);
      console.log(body);
      return this.http.post(this.baseURL+"/php/api/petstore/owner/DELETEowner.php?cond="+cond,body);
    }

    get_posts(){
      return  this.http.get<[]>("http://127.0.0.1:8000/api/posts");
      }

}

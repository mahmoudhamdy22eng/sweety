import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {

  
  clinics:any=[];
  cats:any=[];
  dogs:any=[];
  stores:any=[];
  owners:any=[];
  pets:any=[];
  userId: any;

  currentSection: string = 'sweets'; // Default to 'stores' section

  // Method to show/hide sections based on clicked category
  showSection(route: string) {
    this.currentSection = route;
  }

  toggleStore(store_id: number) {
    const IsDeletedStore = this.stores.find((store: any) => store.store_id === store_id)!.is_deleted === 1 ? 0 : 1;

    this.api.delete_store(store_id, { is_deleted: IsDeletedStore })
    .subscribe({
      next: (data: any) => {
        // Update local store array
        const storeIndex = this.stores.findIndex((store: any) => store.store_id === store_id);
        if (storeIndex !== -1) {
          this.stores[storeIndex].is_deleted = IsDeletedStore;
        } else {
          console.error('Store not found in local stores array after API update.');
        }
      },
      error: (err: any) => {
        console.error('Error updating store:', err);
      }
    });
  }

  toggleClinic(clinic_id: number) {
    const IsDeletedClinic = this.clinics.find((clinic: any) => clinic.clinic_id === clinic_id)!.is_deleted === 1 ? 0 : 1;

    this.api.delete_clinic(clinic_id, { is_deleted: IsDeletedClinic })
    .subscribe({
      next: (data: any) => {
        // Update local clinic array
        const clinicIndex = this.clinics.findIndex((clinic: any) => clinic.clinic_id === clinic_id);
        if (clinicIndex !== -1) {
          this.clinics[clinicIndex].is_deleted = IsDeletedClinic;
        } else {
          console.error('clinic not found in local clinics array after API update.');
        }
      },
      error: (err: any) => {
        console.error('Error updating clinic:', err);
      }
    });
  }

  toggleOwner(owner_id: number) {
    const IsDeletedOwner = this.owners.find((owner: any) => owner.owner_id === owner_id)!.is_deleted === 1 ? 0 : 1;

    this.api.delete_owner(owner_id, { is_deleted: IsDeletedOwner })
    .subscribe({
      next: (data: any) => {
        // Update local owner array
        const ownerIndex = this.owners.findIndex((owner: any) => owner.owner_id === owner_id);
        if (ownerIndex !== -1) {
          this.owners[ownerIndex].is_deleted = IsDeletedOwner;
        } else {
          console.error('owner not found in local owners array after API update.');
        }
      },
      error: (err: any) => {
        console.error('Error updating owner:', err);
      }
    });
  }

  // cats
  togglePetCat(pet_id: number) {
    const IsDeletedPet = this.cats.find((pet: any) => pet.pet_id === pet_id)!.is_deleted === 1 ? 0 : 1;

    this.api.delete_pet(pet_id, { is_deleted: IsDeletedPet })
    .subscribe({
      next: (data: any) => {
        // Update local pet array
        const petIndex = this.cats.findIndex((pet: any) => pet.pet_id === pet_id);
        if (petIndex !== -1) {
          this.cats[petIndex].is_deleted = IsDeletedPet;
        } else {
          console.error('pet not found in local pets array after API update.');
        }
      },
      error: (err: any) => {
        console.error('Error updating pet:', err);
      }
    });
  }

// dogs
  togglePetDog(pet_id: number) {
    const IsDeletedPet = this.dogs.find((pet: any) => pet.pet_id === pet_id)!.is_deleted === 1 ? 0 : 1;

    this.api.delete_pet(pet_id, { is_deleted: IsDeletedPet })
    .subscribe({
      next: (data: any) => {
        // Update local pet array
        const petIndex = this.dogs.findIndex((pet: any) => pet.pet_id === pet_id);
        if (petIndex !== -1) {
          this.dogs[petIndex].is_deleted = IsDeletedPet;
        } else {
          console.error('pet not found in local pets array after API update.');
        }
      },
      error: (err: any) => {
        console.error('Error updating pet:', err);
      }
    });
  }


  

    constructor (private api:ApiService , private route:ActivatedRoute) {
    }

    category =[{name:"Sweets",route:'sweets'},{name:"Snacks",route:'snacks'},
                {name:"Drinks",route:'drinks'},
                {name:"Ice Cream",route:'icecream'}];

// Function to encode ID from Base64
    encodeId(id: string): string {
        return btoa(id);
      }
// Function to decode ID from Base64
    decodeId(encodedId: string): string {
      return atob(encodedId);
    }

    ngOnInit(): void {

    // stores
    const hashedId = this.route.snapshot.paramMap.get('id');
    if (hashedId) {
      this.userId = atob(hashedId);
    } else {
      // console.error('ID parameter is missing');
    }    
    console.log(this.userId)
      if(this.userId != null){
        let cond = 'store_id='+this.userId;
        this.api.get_stores(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.stores=data;
        }})
      }else{
        let cond = '';

        this.api.get_stores(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.stores=data;
        }})
      }

      // owners
      // let idowner = this.route.snapshot.paramMap.get('id');
      // console.log(idowner);
      if(this.userId != null){
        let cond = 'owner_id='+this.userId;
        this.api.get_owners(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.owners=data;
        }})
      }else{
        let cond = '';

        this.api.get_owners(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          for(let emp of data){
            emp.newid=btoa(emp.id)
            emp.file=this.api.baseURL+emp.file
          }
          this.owners=data;
        }})
      }

      // pets
      // let pets = this.route.snapshot.paramMap.get('id');
      // console.log(pets);
      if(this.userId != null){
        let cond = 'pet_id='+this.userId;
        this.api.get_pets(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.pets=data;
        }})
      }else{
        let cond = '';

        this.api.get_pets(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.pets=data;
        }})
      }

    // cats
      // let typepet = this.route.snapshot.paramMap.get('id');
      // console.log(typepet);
      if(this.userId != null){
        let cond = 'pet_type_no=1 and pet_id='+this.userId;
        this.api.get_pets(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.cats=data;
        }})
      }else{
        let cond = 'pet_type_no=1';

        this.api.get_pets(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.cats=data;
        }})
      }

    // dogs
      // let typepet2 = this.route.snapshot.paramMap.get('id');
      // console.log(typepet2);
      if(this.userId != null){
        let cond = 'pet_type_no=2 and pet_id='+this.userId;
        this.api.get_pets(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.dogs=data;
        }})
      }else{
        let cond = 'pet_type_no=2';

        this.api.get_pets(cond)
        .subscribe({next:(data:any)=>{
          console.log(data[0]);
          this.dogs=data;
        }})
      }

    // clinics
      // let idclinic = this.route.snapshot.paramMap.get('id');
      //   console.log(idclinic);
        if(this.userId != null){
          let cond = 'clinic_id='+this.userId;
          this.api.get_clinics(cond)
          .subscribe({next:(data:any)=>{
            console.log(data[0]);
            this.clinics=data;
          }})
        }else{
          let cond = '';

          this.api.get_clinics(cond)
          .subscribe({next:(data:any)=>{
            console.log(data[0]);
            this.clinics=data;
          }})
        }
    
    }

    // is_deleted(){
    //   if (this.stores['is_deleted'] == 1) {
    //     this.stores['is_deleted'] = 'Active';
    //   } else if (this.stores['is_deleted'] == 0) {
    //     this.stores['is_deleted'] = 'Inactive';
    //   }
    // }
}

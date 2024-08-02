import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  constructor(private routeId: ActivatedRoute, private api:ApiService){}
  data:any=[]
    ngOnInit(){
      this.api.getProducts().subscribe((res:any)=>{
        let id=this.routeId.snapshot.paramMap.get('id')
        let response=res
        let product=response.filter((e:any)=>e.id==id)
        this.data=product[0]
      })
    }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart;
  formGroup: FormGroup;
  checkCart;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      checked: this.formBuilder.array([])
    });
    this.checkCart = <FormArray>this.formGroup.get('checked') as FormArray;

    this.cartService.getCart().subscribe(c => {
      if (c) {
        this.cart = c;

        c.forEach(el => {
          this.checkCart.push(new FormControl(el.price));
        });
      }
    });
  }

  onChange(event) {
    if (event.checked) {
      this.checkCart.push(new FormControl(event.source.value));
    } else {
      const i = this.checkCart.controls.findIndex(x => x.value === event.source.value);
      this.checkCart.removeAt(i);
    }
  }

  delete(i) {
    // delete this.cart[i];
  }

  getAllPrice() {
    let allPrice = 0;
    this.checkCart.value.map(p => allPrice += p);
    return allPrice;
  }
}

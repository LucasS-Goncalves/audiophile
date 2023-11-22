import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../cart.service';

export const checkoutGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const cartService = inject(CartService);

  if(cartService.cartItems.length > 0){
    return true;
  };
  
  router.navigate(['']);
  return false;
};

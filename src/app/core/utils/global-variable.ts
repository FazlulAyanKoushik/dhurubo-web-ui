import {environment} from '../../../environments/environment';

export const DATABASE_KEY = Object.freeze({
  loginToken: 'DHUROBO_TOKEN_' + environment.VERSION,
  loggInSession: 'DHUROBO_SESSION_' + environment.VERSION,
  loginTokenAdmin: 'DHUROBO_ADMIN_TOKEN_' + environment.VERSION,
  loggInSessionAdmin: 'DHUROBO_ADMIN_SESSION_' + environment.VERSION,
  encryptAdminLogin: 'DHUROBO_USER_0_' + environment.VERSION,
  encryptUserLogin: 'DHUROBO_USER_1_' + environment.VERSION,
  loginAdminRole: 'DHUROBO_ADMIN_ROLE_' + environment.VERSION,
  cartsProduct: 'DHUROBO_USER_CART_' + environment.VERSION,
  otpCheck: 'DHUROBO_USER_OTPCHECK_' + environment.VERSION,
  productFormData: 'DHUROBO_PRODUCT_FORM_' + environment.VERSION,
  userCart: 'DHUROBO_USER_CART_' + environment.VERSION,
  recommendedProduct: 'DHUROBO_RECOMMENDED_PRODUCT_' + environment.VERSION,
  userCoupon: 'DHUROBO_USER_COUPON_' + environment.VERSION,
  userCookieTerm: 'DHUROBO_COOKIE_TERM' + environment.VERSION,
});

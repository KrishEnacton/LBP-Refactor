export var config = {
  app_url: 'https://lbp8.enactweb.com',
  api_app_url: 'https://lbp8api.enactweb.com',
  welcome_url: 'https://lbp8.enactweb.com',
  login_url: '/login',
  logout_url: '',
  app_reg: 'https://lbp8.enactweb.com/',
  app_out_url: 'https://lbp8.enactweb.com/[a-z]*[/]*out/',
  user_cashback_payment: 'payment/payments?type=payments',
  refer_earn: 'refer-and-earn',
  user_missing_cashback: 'missing-cashback-claim',
  activities_prefix: '/activities/',
  cashback_prefix: 'cashback',
  lang: '',
  currency: '$',
  user_prefix: 'user',
  activated_cashback_timeout: 5000,
  primary_color: '#ED185D',
  extension_id: '',
  cookies: {
    tokens: { cooked_session: 'procash_sess', cooked_token: 'XSRF-TOKEN' },
  },
  referral_cashback: 15,
  hide_activate_button_popup_cookie_name: 'lbpro_hide_activate_button_popup',
  activated_popup_id_cookie_name: 'lbpro_activated_popup_id',
  app_icon: 'https://i.ibb.co/vjzmBRg/logo.png',
  google_icon: 'https://i.ibb.co/D4Cs8nm/Laraback-PRO-icon.png',
  cb_activated: 'https://i.ibb.co/8DsGyYR/cb-actvited.png',
  cb_active: 'https://i.ibb.co/3zpP1Z2/cb-active.png',
  restricted_activate_cashback_inject: [],
  default_lang: 'en',
  is_default_params: false,
  tabs: [
    { id: 1, title: 'home', isEnable: true, key: 'Home' },
    { id: 2, title: 'refer_n_earn', isEnable: true, key: 'ReferNEarn' },
    { id: 3, title: 'profile', isEnable: true, key: 'Profile' },
  ],
  home_screen_tabs: [
    { id: 101, title: 'top_stores', isEnable: true },
    { id: 102, title: 'top_offers', isEnable: true },
  ],
};

import i18next from 'i18next';

export const i18nextInit = () => {
  i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          WelCome_title: 'Welcome to LarabackPro',
          Search: 'Search',
          shop_now: 'Shop Now',
          app_title: 'LarabackPro',
          top_stores: 'Top Stores',
          top_offers: 'Top Offers',
          store_details: 'Store Details',
          store_offers: 'Store Offers',
          show_more: 'Show More ',
          refer_n_earn_title: 'Copy and send referral link to friends.',
          or: 'or',
          how_it_works: 'How it works',
          your_referral_activities: 'Your Referral Activities',
          lifetime_earning: 'Lifetime Earning',
          hi: 'Hi',
          settings_title: 'Settings for the LarabackPro Shopping Assistant',
          you_are_sign_in_as: 'You are signed in as',
          not_you: 'Not You?',
          do_not_display_my_order: 'Do not display My Orders tab',
          do_not_display_activation: 'Do not display Activation Hover on these sites',
          do_not_display_product_search: 'Do not display Product Search Recommendations',
          allow_data_collection:
            'Allow data collection. Sharing your usage data with LarabackPro helps us improve our products and services.',
          settings_header: 'LarabackPro Setting',
          cashback: 'Cashback',
          total_earned: 'Total Earned',
          confirmed: 'Confirmed',
          pending: 'Pending',
          paid_out: 'Paid out',
          cashback_payment: 'Cashback Payment',
          missing_payment: 'Missing Cashback Claim',
          log_out: 'Logout',
          member_since: 'Member Since',
          copy_link: 'Copy Link',
          you_saved: 'You saved',
          working_code: 'Working Code',
          continue_to_check_out: 'Continue to Checkout',
          activate_later: 'Activate Later',
          you_getting: "You're getting ",
          shopping_trip: 'Shopping Trip',
          ok_close_now: 'Okay, Close Now',
          coupons: 'Coupons',
          available: 'Available',
          cashback_available: 'Cashback Available',
          coupon_codes: 'Coupon Codes',
          reward_rates: 'Rewards Rate',
          reward: 'Reward',
          apply_coupons: 'Apply Coupons',
          ignore_n_close: 'Ignore and close',
          coupon_apply_progress_message: 'LarabackPro is automatically trying the best coupon codes for you.',
          applying_promo_code: 'Applying promo code',
          testing_code: 'Testing Code :',
          see_if_coupons_work_for_new: 'See if coupons work for new items in you cart.',
          re_apply_coupon: 'Re - Apply Coupons',
          dont_show_this_again: "Don't show this again for 1 hour",
          login: 'LOGIN',
          activate: 'Activate',
          copied: 'Copied',
          apply_coupon_failed: 'sorry! no coupon found for this order',
          from_app_name: 'from LarabackPro',
          you_ll_get: "You'll get",
          referral_msg: ' each order of users that register using your link.',
          cashback_rates: 'Cashback Rate',
          my_account: 'My Account',
          refer_n_earn: 'Refer & Earn',
          referral_reward: 'Referral Reward',
          transactions_your_friend: 'for all the transactions your friend makes .',
          referral_link_earn: 'When any one joins using your referral link, you will earn ',
          referral_bonus: 'Referral Bonus*',
          friend_joins: 'Any friend joins our platform will earn ',
          joining_bonus: ' Joining Bonus*',
          cashback_activity: 'Cashback Activities',
          no_data_found: 'No Results found for your search',
          loading: 'loading...',
          data: 'Krishna',
        },
      },
      hi: {
        translation: {
          WelCome_title: 'hi_Welcome to LarabackPro',
          Search: 'hi_Search',
          shop_now: 'hi_Shop Now',
          app_title: 'hi_LarabackPro',
          top_stores: 'hi_Top Stores',
          top_offers: 'hi_Top Offers',
          store_details: 'hi_Store Details',
          store_offers: 'hi_Store Offers',
          show_more: 'hi_Show More ',
        },
      },
    },
  });
};

export function set_user_lang() {
  chrome.storage.local.get(['extension_web_lang'], function (result) {
    if (result.extension_web_lang) {
      i18next.changeLanguage(result.extension_web_lang, (err, t) => {
        if (err) console.log('err', err);
        // console.log("lang changed :", result.extension_web_lang, t("shop_now"));
      });
    }
  });
}

export function translate(text) {
  return i18next.t(text);
}

export function get_image_url(text) {
  return config[text];
}

export function get_constructed_cashback_string(rate_type, amount_type, current_cb) {
  let returnText = '';
  let amount = '';
  if (!current_cb) {
    return '';
  }
  if (amount_type === 'percent') {
    amount = current_cb + '%';
  } else {
    amount = config.currency + current_cb;
  }
  if (rate_type === 'upto') {
    returnText = 'Up to ' + amount;
  } else {
    returnText = amount + ' Cashback';
  }
  return returnText;
}

export function get_constructed_cashback(amount_type, current_cb) {
  // let returnText = "";
  let amount = '';
  if (!current_cb) {
    return '';
  }
  if (amount_type === 'percent') {
    amount = current_cb + '%';
  } else {
    amount = config.currency + current_cb;
  }
  // if (rate_type === "upto") {
  //   returnText = amount;
  // } else {
  //   returnText = amount;
  // }
  return amount;
}
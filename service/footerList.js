const email = process.env.NEXT_PUBLIC_SHOPIFY_STORE_EMAIL;
const store_domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const store_founder = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FOUNDER;

export const footerNavItems = [
  {
    id: 1,
    title: "Refund Policy",
    content: `We have a 30-day return policy, which means you have 30 days after
    receiving your item to request a return. To be eligible for a return, your
    item must be in the same condition that you received it, unworn or unused,
    with tags, and in its original packaging. You’ll also need the receipt or
    proof of purchase. To start a return, you can contact us at
    <span className="font-semibold pl-1.5">${email}</span>. If your return is
    accepted, we’ll send you a return shipping label, as well as instructions
    on how and where to send your package. Items sent back to us without first
    requesting a return will not be accepted. You can always contact us for
    any return question at
    <span className="font-semibold pl-1.5">${email}</span>. Damages and issues
    Please inspect your order upon reception and contact us immediately if the
    item is defective, damaged or if you receive the wrong item, so that we
    can evaluate the issue and make it right. Exceptions / non-returnable
    items Certain types of items cannot be returned, like perishable goods
    (such as food, flowers, or plants), custom products (such as special
    orders or personalized items), and personal care goods (such as beauty
    products). We also do not accept returns for hazardous materials,
    flammable liquids, or gases. Please get in touch if you have questions or
    concerns about your specific item. Unfortunately, we cannot accept returns
    on sale items or gift cards. Exchanges The fastest way to ensure you get
    what you want is to return the item you have, and once the return is
    accepted, make a separate purchase for the new item. Refunds We will
    notify you once we’ve received and inspected your return, and let you know
    if the refund was approved or not. If approved, you’ll be automatically
    refunded on your original payment method. Please remember it can take some
    time for your bank or credit card company to process and post the refund
    too.`,
  },
  {
    id: 2,
    title: "Shipping",
    content: `I JUST PLACED AN ORDER, WHEN WILL IT SHIP? Please allow 3 - 7 business
  days of processing and production time for your order to ship out. HOW
  LONG IS THE SHIPPING TIME? Average transit times to the United States:10-
  24 Business days Average transit times to International: 20 - 35 Business
  days There are circumstances that are out of control (natural disasters,
  holidays, weather, etc) that may cause shipping postponements. While most
  packages will arrive on time, there may be circumstances and delays that
  our carriers may experience. For this reason, we do not guarantee the
  exact delivery time; the delivery issue is the responsibility of the
  shipping company. CAN I CANCEL MY ORDER? You are able to cancel your order
  with no penalty! You must cancel your order 24 hours after creating it for
  the cancellation to be applied. If the item has already shipped. All you
  need to do is send us an email with the subject line "CANCEL". I HAVE
  ENTERED AN INCORRECT ADDRESS! If you have misspelled or auto-filled your
  address incorrectly, simply reply to your order confirmation email and
  give us the correct information. Notify us immediately via email. If the
  address is wrong, we can correct this within 24 hours. MY ITEM ARRIVED
  DAMAGED We do ship every item with extra padding. Despite this, our
  customers report that around 1 in 1000 products arrives damaged due to
  mail service mistreatment. FOR PRE-ORDERED OR BACK-ORDERED ITEMS If your
  order contains a pre-ordered or back-ordered item, we will ship any items
  we have available immediately and ship the items that are pre-ordered or
  back-ordered immediately when we have them available. So if you ordered
  more than one item on a single order and receive only a part of your item
  don't worry, you will receive your other items shortly after. If this
  happens to you, please contact us with: - Your order number. - A picture
  of the damaged product. Once received, we'll be happy to send out another
  free of charge. I HAVE A QUESTION THAT WASN'T ANSWERED, CAN YOU PLEASE
  HELP? If we still haven't managed to answer your question please feel free
  to contact us and we will do our best to reply within 24 hours :)`,
  },
  {
    id: 3,
    title: "Privacy Policy",
    content: `This Privacy Policy describes how{" "}
  <span className="font-semibold px-1">${store_domain}</span> (the “Site” or
  “we”) collects, uses, and discloses your Personal Information when you
  visit or make a purchase from the Site. Collecting Personal Information
  When you visit the Site, we collect certain information about your device,
  your interaction with the Site, and information necessary to process your
  purchases. We may also collect additional information if you contact us
  for customer support. In this Privacy Policy, we refer to any information
  that can uniquely identify an individual (including the information below)
  as “Personal Information”. See the list below for more information about
  what Personal Information we collect and why. Device information Examples
  of Personal Information collected: version of web browser, IP address,
  time zone, cookie information, what sites or products you view, search
  terms, and how you interact with the Site. Purpose of collection: to load
  the Site accurately for you, and to perform analytics on Site usage to
  optimize our Site. Source of collection: Collected automatically when you
  access our Site using cookies, log files, web beacons, tags, or pixels
  [ADD OR SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED]. Disclosure for a
  business purpose: shared with our processor Shopify [ADD ANY OTHER VENDORS
  WITH WHOM YOU SHARE THIS INFORMATION]. Order information Examples of
  Personal Information collected: name, billing address, shipping address,
  payment information (including credit card numbers [INSERT ANY OTHER
  PAYMENT TYPES ACCEPTED]), email address, and phone number. Purpose of
  collection: to provide products or services to you to fulfill our
  contract, to process your payment information, arrange for shipping, and
  provide you with invoices and/or order confirmations, communicate with
  you, screen our orders for potential risk or fraud, and when in line with
  the preferences you have shared with us, provide you with information or
  advertising relating to our products or services. Source of collection:
  collected from you. Disclosure for a business purpose: shared with our
  processor Shopify [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS
  INFORMATION. FOR EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND
  FULFILLMENT APPS]. Customer support information Examples of Personal
  Information collected: [MODIFICATIONS TO THE INFORMATION LISTED ABOVE OR
  ADDITIONAL INFORMATION AS NEEDED] Purpose of collection: to provide
  customer support. Source of collection: collected from you. Disclosure for
  a business purpose: [ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]
  [INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED
  MARKETING DATA/LISTS] [INSERT FOLLOWING SECTION IF AGE RESTRICTION IS
  REQUIRED] Minors The Site is not intended for individuals under the age of
  [INSERT AGE]. We do not intentionally collect Personal Information from
  children. If you are the parent or guardian and believe your child has
  provided us with Personal Information, please contact us at the address
  below to request deletion. Sharing Personal Information We share your
  Personal Information with service providers to help us provide our
  services and fulfill our contracts with you, as described above. For
  example: We use Shopify to power our online store. You can read more about
  how Shopify uses your Personal Information here:
  https://www.shopify.com/legal/privacy. We may share your Personal
  Information to comply with applicable laws and regulations, to respond to
  a subpoena, search warrant or other lawful request for information we
  receive, or to otherwise protect our rights. [INSERT INFORMATION ABOUT
  OTHER SERVICE PROVIDERS] [INCLUDE FOLLOWING SECTION IF USING REMARKETING
  OR TARGETED ADVERTISING] Behavioural Advertising As described above, we
  use your Personal Information to provide you with targeted advertisements
  or marketing communications we believe may be of interest to you. For
  example: [INSERT IF APPLICABLE] We use Google Analytics to help us
  understand how our customers use the Site. You can read more about how
  Google uses your Personal Information here:
  https://policies.google.com/privacy?hl=en.You can also opt-out of Google
  Analytics here: https://tools.google.com/dlpage/gaoptout. [INSERT IF YOU
  USE A THIRD PARTY MARKETING APP THAT COLLECTS INFORMATION ABOUT BUYER
  ACTIVITY ON YOUR SITE] We share information about your use of the Site,
  your purchases, and your interaction with our ads on other websites with
  our advertising partners. We collect and share some of this information
  directly with our advertising partners, and in some cases through the use
  of cookies or other similar technologies (which you may consent to,
  depending on your location). [INSERT OTHER ADVERTISING SERVICES USED] For
  more information about how targeted advertising works, you can visit the
  Network Advertising Initiative’s (“NAI”) educational page at
  http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
  You can opt out of targeted advertising by: [INCLUDE OPT-OUT LINKS FROM
  WHICHEVER SERVICES BEING USED. COMMON LINKS INCLUDE: FACEBOOK -
  https://www.facebook.com/settings/?tab=ads GOOGLE -
  https://www.google.com/settings/ads/anonymous BING -
  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads]
  Additionally, you can opt out of some of these services by visiting the
  Digital Advertising Alliance’s opt-out portal at:
  http://optout.aboutads.info/. Using Personal Information We use your
  personal Information to provide our services to you, which includes:
  offering products for sale, processing payments, shipping and fulfillment
  of your order, and keeping you up to date on new products, services, and
  offers. [INCLUDE THE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF
  YOU HAVE CUSTOMERS IN EUROPE] Lawful basis Pursuant to the General Data
  Protection Regulation (“GDPR”), if you are a resident of the European
  Economic Area (“EEA”), we process your personal information under the
  following lawful bases: [INCLUDE ALL THAT APPLY TO YOUR BUSINESS] Your
  consent; The performance of the contract between you and the Site;
  Compliance with our legal obligations; To protect your vital interests; To
  perform a task carried out in the public interest; For our legitimate
  interests, which do not override your fundamental rights and freedoms.
  Retention When you place an order through the Site, we will retain your
  Personal Information for our records unless and until you ask us to erase
  this information. For more information on your right of erasure, please
  see the ‘Your rights’ section below. Automatic decision-making If you are
  a resident of the EEA, you have the right to object to processing based
  solely on automated decision-making (which includes profiling), when that
  decision-making has a legal effect on you or otherwise significantly
  affects you. We [DO/DO NOT] engage in fully automated decision-making that
  has a legal or otherwise significant effect using customer data. Our
  processor Shopify uses limited automated decision-making to prevent fraud
  that does not have a legal or otherwise significant effect on you.
  Services that include elements of automated decision-making include:
  Temporary denylist of IP addresses associated with repeated failed
  transactions. This denylist persists for a small number of hours.
  Temporary denylist of credit cards associated with denylisted IP
  addresses. This denylist persists for a small number of days. [INCLUDE THE
  FOLLOWING SECTION ONLY IF YOU SELL PERSONAL INFORMATION, AS DEFINED BY THE
  CALIFORNIA CONSUMER PRIVACY ACT] Selling Personal Information Our Site
  sells Personal Information, as defined by the California Consumer Privacy
  Act of 2018 (“CCPA”). [INSERT: CATEGORIES OF INFORMATION SOLD;
  INSTRUCTIONS ON HOW TO OPT-OUT OF SALE; WHETHER YOUR BUSINESS SELLS
  INFORMATION OF MINORS (UNDER 16) AND WHETHER YOU OBTAIN AFFIRMATIVE
  AUTHORIZATION; IF YOU PROVIDE A FINANCIAL INCENTIVE TO NOT SELL
  INFORMATION, PROVIDE INFORMATION ABOUT WHAT THAT INCENTIVE IS.] Your
  rights [INCLUDE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU
  HAVE CUSTOMERS IN EUROPE] GDPR If you are a resident of the EEA, you have
  the right to access the Personal Information we hold about you, to port it
  to a new service, and to ask that your Personal Information be corrected,
  updated, or erased. If you would like to exercise these rights, please
  contact us through the contact information below [OR INSERT ALTERNATIVE
  INSTRUCTIONS FOR SENDING ACCESS, ERASURE, CORRECTION, AND PORTABILITY
  REQUESTS]. Your Personal Information will be initially processed in
  Ireland and then will be transferred outside of Europe for storage and
  further processing, including to Canada and the United States. For more
  information on how data transfers comply with the GDPR, see Shopify’s GDPR
  Whitepaper: https://help.shopify.com/en/manual/your-account/privacy/GDPR.
  [INCLUDE FOLLOWING SECTION IF YOUR BUSINESS IS SUBJECT TO THE CALIFORNIA
  CONSUMER PRIVACY ACT] CCPA If you are a resident of California, you have
  the right to access the Personal Information we hold about you (also known
  as the ‘Right to Know’), to port it to a new service, and to ask that your
  Personal Information be corrected, updated, or erased. If you would like
  to exercise these rights, please contact us through the contact
  information below [OR INSERT ALTERNATIVE INSTRUCTIONS FOR SENDING ACCESS,
  ERASURE, CORRECTION, AND PORTABILITY REQUESTS]. If you would like to
  designate an authorized agent to submit these requests on your behalf,
  please contact us at the address below. Cookies A cookie is a small amount
  of information that’s downloaded to your computer or device when you visit
  our Site. We use a number of different cookies, including functional,
  performance, advertising, and social media or content cookies. Cookies
  make your browsing experience better by allowing the website to remember
  your actions and preferences (such as login and region selection). This
  means you don’t have to re-enter this information each time you return to
  the site or browse from one page to another. Cookies also provide
  information on how people use the website, for instance whether it’s their
  first time visiting or if they are a frequent visitor. We use the
  following cookies to optimize your experience on our Site and to provide
  our services. Cookies Necessary for the Functioning of the Store Name
  Function _ab Used in connection with access to admin. _secure_session_id
  Used in connection with navigation through a storefront. cart Used in
  connection with shopping cart. cart_sig Used in connection with checkout.
  cart_ts Used in connection with checkout. checkout_token Used in
  connection with checkout. secret Used in connection with checkout.
  secure_customer_sig Used in connection with customer login.
  storefront_digest Used in connection with customer login. _u Used to
  facilitate updating customer account information. Reporting and Analytics
  Name Function _tracking_consent Tracking preferences. _landing_page Track
  landing pages _orig_referrer Track landing pages _s Shopify analytics. _s
  Shopify analytics. _sa_p Shopify analytics relating to marketing &
  referrals. _sa_t Shopify analytics relating to marketing & referrals. _y
  Shopify analytics. _y Shopify analytics. [INSERT OTHER COOKIES OR TRACKING
  TECHNOLOGIES THAT YOU USE] The length of time that a cookie remains on
  your computer or mobile device depends on whether it is a “persistent” or
  “session” cookie. Session cookies last until you stop browsing and
  persistent cookies last until they expire or are deleted. Most of the
  cookies we use are persistent and will expire between 30 minutes and two
  years from the date they are downloaded to your device. You can control
  and manage cookies in various ways. Please keep in mind that removing or
  blocking cookies can negatively impact your user experience and parts of
  our website may no longer be fully accessible. Most browsers automatically
  accept cookies, but you can choose whether or not to accept cookies
  through your browser controls, often found in your browser’s “Tools” or
  “Preferences” menu. For more information on how to modify your browser
  settings or how to block, manage or filter cookies can be found in your
  browser’s help file or through such sites as www.allaboutcookies.org.
  Additionally, please note that blocking cookies may not completely prevent
  how we share information with third parties such as our advertising
  partners. To exercise your rights or opt-out of certain uses of your
  information by these parties, please follow the instructions in the
  “Behavioural Advertising” section above. Do Not Track Please note that
  because there is no consistent industry understanding of how to respond to
  “Do Not Track” signals, we do not alter our data collection and usage
  practices when we detect such a signal from your browser. Changes We may
  update this Privacy Policy from time to time in order to reflect, for
  example, changes to our practices or for other operational, legal, or
  regulatory reasons. Contact For more information about our privacy
  practices, if you have questions, or if you would like to make a
  complaint, please contact us by e-mail at [email address] or by mail using
  the details provided below: Tunisia, 3100 Tunis , Tunisia Last updated:
  [DATE] If you are not satisfied with our response to your complaint, you
  have the right to lodge your complaint with the relevant data protection
  authority. You can contact your local data protection authority, or our
  supervisory authority here: [ADD CONTACT INFORMATION OR WEBSITE FOR THE
  DATA PROTECTION AUTHORITY IN YOUR JURISDICTION. FOR EXAMPLE:
  https://ico.org.uk/make-a-complaint/]
`,
  },
  {
    id: 4,
    title: "Terms of Service",
    content: `  <span className="text-2xl">OVERVIEW</span> <br />
  This website is operated by ${store_founder}. Throughout the site, the
  terms “we”, “us” and “our” refer to ${store_founder}.${store_founder} offers
  this website, including all information, tools and services available from
  this site to you, the user, conditioned upon your acceptance of all terms,
  conditions, policies and notices stated here. By visiting our site and/ or
  purchasing something from us, you engage in our “Service” and agree to be
  bound by the following terms and conditions (“Terms of Service”, “Terms”),
  including those additional terms and conditions and policies referenced
  herein and/or available by hyperlink. These Terms of Service apply to all
  users of the site, including without limitation users who are browsers,
  vendors, customers, merchants, and/ or contributors of content. Please
  read these Terms of Service carefully before accessing or using our
  website. By accessing or using any part of the site, you agree to be bound
  by these Terms of Service. If you do not agree to all the terms and
  conditions of this agreement, then you may not access the website or use
  any services. If these Terms of Service are considered an offer,
  acceptance is expressly limited to these Terms of Service. Any new
  features or tools which are added to the current store shall also be
  subject to the Terms of Service. You can review the most current version
  of the Terms of Service at any time on this page. We reserve the right to
  update, change or replace any part of these Terms of Service by posting
  updates and/or changes to our website. It is your responsibility to check
  this page periodically for changes. Your continued use of or access to the
  website following the posting of any changes constitutes acceptance of
  those changes. Our store is hosted on Shopify Inc. They provide us with
  the online e-commerce platform that allows us to sell our products and
  services to you. SECTION 1 - ONLINE STORE TERMS By agreeing to these Terms
  of Service, you represent that you are at least the age of majority in
  your state or province of residence, or that you are the age of majority
  in your state or province of residence and you have given us your consent
  to allow any of your minor dependents to use this site. You may not use
  our products for any illegal or unauthorized purpose nor may you, in the
  use of the Service, violate any laws in your jurisdiction (including but
  not limited to copyright laws). You must not transmit any worms or viruses
  or any code of a destructive nature. A breach or violation of any of the
  Terms will result in an immediate termination of your Services. SECTION 2
  - GENERAL CONDITIONS We reserve the right to refuse service to anyone for
  any reason at any time. You understand that your content (not including
  credit card information), may be transferred unencrypted and involve (a)
  transmissions over various networks; and (b) changes to conform and adapt
  to technical requirements of connecting networks or devices. Credit card
  information is always encrypted during transfer over networks. You agree
  not to reproduce, duplicate, copy, sell, resell or exploit any portion of
  the Service, use of the Service, or access to the Service or any contact
  on the website through which the service is provided, without express
  written permission by us. The headings used in this agreement are included
  for convenience only and will not limit or otherwise affect these Terms.
  SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION We are
  not responsible if information made available on this site is not
  accurate, complete or current. The material on this site is provided for
  general information only and should not be relied upon or used as the sole
  basis for making decisions without consulting primary, more accurate, more
  complete or more timely sources of information. Any reliance on the
  material on this site is at your own risk. This site may contain certain
  historical information. Historical information, necessarily, is not
  current and is provided for your reference only. We reserve the right to
  modify the contents of this site at any time, but we have no obligation to
  update any information on our site. You agree that it is your
  responsibility to monitor changes to our site. SECTION 4 - MODIFICATIONS
  TO THE SERVICE AND PRICES Prices for our products are subject to change
  without notice. We reserve the right at any time to modify or discontinue
  the Service (or any part or content thereof) without notice at any time.
  We shall not be liable to you or to any third-party for any modification,
  price change, suspension or discontinuance of the Service. SECTION 5 -
  PRODUCTS OR SERVICES (if applicable) Certain products or services may be
  available exclusively online through the website. These products or
  services may have limited quantities and are subject to return or exchange
  only according to our Return Policy. We have made every effort to display
  as accurately as possible the colors and images of our products that
  appear at the store. We cannot guarantee that your computer monitor's
  display of any color will be accurate. We reserve the right, but are not
  obligated, to limit the sales of our products or Services to any person,
  geographic region or jurisdiction. We may exercise this right on a
  case-by-case basis. We reserve the right to limit the quantities of any
  products or services that we offer. All descriptions of products or
  product pricing are subject to change at anytime without notice, at the
  sole discretion of us. We reserve the right to discontinue any product at
  any time. Any offer for any product or service made on this site is void
  where prohibited. We do not warrant that the quality of any products,
  services, information, or other material purchased or obtained by you will
  meet your expectations, or that any errors in the Service will be
  corrected. SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION We
  reserve the right to refuse any order you place with us. We may, in our
  sole discretion, limit or cancel quantities purchased per person, per
  household or per order. These restrictions may include orders placed by or
  under the same customer account, the same credit card, and/or orders that
  use the same billing and/or shipping address. In the event that we make a
  change to or cancel an order, we may attempt to notify you by contacting
  the e‑mail and/or billing address/phone number provided at the time the
  order was made. We reserve the right to limit or prohibit orders that, in
  our sole judgment, appear to be placed by dealers, resellers or
  distributors. You agree to provide current, complete and accurate purchase
  and account information for all purchases made at our store. You agree to
  promptly update your account and other information, including your email
  address and credit card numbers and expiration dates, so that we can
  complete your transactions and contact you as needed. For more detail,
  please review our Returns Policy. SECTION 7 - OPTIONAL TOOLS We may
  provide you with access to third-party tools over which we neither monitor
  nor have any control nor input. You acknowledge and agree that we provide
  access to such tools ”as is” and “as available” without any warranties,
  representations or conditions of any kind and without any endorsement. We
  shall have no liability whatsoever arising from or relating to your use of
  optional third-party tools. Any use by you of optional tools offered
  through the site is entirely at your own risk and discretion and you
  should ensure that you are familiar with and approve of the terms on which
  tools are provided by the relevant third-party provider(s). We may also,
  in the future, offer new services and/or features through the website
  (including, the release of new tools and resources). Such new features
  and/or services shall also be subject to these Terms of Service. SECTION 8
  - THIRD-PARTY LINKS Certain content, products and services available via
  our Service may include materials from third-parties. Third-party links on
  this site may direct you to third-party websites that are not affiliated
  with us. We are not responsible for examining or evaluating the content or
  accuracy and we do not warrant and will not have any liability or
  responsibility for any third-party materials or websites, or for any other
  materials, products, or services of third-parties. We are not liable for
  any harm or damages related to the purchase or use of goods, services,
  resources, content, or any other transactions made in connection with any
  third-party websites. Please review carefully the third-party's policies
  and practices and make sure you understand them before you engage in any
  transaction. Complaints, claims, concerns, or questions regarding
  third-party products should be directed to the third-party. SECTION 9 -
  USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS If, at our request, you send
  certain specific submissions (for example contest entries) or without a
  request from us you send creative ideas, suggestions, proposals, plans, or
  other materials, whether online, by email, by postal mail, or otherwise
  (collectively, 'comments'), you agree that we may, at any time, without
  restriction, edit, copy, publish, distribute, translate and otherwise use
  in any medium any comments that you forward to us. We are and shall be
  under no obligation (1) to maintain any comments in confidence; (2) to pay
  compensation for any comments; or (3) to respond to any comments. We may,
  but have no obligation to, monitor, edit or remove content that we
  determine in our sole discretion are unlawful, offensive, threatening,
  libelous, defamatory, pornographic, obscene or otherwise objectionable or
  violates any party’s intellectual property or these Terms of Service. You
  agree that your comments will not violate any right of any third-party,
  including copyright, trademark, privacy, personality or other personal or
  proprietary right. You further agree that your comments will not contain
  libelous or otherwise unlawful, abusive or obscene material, or contain
  any computer virus or other malware that could in any way affect the
  operation of the Service or any related website. You may not use a false
  e‑mail address, pretend to be someone other than yourself, or otherwise
  mislead us or third-parties as to the origin of any comments. You are
  solely responsible for any comments you make and their accuracy. We take
  no responsibility and assume no liability for any comments posted by you
  or any third-party. SECTION 10 - PERSONAL INFORMATION Your submission of
  personal information through the store is governed by our Privacy Policy.
  To view our Privacy Policy. SECTION 11 - ERRORS, INACCURACIES AND
  OMISSIONS Occasionally there may be information on our site or in the
  Service that contains typographical errors, inaccuracies or omissions that
  may relate to product descriptions, pricing, promotions, offers, product
  shipping charges, transit times and availability. We reserve the right to
  correct any errors, inaccuracies or omissions, and to change or update
  information or cancel orders if any information in the Service or on any
  related website is inaccurate at any time without prior notice (including
  after you have submitted your order). We undertake no obligation to
  update, amend or clarify information in the Service or on any related
  website, including without limitation, pricing information, except as
  required by law. No specified update or refresh date applied in the
  Service or on any related website, should be taken to indicate that all
  information in the Service or on any related website has been modified or
  updated. SECTION 12 - PROHIBITED USES In addition to other prohibitions as
  set forth in the Terms of Service, you are prohibited from using the site
  or its content: (a) for any unlawful purpose; (b) to solicit others to
  perform or participate in any unlawful acts; (c) to violate any
  international, federal, provincial or state regulations, rules, laws, or
  local ordinances; (d) to infringe upon or violate our intellectual
  property rights or the intellectual property rights of others; (e) to
  harass, abuse, insult, harm, defame, slander, disparage, intimidate, or
  discriminate based on gender, sexual orientation, religion, ethnicity,
  race, age, national origin, or disability; (f) to submit false or
  misleading information; (g) to upload or transmit viruses or any other
  type of malicious code that will or may be used in any way that will
  affect the functionality or operation of the Service or of any related
  website, other websites, or the Internet; (h) to collect or track the
  personal information of others; (i) to spam, phish, pharm, pretext,
  spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k)
  to interfere with or circumvent the security features of the Service or
  any related website, other websites, or the Internet. We reserve the right
  to terminate your use of the Service or any related website for violating
  any of the prohibited uses. SECTION 13 - DISCLAIMER OF WARRANTIES;
  LIMITATION OF LIABILITY We do not guarantee, represent or warrant that
  your use of our service will be uninterrupted, timely, secure or
  error-free. We do not warrant that the results that may be obtained from
  the use of the service will be accurate or reliable. You agree that from
  time to time we may remove the service for indefinite periods of time or
  cancel the service at any time, without notice to you. You expressly agree
  that your use of, or inability to use, the service is at your sole risk.
  The service and all products and services delivered to you through the
  service are (except as expressly stated by us) provided 'as is' and 'as
  available' for your use, without any representation, warranties or
  conditions of any kind, either express or implied, including all implied
  warranties or conditions of merchantability, merchantable quality, fitness
  for a particular purpose, durability, title, and non-infringement. In no
  case shall ${store_founder}, our directors, officers, employees,
  affiliates, agents, contractors, interns, suppliers, service providers or
  licensors be liable for any injury, loss, claim, or any direct, indirect,
  incidental, punitive, special, or consequential damages of any kind,
  including, without limitation lost profits, lost revenue, lost savings,
  loss of data, replacement costs, or any similar damages, whether based in
  contract, tort (including negligence), strict liability or otherwise,
  arising from your use of any of the service or any products procured using
  the service, or for any other claim related in any way to your use of the
  service or any product, including, but not limited to, any errors or
  omissions in any content, or any loss or damage of any kind incurred as a
  result of the use of the service or any content (or product) posted,
  transmitted, or otherwise made available via the service, even if advised
  of their possibility. Because some states or jurisdictions do not allow
  the exclusion or the limitation of liability for consequential or
  incidental damages, in such states or jurisdictions, our liability shall
  be limited to the maximum extent permitted by law. SECTION 14 -
  INDEMNIFICATION You agree to indemnify, defend and hold harmless{" "}
  ${store_founder} and our parent, subsidiaries, affiliates, partners,
  officers, directors, agents, contractors, licensors, service providers,
  subcontractors, suppliers, interns and employees, harmless from any claim
  or demand, including reasonable attorneys’ fees, made by any third-party
  due to or arising out of your breach of these Terms of Service or the
  documents they incorporate by reference, or your violation of any law or
  the rights of a third-party. SECTION 15 - SEVERABILITY In the event that
  any provision of these Terms of Service is determined to be unlawful, void
  or unenforceable, such provision shall nonetheless be enforceable to the
  fullest extent permitted by applicable law, and the unenforceable portion
  shall be deemed to be severed from these Terms of Service, such
  determination shall not affect the validity and enforceability of any
  other remaining provisions. SECTION 16 - TERMINATION The obligations and
  liabilities of the parties incurred prior to the termination date shall
  survive the termination of this agreement for all purposes. These Terms of
  Service are effective unless and until terminated by either you or us. You
  may terminate these Terms of Service at any time by notifying us that you
  no longer wish to use our Services, or when you cease using our site. If
  in our sole judgment you fail, or we suspect that you have failed, to
  comply with any term or provision of these Terms of Service, we also may
  terminate this agreement at any time without notice and you will remain
  liable for all amounts due up to and including the date of termination;
  and/or accordingly may deny you access to our Services (or any part
  thereof). SECTION 17 - ENTIRE AGREEMENT The failure of us to exercise or
  enforce any right or provision of these Terms of Service shall not
  constitute a waiver of such right or provision. These Terms of Service and
  any policies or operating rules posted by us on this site or in respect to
  The Service constitutes the entire agreement and understanding between you
  and us and govern your use of the Service, superseding any prior or
  contemporaneous agreements, communications and proposals, whether oral or
  written, between you and us (including, but not limited to, any prior
  versions of the Terms of Service). Any ambiguities in the interpretation
  of these Terms of Service shall not be construed against the drafting
  party. SECTION 18 - GOVERNING LAW These Terms of Service and any separate
  agreements whereby we provide you Services shall be governed by and
  construed in accordance with the laws of Tunisia. SECTION 19 - CHANGES TO
  TERMS OF SERVICE You can review the most current version of the Terms of
  Service at any time at this page. We reserve the right, at our sole
  discretion, to update, change or replace any part of these Terms of
  Service by posting updates and changes to our website. It is your
  responsibility to check our website periodically for changes. Your
  continued use of or access to our website or the Service following the
  posting of any changes to these Terms of Service constitutes acceptance of
  those changes. SECTION 20 - CONTACT INFORMATION`,
  },
];

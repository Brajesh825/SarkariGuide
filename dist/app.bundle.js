(()=>{var e={827:(e,t,n)=>{"use strict";var i=n(302);e.exports=h;var a,o,r="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",s="undefined"!=typeof window&&(window.history.location||window.location),d=!0,c=!0,l="",p=!1;function h(e,t){if("function"==typeof e)return h("*",e);if("function"==typeof t)for(var n=new f(e),i=1;i<arguments.length;++i)h.callbacks.push(n.middleware(arguments[i]));else"string"==typeof e?h["string"==typeof t?"redirect":"show"](e,t):h.start(e)}function u(e){return"string"!=typeof e?e:c?decodeURIComponent(e.replace(/\+/g," ")):e}function m(e,t){"/"===e[0]&&0!==e.indexOf(l)&&(e=l+(p?"#!":"")+e);var n=e.indexOf("?");if(this.canonicalPath=e,this.path=e.replace(l,"")||"/",p&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=t||{},this.state.path=e,this.querystring=~n?u(e.slice(n+1)):"",this.pathname=u(~n?e.slice(0,n):e),this.params={},this.hash="",!p){if(!~this.path.indexOf("#"))return;var i=this.path.split("#");this.path=i[0],this.hash=u(i[1])||"",this.querystring=this.querystring.split("#")[0]}}function f(e,t){t=t||{},this.path=e,this.method="GET",this.regexp=i(this.path,this.keys=[],t.sensitive,t.strict)}h.callbacks=[],h.exits=[],h.current="",h.len=0,h.base=function(e){if(0===arguments.length)return l;l=e},h.start=function(e){if(e=e||{},!a&&(a=!0,!1===e.dispatch&&(d=!1),!1===e.decodeURLComponents&&(c=!1),!1!==e.popstate&&window.addEventListener("popstate",g,!1),!1!==e.click&&document.addEventListener(r,v,!1),!0===e.hashbang&&(p=!0),d)){var t=p&&~s.hash.indexOf("#!")?s.hash.substr(2)+s.search:s.pathname+s.search+s.hash;h.replace(t,null,!0,d)}},h.stop=function(){a&&(h.current="",h.len=0,a=!1,document.removeEventListener(r,v,!1),window.removeEventListener("popstate",g,!1))},h.show=function(e,t,n,i){var a=new m(e,t);return h.current=a.path,!1!==n&&h.dispatch(a),!1!==a.handled&&!1!==i&&a.pushState(),a},h.back=function(e,t){h.len>0?(history.back(),h.len--):e?setTimeout((function(){h.show(e,t)})):setTimeout((function(){h.show(l,t)}))},h.redirect=function(e,t){"string"==typeof e&&"string"==typeof t&&h(e,(function(e){setTimeout((function(){h.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){h.replace(e)}),0)},h.replace=function(e,t,n,i){var a=new m(e,t);return h.current=a.path,a.init=n,a.save(),!1!==i&&h.dispatch(a),a},h.dispatch=function(e){var t=o,n=0,i=0;function a(){var t=h.callbacks[n++];if(e.path===h.current)return t?void t(e,a):function(e){e.handled||(p?l+s.hash.replace("#!",""):s.pathname+s.search)!==e.canonicalPath&&(h.stop(),e.handled=!1,s.href=e.canonicalPath)}(e);e.handled=!1}o=e,t?function e(){var n=h.exits[i++];if(!n)return a();n(t,e)}():a()},h.exit=function(e,t){if("function"==typeof e)return h.exit("*",e);for(var n=new f(e),i=1;i<arguments.length;++i)h.exits.push(n.middleware(arguments[i]))},h.Context=m,m.prototype.pushState=function(){h.len++,history.pushState(this.state,this.title,p&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},m.prototype.save=function(){history.replaceState(this.state,this.title,p&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},h.Route=f,f.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return e(n,i);i()}},f.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),a=~i?e.slice(0,i):e,o=this.regexp.exec(decodeURIComponent(a));if(!o)return!1;for(var r=1,s=o.length;r<s;++r){var d=n[r-1];if(d){var c=u(o[r]);void 0===c&&hasOwnProperty.call(t,d.name)||(t[d.name]=c)}}return!0};var g=function(){var e=!1;if("undefined"!=typeof window)return"complete"===document.readyState?e=!0:window.addEventListener("load",(function(){setTimeout((function(){e=!0}),0)})),function(t){if(e)if(t.state){var n=t.state.path;h.replace(n,t.state)}else h.show(s.pathname+s.hash,void 0,void 0,!1)}}();function v(e){if(1===function(e){return null===(e=e||window.event).which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!==t.nodeName;)t=t.parentNode;if(t&&"A"===t.nodeName&&!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var n=t.getAttribute("href");if((p||t.pathname!==s.pathname||!t.hash&&"#"!==n)&&!(n&&n.indexOf("mailto:")>-1)&&!t.target&&y(t.href)){var i=t.pathname+t.search+(t.hash||"");"undefined"!=typeof process&&i.match(/^\/[a-zA-Z]:\//)&&(i=i.replace(/^\/[a-zA-Z]:\//,"/"));var a=i;0===i.indexOf(l)&&(i=i.substr(l.length)),p&&(i=i.replace("#!","")),l&&a===i||(e.preventDefault(),h.show(a))}}}}function y(e){var t=s.protocol+"//"+s.hostname;return s.port&&(t+=":"+s.port),e&&0===e.indexOf(t)}h.sameOrigin=y},302:e=>{e.exports=function e(n,i,a){i=i||[];var o,r=(a=a||{}).strict,s=!1!==a.end,d=a.sensitive?"":"i",c=0,l=i.length,p=0,h=0;if(n instanceof RegExp){for(;o=t.exec(n.source);)i.push({name:h++,optional:!1,offset:o.index});return n}if(Array.isArray(n))return n=n.map((function(t){return e(t,i,a).source})),new RegExp("(?:"+n.join("|")+")",d);for(n=("^"+n+(r?"":"/"===n[n.length-1]?"?":"/?")).replace(/\/\(/g,"/(?:").replace(/([\/\.])/g,"\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g,(function(e,t,n,a,o,r,s,d){t=t||"",n=n||"",o=o||"([^\\/"+n+"]+?)",s=s||"",i.push({name:a,optional:!!s,offset:d+c});var l=(s?"":t)+"(?:"+n+(s?t:"")+o+(r?"((?:[\\/"+n+"].+?)?)":"")+")"+s;return c+=l.length-e.length,l})).replace(/\*/g,(function(e,t){for(var n=i.length;n-- >l&&i[n].offset>t;)i[n].offset+=3;return"(.*)"}));o=t.exec(n);){for(var u=0,m=o.index;"\\"===n.charAt(--m);)u++;u%2!=1&&((l+p===i.length||i[l+p].offset>o.index)&&i.splice(l+p,0,{name:h++,optional:!1,offset:o.index}),p++)}return n+=s?"$":"/"===n[n.length-1]?"":"(?=\\/|$)",new RegExp(n,d)};var t=/\((?!\?)/g}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(827),t=n.n(e);const i=({links:e,logoSrc:t})=>{const n=document.createElement("nav"),i=document.createElement("ul");e.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.href=e.href,n.textContent=e.text,t.appendChild(n),i.appendChild(t)}));const a=document.createElement("img");a.src=t,a.alt="Logo";const o=document.createElement("div");return o.className="hamburger",o.innerHTML="&#9776;",o.addEventListener("click",(()=>{i.style.display="block"===i.style.display?"none":"block"})),n.appendChild(a),n.appendChild(i),n.appendChild(o),n},a=({welcomeData:e})=>{const{title:t,subtitle:n,logoSrc:i}=e,a=document.createElement("div");a.classList.add("welcome-container");const o=document.createElement("div");o.classList.add("left-side");const r=document.createElement("h1");r.textContent=t;const s=document.createElement("p");s.textContent=n,o.appendChild(r),o.appendChild(s);const d=document.createElement("div");d.classList.add("right-side");const c=document.createElement("img");return c.src=i,c.alt="Logo",d.appendChild(c),a.appendChild(o),a.appendChild(d),a},o=({whyUsData:e})=>{const{title:t,description:n}=e,i=document.createElement("div");i.classList.add("why-us-container");const a=document.createElement("h2");a.classList.add("why-us-title"),a.textContent=t;const o=document.createElement("p");return o.classList.add("why-us-description"),o.textContent=n,i.appendChild(a),i.appendChild(o),i},r=({cardData:e,cardTitle:t})=>{const n=document.createElement("div");n.classList.add("booking-list-container");const i=document.createElement("h2");i.textContent=t,i.classList.add("heading"),n.appendChild(i);const a=document.createElement("div");return a.classList.add("booking-list"),e.forEach((e=>{const t=(e=>{const{title:t,subtitle:n,description:i,imageUrl:a,link:o}=e,r=document.createElement("div");r.classList.add("card");const s=document.createElement("img");s.src=a,s.alt=t,s.classList.add("card-image"),r.appendChild(s);const d=document.createElement("div");d.classList.add("card-content");const c=document.createElement("h2");c.textContent=t,c.classList.add("card-title"),d.appendChild(c);const l=document.createElement("h3");l.textContent=n,l.classList.add("card-subtitle"),d.appendChild(l);const p=document.createElement("p");p.textContent=i,p.classList.add("card-description"),d.appendChild(p);const h=document.createElement("a");return h.href=o,h.textContent="Learn More",h.classList.add("card-link"),d.appendChild(h),r.appendChild(d),r})(e);a.appendChild(t)})),n.appendChild(a),n},s=({title:e,description:t})=>{const n=document.createElement("div");n.classList.add("trust-container");const i=document.createElement("h2");i.textContent=e,i.classList.add("trust-title"),n.appendChild(i);const a=document.createElement("p");return a.textContent=t,a.classList.add("trust-description"),n.appendChild(a),n},d=({benefits:e})=>{const t=document.createElement("div");t.classList.add("benefit-section");const n=document.createElement("h2");n.textContent="Benefits Of Choosing Us";const i=document.createElement("div");return i.classList.add("benefit-cards"),e.forEach((e=>{const t=document.createElement("div");t.classList.add("benefit-card");const n=document.createElement("h3");n.textContent=e.title;const a=document.createElement("p");a.textContent=e.description,t.appendChild(n),t.appendChild(a),i.appendChild(t)})),t.appendChild(n),t.appendChild(i),t},c=({logoSrc:e})=>{const t=document.createElement("footer");t.classList.add("footer");const n=document.createElement("div");n.classList.add("footer-left");const i=document.createElement("img");i.src=e,i.alt="Logo",n.appendChild(i);const a=document.createElement("div");a.classList.add("footer-right");const o=document.createElement("p");return o.textContent="All Rights Reserved",a.appendChild(o),t.appendChild(n),t.appendChild(a),t},l=[{text:"Book Driving License",href:"/blog/driving-license"},{text:"Book PAN Card",href:"/blog/pan"},{text:"Book HSRP",href:"/blog/hsrp"},{text:"Book Aadhar Card",href:"/blog/aadhaar-card"}],p={title:"Welcome to Sarkari Guidance!",subtitle:"Your Only Gateway to Seamless Access to Indian Government Services And Schemes At One Single Place.",logoSrc:"/image/india.jpg"},h={title:"WHY US?",description:"At Sarkari Guidance, we understand the importance of easy access to government services. Our platform is designed to simplify the process of finding, understanding, and applying for various services provided by the Indian government. Whether you are looking for information on passports, PAN cards, Aadhaar, or other essential services, we’ve got you covered."},u=[{title:"Aadhar Card",subtitle:"How to book Aadhar Card",description:"Step By Step Guide To Book Aadhar Card",imageUrl:"/image/aadhaar.png",link:"/blog/aadhaar-card"},{title:"PAN Card",subtitle:"How to book PAN Card",description:"Step By Step Guide To Book PAN Card",imageUrl:"/image/pan.jpg",link:"/blog/pan"},{title:"HSRP Plate",subtitle:"H.S.R.P. Plate",description:"Step By Step Guide To Book H.S.R.P. Plate",imageUrl:"/image/hsrp.jpg",link:"/blog/pan"},{title:"Driving License",subtitle:"How to book Driving License",description:"Step By Step Guide To Book Driving License",imageUrl:"/image/dl.jpg",link:"/blog/driving-license"}],m="Your 100% Trust Buddy",f="Empower yourself with the knowledge and tools needed to access Government services effortlessly. Sarkari Guidance is here to guide you every step of the way. Take the first step towards a smoother, stress-free experience in availing government services.",g=[{title:"User-Friendly Interface",description:"Navigating government websites can be challenging. We've simplified the process with an intuitive and user-friendly interface, making it easy for you to find the services you need."},{title:"e-Governance Services",description:"The website may offer a range of e-governance services, allowing citizens to access and submit various forms online. This could include services related to income tax filings, property tax payments, utility bill payments, and other administrative processes, making it more convenient for the public."},{title:"Application Assistance",description:"We guide you through the application process, offering tips and insights to ensure that your submissions are accurate and complete. Our goal is to streamline the process and minimize the chances of errors."},{title:"Updates and Notifications",description:"Stay informed with updates and notifications. We keep you updated on any changes or important information regarding the services you are interested in."}],v={"aadhaar-card":{guide:{title:"Guide To Book Aadhaar",steps:[{text:"Visit the page ",link:{href:"https://appointments.uidai.gov.in/bookappointment.aspx",text:"https://appointments.uidai.gov.in/bookappointment.aspx"}},{text:"Select the centre name and click Proceed to book appointment."},{text:"Choose the service you want to access – New Aadhaar or Aadhaar update"},{text:"Fill your mobile number and enter Captcha and submit. Enter the OTP generated to your mobile."},{text:"On successful authentication of your mobile, a form to fill in the required details is displayed. Fill the required details and submit the form."},{text:"You can manage the appointment details (date and time) by visiting the Manage appointment tab."},{text:"Appointment booking at Registrar run Aadhaar Seva Kendra:"},{text:"You need to do one-time registration with your mobile number."},{text:"Enter the OTP generated and sent to your mobile number for authentication."},{text:"On successful authentication, you will be directed to fill the form for booking."}]},heading:{title:"Step By Step Guide For Booking Aadhaar Card",image:"/image/aadhaar.png"},charges:{services:[{service:"Aadhaar Enrolment",charge:"FREE"},{service:"Mandatory Biometric update for kids (at age 5 and 15 years)",charge:"FREE"},{service:"Any Biometric update with or without Demographic Update",charge:"Rs 100"},{service:"Only Demographic update by residents",charge:"Rs. 50"},{service:"Download Aadhaar & Coloured Print",charge:"Rs. 30"},{service:"Name Update",charge:"Rs. 50"},{service:"Address Update",charge:"Rs. 50"},{service:"Mobile No. Update",charge:"Rs. 50"},{service:"Email ID Update",charge:"Rs. 50"},{service:"Date of Birth Update",charge:"Rs. 50"},{service:"Gender Update",charge:"Rs. 50"},{service:"(Photo + Fingerprints + Iris) Update",charge:"Rs. 100"}],note:"* Update of more than one field on single instance will be considered as one update."}},"driving-license":{guide:{title:"Guide to Book Driving License",steps:[{text:"Visit the website ",link:{href:"https://dlparivahan.in/",text:"https://dlparivahan.in/"}},{text:"Click the “Book Here” button above or visit the provided website."},{text:"Complete the online form with your personal details and required information."},{text:"Click “Submit” to send your application."},{text:"Select the type of vehicle for which you are applying for a driving license."},{text:"Proceed to pay the required fee by scanning the QR code or using the provided payment methods."},{text:"Confirm that the payment has been completed."}]},heading:{title:"Step By Step Guide For Booking Driving License",image:"/image/dl.jpg"}},hsrp:{guide:{title:"Guide to Order HSRP Number Plates",steps:[{text:"Select your HSRP by clicking ",link:{href:"https://parivahan.gov.in/",text:"Book Now"}},{text:"Visit the official website at ",link:{href:"https://parivahan.gov.in/",text:"https://parivahan.gov.in/"}},{text:"Complete the form."},{text:"Enter the chassis number OR the engine number, but only the last five digits, in the corresponding text box."},{text:"Click “Submit” once the form has been filled out."},{text:"Select the type of license plate."},{text:"Pay the amount due by scanning the QR code."},{text:"Select “Payment Completed.”"}]},heading:{title:"Step By Step Guide For Booking HSRP",image:"/image/hsrp.jpg"},benefits:{title:"Benefits of HSRP",benefits:["Tamper-Proof Planning","Secure Materials","Unique Identification Numbers","Security Screws","Enhanced Visibility and Legibility","Standardization and Compliance","Effective Vehicle Tracking and Monitoring","Deterrent to Vehicle-Related Crimes","Streamlined Registration Processes","Global Recognition and Compatibility"],additional_info:"Governments employ HSRPs to reduce car-related crimes, simplify vehicle registration procedures, and enhance road safety."},services:{title:"Our Services",services:[{name:"Enhanced Security",description:"The unique identification system allows authorities to easily verify the authenticity of any vehicle and track it down if stolen or involved in illegal activities, contributing to improved overall security."},{name:"Efficient Law Enforcement",description:"Standardized plate design and the central database linkage enable swift identification of vehicles involved in traffic violations or crimes, aiding law enforcement agencies in apprehending offenders and upholding law and order."},{name:"Centralized Vehicle Data Management",description:"HSRPs contribute to building a comprehensive database of vehicle information, including registration details, chassis and engine numbers, and ownership records. This facilitates efficient vehicle registration management, tracking stolen vehicles, and streamlining various administrative processes."},{name:"Theft Deterrence",description:"HSRPs are tamper-proof with unique identification features (number, hologram, hot stamping) and non-reusable security locks, making them difficult to remove and replicate, discouraging theft."}]}},pan:{guide:{title:"Guide to Apply for PAN Card",steps:[{text:"Apply for PAN Card through NSDL"},{text:"Visit the official website of NSDL by clicking on ",link:{href:"https://www.onlineservices.nsdl.com",text:"https://www.onlineservices.nsdl.com"}},{text:"Click on ‘Application Type’ on the next screen"},{text:"Choose the type of application you want to submit – Form 49A for Indian citizens or Form 49AA for NRIs"},{text:"Select a category from the drop-down menu"},{text:"Fill in your personal information carefully"},{text:"Choose your title (Shri, Smt, or Kumari) and enter your last name/surname, first name, and middle name (if applicable)"},{text:"Select your date of birth or incorporation/formation date in the format shown – DD/MM/YY"},{text:"Provide your current email address and mobile number"},{text:"Tick mark on the guidelines and submit your application after entering the CAPTCHA code"},{text:"Pay the application fee of Rs. 93 (or Rs. 864 for Form 49AA) using a credit card, debit card, net banking, check, or DD"},{text:"After submitting the application, you will receive an acknowledgement number page. Take a printout and keep it for future reference"},{text:"Affix a passport-sized photograph on the acknowledgement paper, sign it with a black pen and mail it to the Income Tax Department with your supporting documents within 15 days of the online application"},{text:"Once your documents are validated, your PAN card number will be sent to your registered email address and mobile number."}]},heading:{title:"Step By Step Guide For PAN Card ",image:"/image/pan.jpg"},benefits:{title:"Benefits of PAN",benefits:["Proof of Identity","Proof of Address","Mandatory for Filing Taxes","Registration of Business","Financial transactions","Eligibility to open and operate Bank Accounts","Phone Connection","Gas Connection","Mutual Fund – PAN is beneficial to complete e-KYC for mutual fund investments."],additionalInfo:""}}};function y(){const e=document.getElementById("root");return e.innerHTML="",e}t()("/",(()=>{const e=y();[i({links:l}),a({welcomeData:p}),o({whyUsData:h}),r({cardData:u,cardTitle:"Want To Know How to Book"}),s({title:m,description:f}),d({benefits:g}),c({})].forEach((t=>e.appendChild(t)))})),t()("/blog/:blogId",(({params:e})=>{const t=y(),{blogId:n}=e,a=v[n],o=i({links:l}),r=function({title:e,image:t}){const n=document.createElement("div");n.classList.add("blog-heading");const i=document.createElement("h1");if(i.classList.add("blog-heading-title"),i.textContent=e,n.appendChild(i),t){const i=document.createElement("img");i.classList.add("blog-heading-image"),i.src=t,i.alt=e+" Image",n.appendChild(i)}return n}(a.heading),s=function({title:e,steps:t}){const n=document.createElement("div");n.classList.add("guide");const i=document.createElement("h2");i.classList.add("guide-title"),i.textContent=e;const a=document.createElement("ol");return a.classList.add("steps-list"),t.forEach(((e,t)=>{const n=document.createElement("li");if(n.classList.add("step-item"),e.text&&e.link){const t=document.createElement("a");t.href=e.link.href,t.textContent=e.link.text,n.textContent=e.text,n.appendChild(t)}else n.textContent=e.text;a.appendChild(n)})),n.appendChild(i),n.appendChild(a),n}({title:a.guide.title,steps:a.guide.steps});t.appendChild(o),t.appendChild(r),t.appendChild(s),a.charges&&t.appendChild(function({charges:e}){const t=document.createElement("div");t.classList.add("charges");const n=document.createElement("h2");n.classList.add("charges-title"),n.textContent="Charges for Aadhaar Services";const i=document.createElement("ul");i.classList.add("services-list"),e.services.forEach((e=>{const t=document.createElement("li");t.classList.add("service-item");const n=document.createElement("span");n.classList.add("service-description"),n.textContent=e.service+": ";const a=document.createElement("span");a.classList.add("service-charge"),a.textContent=e.charge,t.appendChild(n),t.appendChild(a),i.appendChild(t)}));const a=document.createElement("p");return a.classList.add("note"),a.textContent=e.note,t.appendChild(n),t.appendChild(i),t.appendChild(a),t}({charges:a.charges})),a.benefits&&t.appendChild(function(e){console.log(e);const{title:t,benefits:n,additionalInfo:i}=e,a=document.createElement("div");a.classList.add("benefit");const o=document.createElement("h2");o.classList.add("benefit-title"),o.textContent=t;const r=document.createElement("ul");r.classList.add("benefit-list"),n.forEach((e=>{const t=document.createElement("li");t.classList.add("benefit-item"),t.textContent=e,r.appendChild(t)}));const s=document.createElement("p");return s.classList.add("benefit-additional-info"),s.textContent=i,a.appendChild(o),a.appendChild(r),a.appendChild(s),a}(a.benefits)),a.services&&t.appendChild(function(e){const t=document.createElement("div");t.classList.add("blog-service-container");const n=document.createElement("h2");n.textContent=e.title,t.appendChild(n);const i=document.createElement("div");return i.classList.add("blog-service"),e.services.forEach((e=>{const t=document.createElement("div");t.classList.add("blog-service-item");const n=document.createElement("h3");n.textContent=e.name;const a=document.createElement("p");a.textContent=e.description,t.appendChild(n),t.appendChild(a),i.appendChild(t)})),t.appendChild(i),t}(a.services)),t.appendChild(c({}))})),t().start()})()})();
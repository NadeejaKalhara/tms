/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

const firebaseConfig = {
  apiKey: "AIzaSyBqyIlDoEYX4u03OkqpSyPOnVqu23nJwQk",
  authDomain: "aduruthuma-lms.firebaseapp.com",
  databaseURL: "https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aduruthuma-lms",
  storageBucket: "aduruthuma-lms.appspot.com",
  messagingSenderId: "693308965378",
  appId: "1:693308965378:web:a5091550d3e86d83269d1b"
};

firebase.initializeApp(firebaseConfig);


// STDB
		
var   st =  firebase.initializeApp({
  apiKey: "AIzaSyBmfqwCQUXEPYFTBiEiYUwqjTjtF03jz2k",
  authDomain: "aduruthuma.firebaseapp.com",
  databaseURL: "https://aduruthuma-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aduruthuma",
  storageBucket: "aduruthuma.appspot.com",
  messagingSenderId: "986959099612",
  appId: "1:986959099612:web:6974f183d46ecd1e582619",
  measurementId: "G-W8JKX9LRXG"
}, 'secondary');
st.auth().onAuthStateChanged((user) => {
	if(user){

	} else {
		console.log('signOut')
		Swal.fire({
			icon:"warning",
			title:"Additional Verification Required!",
			html:'<button class="btn btn-dark" onclick="opengo()"> <span style="font-size:15px ;"><i class="bx bxl-google "></i></span> Sign with Google</button>',
			showConfirmButton:false,
			allowEscapeKey:false,
			allowOutsideClick:false,
			allowEnterKey:false
		})
	}
})

function opengo(){
	var provider = new firebase.auth.GoogleAuthProvider();
  st.auth().useDeviceLanguage();
  provider.setCustomParameters({
  'allow_signup': 'false'
});
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

  st.auth()
  .signInWithPopup(provider)
  .then((result) => {
location.reload()
    /** @type {firebase.auth.OAuthCredential} */

    
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;})
}
		

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
    'YOUR_OAUTH_CLIENT_ID';

// 建立firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAnlSEuDJki22BJmztCDvq7GJyUM-mEUmA',
  authDomain: 'project-697c5.firebaseapp.com',
  databaseURL: 'https://project-697c5-default-rtdb.firebaseio.com',
  projectId: 'project-697c5',
  storageBucket: 'project-697c5.appspot.com',
  messagingSenderId: '215699536889',
  appId: '1:215699536889:web:2dd29267798367fcfd9b28',
};
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

//建立註冊方法
document.addEventListener('DOMContentLoaded', function () {
  const registerAccountBtn = document.querySelector('.register-account-btn');
  if (registerAccountBtn) {
    registerAccountBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const username = document.querySelector('.register-form input[type="text"]').value;
      const email = document.querySelector('.register-form input[type="email"]').value;
      const password = document.querySelector('.register-form input[type="password"]').value;

      const formData = {
        username,
        email,
        password,
      };
      // 資料上傳到firebase
      const dataRef = ref(database, 'account');
      push(dataRef, formData);
    });
  }

  // 建立登入方法
  const loginAccountBtn = document.querySelector('.login-account-btn');
  if (loginAccountBtn) {
    loginAccountBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const email = document.querySelector('.login-form input[type="email"]').value;
      const password = document.querySelector('.login-form input[type="password"]').value;
      const dataRef = ref(database, 'account');

      // 取得資料庫並比對email及password，判斷登入成功或失敗
      onValue(dataRef, (snapshot) => {
        let success = false;
        snapshot.forEach((item) => {
          const itemKey = item.key;
          const itemData = item.val();
          if (success) {
            return;
          }
          if (itemData.email === email && itemData.password === password) {
            success = true;
            alert('登入成功');
          }
        });
        if (!success) {
          alert('帳號或密碼錯誤');
        }
      });
    });
  }
});

# 3words

## Firebase Authentication

* Google  
https://www.firebase.com/docs/web/guide/login/google.html
* User Based Security   
https://www.firebase.com/docs/security/guide/user-security.html
* User Authentication (javascript)  
https://www.firebase.com/docs/web/guide/user-auth.html
* User Authentication (AngularFire)  
https://www.firebase.com/docs/web/libraries/angular/guide/user-auth.html
* AngularFire $firebaseAuth  
https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication
* Firebase example  
https://github.com/firebase/angularfire-seed

## Firebase security

Security rules :    

```
{
    "rules": {
        ".read": false,
        ".write": false,
        
        "users": {
          "$user_id": {
            ".read": "$user_id === auth.uid",
            ".write": "$user_id === auth.uid"
            
          }          
        }
    }
}
```   

Users can only access their own data.

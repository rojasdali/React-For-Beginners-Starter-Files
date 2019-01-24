import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDhs6mFrm2zmLISbpwoxcwSO33C5nDUEoc",
        authDomain: "catch-of-the-day-dali.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-dali.firebaseio.com"
      }
)

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base